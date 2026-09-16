import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Github, FolderGit2, ArrowUpRight } from 'lucide-react';
import { GlassCard } from '@/components/layout/GlassCard';

interface PersonalProjectsProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    projects: PortfolioData['personalProjects'];
}

export function PersonalProjects({ darkMode, language, projects }: PersonalProjectsProps) {
    return (
        <section id="personal" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mb-12 flex items-center gap-4">
                    <div className={`rounded-xl p-3 ${darkMode ? 'bg-indigo-500/15 text-indigo-300' : 'bg-indigo-100 text-indigo-700'}`}>
                        <FolderGit2 size={24} aria-hidden="true" />
                    </div>
                    <div>
                        <h2 className={`font-display text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            {language === 'en' ? 'Personal Projects' : 'Projets Personnels'}
                        </h2>
                        <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            {language === 'en' ? 'Explorations in AI and machine learning' : 'Explorations en IA et machine learning'}
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects?.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                        >
                            <GlassCard darkMode={darkMode} hoverAccent="hover:border-indigo-400/40" className="flex h-full flex-col p-6">
                                <div className="mb-4 flex items-start justify-between">
                                    <Github size={28} className="text-indigo-400" aria-hidden="true" />
                                    <span className={`rounded-full p-2 ${darkMode ? 'bg-white/5 text-slate-300 group-hover:text-indigo-300' : 'bg-slate-100 text-slate-500'}`}>
                                        <ArrowUpRight size={18} aria-hidden="true" />
                                    </span>
                                </div>
                                <h3 className={`font-display mb-3 text-xl font-bold transition-colors duration-200 ${
                                    darkMode ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-700'
                                }`}>
                                    {project.title}
                                </h3>
                                <p className={`mb-6 flex-1 text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {project.description}
                                </p>
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                                                darkMode ? 'bg-indigo-500/15 text-indigo-200' : 'bg-indigo-50 text-indigo-700'
                                            }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
