import { Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { planets } from './planetConfig';
import { Planet } from './Planet';
import { ScrollCamera } from './ScrollCamera';

interface UniverseSceneProps {
    progress: number;
    mobile: boolean;
    enableBloom: boolean;
    animate: boolean;
}

export function UniverseScene({ progress, mobile, enableBloom, animate }: UniverseSceneProps) {
    const detail = mobile ? 32 : 64;

    return (
        <>
            <color attach="background" args={['#05060c']} />
            <fog attach="fog" args={['#05060c', 28, 95]} />
            <ambientLight intensity={0.28} />
            <directionalLight position={[20, 18, 12]} intensity={1.35} color="#fff4e5" />
            <pointLight position={[-18, 8, -10]} intensity={18} color="#3B82F6" distance={80} />
            <pointLight position={[16, -6, -30]} intensity={12} color="#38bdf8" distance={60} />
            <Stars radius={180} depth={60} count={mobile ? 1400 : 3800} factor={mobile ? 3 : 4.2} saturation={0} fade speed={animate ? 0.4 : 0} />
            {planets.map((planet) => (
                <Planet key={planet.id} planet={planet} detail={detail} showLabel={!mobile} />
            ))}
            <ScrollCamera progress={progress} enabled={animate} />
            {enableBloom && (
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0.35} luminanceSmoothing={0.9} intensity={0.55} mipmapBlur />
                </EffectComposer>
            )}
        </>
    );
}
