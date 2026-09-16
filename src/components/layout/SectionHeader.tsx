import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    badge: string;
    title: string;
    subtitle?: string;
    darkMode: boolean;
    accent?: string;
}

export function SectionHeader({ badge, title, subtitle, darkMode, accent = 'blue' }: SectionHeaderProps) {
    const accents: Record<string, string> = {
        blue: darkMode ? 'bg-blue-500/10 border-blue-400/30 text-blue-300' : 'bg-blue-100 border-blue-200 text-blue-700',
        cyan: darkMode ? 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300' : 'bg-cyan-100 border-cyan-200 text-cyan-700',
        green: darkMode ? 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300' : 'bg-emerald-100 border-emerald-200 text-emerald-700',
        purple: darkMode ? 'bg-violet-500/10 border-violet-400/30 text-violet-300' : 'bg-violet-100 border-violet-200 text-violet-700',
        pink: darkMode ? 'bg-fuchsia-500/10 border-fuchsia-400/30 text-fuchsia-300' : 'bg-fuchsia-100 border-fuchsia-200 text-fuchsia-700',
    };

    return (
        <div className="mb-16 text-center md:mb-20">
            <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn('mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-semibold', accents[accent] || accents.blue)}
            >
                {badge}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className={cn('font-display text-4xl font-bold tracking-tight md:text-5xl', darkMode ? 'text-white' : 'text-slate-900')}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.14 }}
                    className={cn('mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg', darkMode ? 'text-slate-300' : 'text-slate-600')}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
