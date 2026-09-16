import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';
import type { PlanetDefinition } from './planetConfig';
import { createPlanetTexture, createRingTexture } from './createPlanetTexture';

const atmosphereVertex = `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const atmosphereFragment = `
  uniform vec3 uColor;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    float fresnel = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewDir))), 2.4);
    gl_FragColor = vec4(uColor, fresnel * 0.72);
  }
`;

interface PlanetProps {
    planet: PlanetDefinition;
    detail: number;
    showLabel: boolean;
}

export function Planet({ planet, detail, showLabel }: PlanetProps) {
    const group = useRef<THREE.Group>(null);
    const body = useRef<THREE.Mesh>(null);
    const map = useMemo(() => createPlanetTexture(planet.style, detail >= 48 ? 1024 : 512), [planet.style, detail]);
    const ringMap = useMemo(() => (planet.rings ? createRingTexture() : null), [planet.rings]);
    const atmosphereColor = useMemo(() => new THREE.Color(planet.atmosphere), [planet.atmosphere]);

    useFrame((_, delta) => {
        if (body.current) {
            body.current.rotation.y += delta * 0.08;
        }
        if (group.current) {
            group.current.rotation.y += delta * 0.01;
        }
    });

    return (
        <group position={planet.position}>
            <group ref={group}>
                <mesh ref={body} castShadow>
                    <sphereGeometry args={[planet.radius, detail, detail]} />
                    <meshStandardMaterial
                        map={map}
                        roughness={planet.style === 'ice' ? 0.25 : 0.72}
                        metalness={planet.style === 'neural' ? 0.35 : 0.08}
                        emissive={planet.style === 'lava' || planet.style === 'neural' ? atmosphereColor : '#000000'}
                        emissiveIntensity={planet.style === 'lava' ? 0.18 : planet.style === 'neural' ? 0.22 : 0}
                    />
                </mesh>
                <mesh scale={1.08}>
                    <sphereGeometry args={[planet.radius, Math.max(16, detail / 2), Math.max(16, detail / 2)]} />
                    <shaderMaterial
                        transparent
                        depthWrite={false}
                        blending={THREE.AdditiveBlending}
                        vertexShader={atmosphereVertex}
                        fragmentShader={atmosphereFragment}
                        uniforms={{ uColor: { value: atmosphereColor } }}
                    />
                </mesh>
                {planet.rings && ringMap && (
                    <mesh rotation={[Math.PI / 2.5, 0.2, 0.15]}>
                        <ringGeometry args={[planet.radius * 1.35, planet.radius * 2.15, 64]} />
                        <meshBasicMaterial
                            map={ringMap}
                            transparent
                            side={THREE.DoubleSide}
                            depthWrite={false}
                            opacity={0.9}
                        />
                    </mesh>
                )}
                {planet.moons && Array.from({ length: planet.moons }).map((_, index) => {
                    const orbit = planet.radius * (1.8 + index * 0.45);
                    const angle = (index / planet.moons) * Math.PI * 2;
                    return (
                        <Moon key={index} radius={planet.radius * 0.22} orbit={orbit} angle={angle} speed={0.25 + index * 0.1} />
                    );
                })}
                {planet.satellites && <Satellites radius={planet.radius} />}
            </group>
            {showLabel && (
                <Billboard position={[0, planet.radius + 1.4, 0]}>
                    <Text
                        fontSize={0.55}
                        color="#F8FAFC"
                        anchorX="center"
                        anchorY="middle"
                        outlineWidth={0.02}
                        outlineColor="#0B0B10"
                    >
                        {planet.label}
                    </Text>
                    <Text
                        position={[0, -0.55, 0]}
                        fontSize={0.28}
                        color="#94A3B8"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {planet.subtitle}
                    </Text>
                </Billboard>
            )}
        </group>
    );
}

function Moon({ radius, orbit, angle, speed }: { radius: number; orbit: number; angle: number; speed: number }) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.elapsedTime * speed + angle;
        ref.current.position.set(Math.cos(t) * orbit, Math.sin(t * 0.6) * radius, Math.sin(t) * orbit);
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[radius, 16, 16]} />
            <meshStandardMaterial color="#d6d3d1" roughness={0.9} />
        </mesh>
    );
}

function Satellites({ radius }: { radius: number }) {
    const group = useRef<THREE.Group>(null);

    useFrame((_, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.35;
            group.current.rotation.x += delta * 0.08;
        }
    });

    return (
        <group ref={group}>
            {[0, 1, 2].map((index) => (
                <mesh key={index} position={[radius * 1.7, index === 1 ? 0.8 : -0.4, index * 0.6 - 0.6]}>
                    <boxGeometry args={[0.18, 0.12, 0.28]} />
                    <meshStandardMaterial color="#e2e8f0" emissive="#3B82F6" emissiveIntensity={0.4} metalness={0.7} />
                </mesh>
            ))}
        </group>
    );
}
