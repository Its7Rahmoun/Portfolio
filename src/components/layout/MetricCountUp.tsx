import { useEffect, useState } from 'react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function parseMetric(value: string) {
    const match = value.match(/^([^\d]*)([\d][\d,]*(?:\.\d+)?)(.*)$/);
    if (!match) {
        return { prefix: '', number: null as number | null, suffix: value, decimals: 0 };
    }
    const raw = match[2];
    return {
        prefix: match[1],
        number: Number(raw.replace(/,/g, '')),
        suffix: match[3],
        decimals: raw.includes('.') ? raw.split('.')[1].length : 0,
    };
}

interface MetricCountUpProps {
    value: string;
    label: string;
    darkMode: boolean;
}

export function MetricCountUp({ value, label, darkMode }: MetricCountUpProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const parsed = parseMetric(value);
    const [display, setDisplay] = useState(value);

    useEffect(() => {
        if (!inView || parsed.number === null) {
            setDisplay(value);
            return;
        }

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) {
            setDisplay(value);
            return;
        }

        const duration = 900;
        const start = performance.now();
        let frame = 0;

        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = parsed.number! * eased;
            const formatted = parsed.decimals > 0 ? current.toFixed(parsed.decimals) : Math.round(current).toLocaleString();
            setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`);
            if (t < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, parsed.decimals, parsed.number, parsed.prefix, parsed.suffix, value]);

    return (
        <div
            ref={ref}
            className={`rounded-2xl border p-4 text-center ${
                darkMode ? 'border-white/15 bg-white/5' : 'border-slate-200 bg-white/80'
            }`}
        >
            <div className="font-display text-2xl font-bold text-[var(--color-accent)]">{display}</div>
            <div className={`mt-1 text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {label}
            </div>
        </div>
    );
}
