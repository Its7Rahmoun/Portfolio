import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Calendar, Building, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { GlassCard } from '@/components/layout/GlassCard';
import { MetricCountUp } from '@/components/layout/MetricCountUp';

interface ExperienceProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    experience: PortfolioData['experience'];
}

export function Experience({ darkMode, language, experience }: ExperienceProps) {
    return (
        <section id="experience" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <SectionHeader
                    darkMode={darkMode}
                    accent="green"
                    badge={language === 'en' ? 'Career Journey' : 'Parcours Professionnel'}
                    title={language === 'en' ? 'Professional Experience' : 'Expérience Professionnelle'}
                    subtitle={language === 'en'
                        ? 'Building scalable systems, cloud platforms, and agentic workflows.'
                        : 'Systèmes évolutifs, plateformes cloud et workflows agentiques.'}
                />
                <div className="relative">
                    <div className={`absolute bottom-0 left-[19px] top-0 hidden w-px md:block ${darkMode ? 'bg-white/15' : 'bg-slate-200'}`} />
                    <div className="space-y-12">
                        {experience?.map((item, index) => {
                            const current = /present|ongoing/i.test(item.year);
                            return (
                                <motion.div
                                    key={`${item.company}-${item.year}`}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="relative md:pl-16"
                                >
                                    <div className={`absolute left-0 top-0 z-10 hidden h-10 w-10 items-center justify-center rounded-full border-4 md:flex ${
                                        darkMode ? 'border-emerald-400 bg-[#0B0B10]' : 'border-emerald-500 bg-white'
                                    }`}>
                                        <span className="h-3 w-3 rounded-full bg-emerald-400" />
                                    </div>
                                    <GlassCard darkMode={darkMode} hoverAccent="hover:border-emerald-400/40" className="p-6 md:p-8">
                                        <div className="grid gap-8 lg:grid-cols-3">
                                            <div className="lg:col-span-2">
                                                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center">
                                                    <h3 className="font-display text-2xl font-bold">
                                                        {language === 'en' ? item.title : item.titleFr || item.title}
                                                    </h3>
                                                    {current && (
                                                        <span className="w-fit rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <div className={`mb-6 flex flex-wrap gap-4 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                    <div className="flex items-center gap-2">
                                                        <Building size={16} className="text-emerald-400" aria-hidden="true" />
                                                        <span>{item.company}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Calendar size={16} className="text-emerald-400" aria-hidden="true" />
                                                        <span>{item.year}</span>
                                                    </div>
                                                </div>
                                                <ul className="mb-6 space-y-3">
                                                    {item.details?.map((detail) => (
                                                        <li key={detail} className="flex gap-3">
                                                            <TrendingUp className="mt-1 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                                                            <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.technologies?.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className={`rounded-lg px-3 py-1 text-sm font-medium ${
                                                                darkMode ? 'border border-white/10 bg-white/5 text-slate-300' : 'bg-slate-100 text-slate-600'
                                                            }`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 content-start gap-3 lg:grid-cols-1">
                                                {item.metrics?.map((metric) => (
                                                    <MetricCountUp
                                                        key={`${metric.label}-${metric.value}`}
                                                        value={metric.value}
                                                        label={metric.label}
                                                        darkMode={darkMode}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
