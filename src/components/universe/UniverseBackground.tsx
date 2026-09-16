import { lazy, Suspense, useEffect, useState } from 'react';
import { usePrefersReducedMotion, hasWebGL, isMobileViewport } from '@/lib/usePrefersReducedMotion';
import { useScrollProgress } from '@/lib/useScrollProgress';

const UniverseCanvas = lazy(() => import('./UniverseCanvas'));

interface UniverseBackgroundProps {
    enabled: boolean;
    lightMode: boolean;
}

export function UniverseBackground({ enabled, lightMode }: UniverseBackgroundProps) {
    const reducedMotion = usePrefersReducedMotion();
    const progress = useScrollProgress();
    const [ready, setReady] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [webgl, setWebgl] = useState(true);

    useEffect(() => {
        setMobile(isMobileViewport());
        setWebgl(hasWebGL());
        setReady(true);
        const onResize = () => setMobile(isMobileViewport());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const use3d = enabled && ready && webgl && !reducedMotion;

    return (
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[#05060c]" />
            <div className="starfield absolute inset-0" />
            {use3d ? (
                <Suspense fallback={null}>
                    <UniverseCanvas
                        progress={progress}
                        mobile={mobile}
                        enableBloom={!mobile}
                        animate={!reducedMotion}
                    />
                </Suspense>
            ) : null}
            {lightMode && <div className="absolute inset-0 bg-slate-100/78" />}
        </div>
    );
}
