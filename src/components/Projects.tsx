import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { PortfolioData } from '@/hooks/usePortfolioData';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { GlassCard } from '@/components/layout/GlassCard';

interface ProjectsProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    projects: PortfolioData['projects'];
}

export function Projects({ darkMode, language, projects }: ProjectsProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const t = language === 'en'
        ? { badge: 'Featured Work', title: 'Selected Projects', subtitle: 'Cloud-native platforms, multi-agent systems, and AI-powered products', viewCode: 'View Code', liveDemo: 'Live Demo' }
        : { badge: 'Projets Phares', title: 'Projets Sélectionnés', subtitle: 'Plateformes cloud-native, systèmes multi-agents et produits IA', viewCode: 'Voir le code', liveDemo: 'Démo' };

    return (
        <section id="projects" ref={ref} className="relative overflow-hidden py-24 md:py-32">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                <SectionHeader darkMode={darkMode} accent="cyan" badge={t.badge} title={t.title} subtitle={t.subtitle} />
                <div className="space-y-8">
                    {projects?.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 28 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, delay: 0.08 + index * 0.08 }}
                        >
                            <GlassCard darkMode={darkMode} hoverAccent="hover:border-cyan-400/40" className="grid gap-8 p-6 md:p-8 lg:grid-cols-5">
                                <div className={`relative aspect-video overflow-hidden rounded-2xl lg:col-span-2 ${
                                    darkMode ? 'bg-gradient-to-br from-blue-500/20 to-violet-500/20' : 'bg-gradient-to-br from-blue-100 to-violet-100'
                                }`}>
                                    {project.coverName ? (
                                        <div className="absolute inset-0 flex items-center justify-center p-6">
                                            <h3 className={`select-none text-center font-display text-3xl font-black uppercase tracking-tighter lg:text-4xl ${
                                                darkMode ? 'text-white/25' : 'text-slate-900/15'
                                            }`}>
                                                {project.coverName}
                                            </h3>
                                        </div>
                                    ) : (
                                        <ImageWithFallback src={project.image} alt={project.title} className="h-full w-full object-cover" />
                                    )}
                                    {project.year && (
                                        <div className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                                            {project.year}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col justify-between lg:col-span-3">
                                    <div>
                                        <h3 className={`font-display mb-4 text-2xl font-bold lg:text-3xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                            {project.title}
                                        </h3>
                                        <p className={`mb-6 text-base leading-relaxed lg:text-lg ${darkMode ? 'text-slate-200' : 'text-slate-600'}`}>
                                            {project.description}
                                        </p>
                                        {project.highlights && project.highlights.length > 0 && (
                                            <div className="mb-5 flex flex-wrap gap-2">
                                                {project.highlights.map((highlight) => (
                                                    <div
                                                        key={highlight.label}
                                                        className={`flex items-center gap-2 rounded-full px-3 py-1.5 ${
                                                            darkMode ? 'border border-white/15 bg-white/5' : 'border border-slate-200 bg-slate-100'
                                                        }`}
                                                    >
                                                        <Zap size={14} className="text-emerald-400" aria-hidden="true" />
                                                        <span className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>{highlight.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {project.tags?.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`rounded-lg px-3 py-1.5 text-sm ${
                                                        darkMode ? 'border border-white/10 bg-white/5 text-slate-200' : 'border border-slate-200 bg-slate-100 text-slate-700'
                                                    }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-6 py-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                                                    darkMode ? 'border-white/20 bg-white/10 text-white hover:bg-white/20' : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100'
                                                }`}
                                            >
                                                <Github size={18} aria-hidden="true" />
                                                {t.viewCode}
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2 font-semibold text-white transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                                            >
                                                {t.liveDemo}
                                                <ExternalLink size={18} aria-hidden="true" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
