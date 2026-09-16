import { Canvas } from '@react-three/fiber';
import { UniverseScene } from './UniverseScene';

interface UniverseCanvasProps {
    progress: number;
    mobile: boolean;
    enableBloom: boolean;
    animate: boolean;
}

export default function UniverseCanvas({ progress, mobile, enableBloom, animate }: UniverseCanvasProps) {
    return (
        <Canvas
            dpr={[1, 1.5]}
            gl={{ antialias: !mobile, powerPreference: 'high-performance', alpha: false }}
            camera={{ position: [0, 16, 54], fov: 48, near: 0.1, far: 220 }}
            style={{ pointerEvents: 'none' }}
        >
            <UniverseScene progress={progress} mobile={mobile} enableBloom={enableBloom} animate={animate} />
        </Canvas>
    );
}
