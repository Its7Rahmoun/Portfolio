import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { cameraWaypoints } from './planetConfig';

interface ScrollCameraProps {
    progress: number;
    enabled: boolean;
}

export function ScrollCamera({ progress, enabled }: ScrollCameraProps) {
    const { camera } = useThree();
    const look = useRef(new THREE.Vector3());
    const targetPos = useRef(new THREE.Vector3());
    const targetLook = useRef(new THREE.Vector3());

    const posCurve = useMemo(
        () => new THREE.CatmullRomCurve3(cameraWaypoints.positions, false, 'catmullrom', 0.25),
        [],
    );
    const lookCurve = useMemo(
        () => new THREE.CatmullRomCurve3(cameraWaypoints.looks, false, 'catmullrom', 0.25),
        [],
    );

    useFrame(() => {
        if (!enabled) return;
        const t = THREE.MathUtils.clamp(progress, 0, 1);
        posCurve.getPoint(t, targetPos.current);
        lookCurve.getPoint(t, targetLook.current);
        camera.position.lerp(targetPos.current, 0.075);
        look.current.lerp(targetLook.current, 0.075);
        camera.lookAt(look.current);
    });

    return null;
}
