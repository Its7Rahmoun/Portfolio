import * as THREE from 'three';
import type { PlanetStyle } from './planetConfig';

function hash(x: number, y: number) {
    const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return n - Math.floor(n);
}

function noise(x: number, y: number) {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = x - xi;
    const yf = y - yi;
    const u = xf * xf * (3 - 2 * xf);
    const v = yf * yf * (3 - 2 * yf);
    const a = hash(xi, yi);
    const b = hash(xi + 1, yi);
    const c = hash(xi, yi + 1);
    const d = hash(xi + 1, yi + 1);
    return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}

function fbm(x: number, y: number, octaves = 5) {
    let value = 0;
    let amp = 0.5;
    let freq = 1;
    for (let i = 0; i < octaves; i += 1) {
        value += noise(x * freq, y * freq) * amp;
        amp *= 0.5;
        freq *= 2;
    }
    return value;
}

function mix(a: number[], b: number[], t: number) {
    return [
        a[0] + (b[0] - a[0]) * t,
        a[1] + (b[1] - a[1]) * t,
        a[2] + (b[2] - a[2]) * t,
    ];
}

export function createPlanetTexture(style: PlanetStyle, size = 1024) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size / 2;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Could not create planet texture canvas');
    }

    const image = ctx.createImageData(canvas.width, canvas.height);
    const data = image.data;

    for (let y = 0; y < canvas.height; y += 1) {
        for (let x = 0; x < canvas.width; x += 1) {
            const u = x / canvas.width;
            const v = y / canvas.height;
            const nx = u * 8;
            const ny = v * 4;
            let color = [0, 0, 0];

            if (style === 'lava') {
                const n = fbm(nx * 1.6, ny * 1.6, 6);
                const cracks = Math.pow(Math.max(0, n - 0.55), 1.6);
                const rock = mix([28, 16, 12], [72, 32, 18], n);
                const lava = mix([180, 40, 8], [255, 180, 40], cracks * 4);
                color = cracks > 0.02 ? lava : rock;
            } else if (style === 'gas') {
                const bands = Math.sin(v * Math.PI * 14 + fbm(nx, ny, 3) * 3.2);
                const swirl = fbm(nx * 0.8 + bands, ny * 2.4, 5);
                color = mix([92, 48, 18], [230, 168, 86], (bands * 0.5 + 0.5) * 0.7 + swirl * 0.3);
            } else if (style === 'neural') {
                const n = fbm(nx * 2.2, ny * 2.2, 6);
                const veins = Math.pow(Math.max(0, Math.abs(n - 0.5) * 2 - 0.72), 2);
                const base = mix([8, 10, 28], [24, 18, 64], n);
                const glow = mix([14, 180, 220], [180, 120, 255], veins * 8);
                color = veins > 0.01 ? glow : base;
            } else if (style === 'ice') {
                const n = fbm(nx * 1.8, ny * 1.8, 5);
                const frost = Math.pow(n, 1.4);
                color = mix([70, 96, 140], [230, 242, 255], frost);
            } else {
                const n = fbm(nx * 1.4, ny * 1.4, 6);
                const land = n > 0.52;
                const ocean = mix([8, 28, 78], [18, 78, 140], n);
                const continent = mix([18, 72, 42], [92, 120, 58], n);
                color = land ? continent : ocean;
                if (land && hash(x * 0.2, y * 0.2) > 0.985) {
                    color = [255, 220, 140];
                }
            }

            const i = (y * canvas.width + x) * 4;
            data[i] = color[0];
            data[i + 1] = color[1];
            data[i + 2] = color[2];
            data[i + 3] = 255;
        }
    }

    ctx.putImageData(image, 0, 0);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
    return texture;
}

export function createRingTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Could not create ring texture');
    }

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'rgba(255,210,140,0)');
    gradient.addColorStop(0.18, 'rgba(255,198,110,0.15)');
    gradient.addColorStop(0.35, 'rgba(255,230,180,0.85)');
    gradient.addColorStop(0.48, 'rgba(80,50,20,0.1)');
    gradient.addColorStop(0.62, 'rgba(255,200,120,0.7)');
    gradient.addColorStop(0.84, 'rgba(255,180,90,0.25)');
    gradient.addColorStop(1, 'rgba(255,210,140,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
}
