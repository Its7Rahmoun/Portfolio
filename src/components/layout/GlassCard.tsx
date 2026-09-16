import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    darkMode: boolean;
    hoverAccent?: string;
}

export function GlassCard({ children, className, darkMode, hoverAccent = 'hover:border-[var(--color-accent)]/40' }: GlassCardProps) {
    return (
        <div
            className={cn(
                'rounded-2xl border backdrop-blur-[15px] transition-all duration-200',
                darkMode
                    ? `bg-white/[0.08] border-white/20 ${hoverAccent}`
                    : 'bg-white/80 border-slate-200 hover:border-blue-400/50 shadow-md',
                className,
            )}
        >
            {children}
        </div>
    );
}
