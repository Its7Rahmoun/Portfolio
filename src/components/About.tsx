import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Clock, Layers, Bot, Cloud, Workflow } from 'lucide-react';
import { PortfolioData } from '@/hooks/usePortfolioData';
import { GlassCard } from '@/components/layout/GlassCard';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const highlightIcons = {
    layers: Layers,
    bot: Bot,
    cloud: Cloud,
    workflow: Workflow,
};

interface AboutProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    profile: PortfolioData['profile'];
    experience: PortfolioData['experience'];
    highlights: PortfolioData['aboutHighlights'];
}

export function About({ darkMode, language, profile, experience, highlights }: AboutProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" ref={ref} className="relative overflow-hidden py-24 md:py-32">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid items-start gap-16 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={`mb-6 inline-block rounded-full border px-4 py-2 text-sm font-semibold ${
                            darkMode ? 'border-blue-400/30 bg-blue-500/10 text-blue-300' : 'border-blue-200 bg-blue-100 text-blue-700'
                        }`}>
                            {language === 'en' ? 'About Me' : 'À propos'}
                        </span>
                        <div className={`relative mx-auto mb-8 aspect-square max-w-md overflow-hidden rounded-3xl border ${
                            darkMode ? 'border-white/15' : 'border-slate-200'
                        }`}>
                            <ImageWithFallback
                                src="/images/453000AB-ED3D-4449-B1EC-C171E8DA0057.jpeg"
                                alt={`Portrait of ${profile.name}`}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {highlights?.map((item, index) => {
                                const Icon = highlightIcons[item.icon as keyof typeof highlightIcons] || Layers;
                                return (
                                    <motion.div
                                        key={item.text}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                                    >
                                        <GlassCard darkMode={darkMode} className="p-4 text-center">
                                            <Icon className="mx-auto mb-2 h-6 w-6 text-[var(--color-accent)]" aria-hidden="true" />
                                            <p className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                                                {language === 'en' ? item.text : item.textFr}
                                            </p>
                                        </GlassCard>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            className={`font-display mb-6 text-4xl font-bold lg:text-5xl ${darkMode ? 'text-white' : 'text-slate-900'}`}
                        >
                            {profile.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 }}
                            className={`mb-10 text-lg leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-600'}`}
                        >
                            {profile.bio}
                        </motion.p>
                        <div className="mb-6 flex items-center gap-3">
                            <Briefcase className="text-[var(--color-accent)]" size={24} aria-hidden="true" />
                            <h3 className={`font-display text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                {language === 'en' ? 'Professional Journey' : 'Parcours professionnel'}
                            </h3>
                        </div>
                        <div className="space-y-3">
                            {experience?.map((item, index) => (
                                <motion.div
                                    key={`${item.company}-${item.year}`}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + index * 0.08 }}
                                >
                                    <GlassCard darkMode={darkMode} className="flex items-start gap-4 p-4">
                                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                                            darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                            <Clock size={20} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className={`mb-1 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.year}</p>
                                            <h4 className={`mb-1 font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                                {language === 'en' ? item.title : item.titleFr || item.title}
                                            </h4>
                                            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{item.company}</p>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
