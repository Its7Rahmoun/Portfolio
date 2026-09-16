import * as THREE from 'three';

export type PlanetStyle = 'lava' | 'gas' | 'neural' | 'ice' | 'earth';

export interface PlanetDefinition {
    id: string;
    label: string;
    subtitle: string;
    position: [number, number, number];
    radius: number;
    style: PlanetStyle;
    atmosphere: string;
    rings?: boolean;
    moons?: number;
    satellites?: boolean;
}

export const planets: PlanetDefinition[] = [
    {
        id: 'java',
        label: 'Java',
        subtitle: 'Programming',
        position: [14, 0.4, 8],
        radius: 3.1,
        style: 'lava',
        atmosphere: '#ff6b2c',
    },
    {
        id: 'aws',
        label: 'AWS',
        subtitle: 'Cloud & DevOps',
        position: [-13, 1.8, -8],
        radius: 4.2,
        style: 'gas',
        atmosphere: '#ffb347',
        rings: true,
    },
    {
        id: 'ai',
        label: 'AI / RAG',
        subtitle: 'Agents & Models',
        position: [16, -0.6, -24],
        radius: 3.4,
        style: 'neural',
        atmosphere: '#38bdf8',
    },
    {
        id: 'mcp',
        label: 'MCP',
        subtitle: 'Agent Tools',
        position: [-14, 2.6, -40],
        radius: 2.4,
        style: 'ice',
        atmosphere: '#a78bfa',
        moons: 3,
    },
    {
        id: 'network',
        label: 'Networking',
        subtitle: 'Systems & Security',
        position: [8, 0.8, -56],
        radius: 3.2,
        style: 'earth',
        atmosphere: '#60a5fa',
        satellites: true,
    },
];

export const cameraWaypoints = {
    positions: [
        new THREE.Vector3(0, 16, 54),
        new THREE.Vector3(8, 8, 28),
        new THREE.Vector3(20, 2.2, 16),
        new THREE.Vector3(-4, 5, 2),
        new THREE.Vector3(22, 2.4, -16),
        new THREE.Vector3(-7, 5.2, -32),
        new THREE.Vector3(15, 3.4, -48),
        new THREE.Vector3(0, 20, -26),
    ],
    looks: [
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(6, 1, 6),
        new THREE.Vector3(14, 0.4, 8),
        new THREE.Vector3(-13, 1.8, -8),
        new THREE.Vector3(16, -0.6, -24),
        new THREE.Vector3(-14, 2.6, -40),
        new THREE.Vector3(8, 0.8, -56),
        new THREE.Vector3(0, 1, -24),
    ],
};
