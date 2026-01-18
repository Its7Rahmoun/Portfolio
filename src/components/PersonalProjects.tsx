
import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Github, FolderGit2, ArrowUpRight } from 'lucide-react';

interface PersonalProjectsProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    projects: PortfolioData['personalProjects'];
}

export function PersonalProjects({ darkMode, language, projects }: PersonalProjectsProps) {
    return (
        <section className={`py-24 ${darkMode ? 'bg-[#0B1120]' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="flex items-center gap-4 mb-12">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                        <FolderGit2 size={24} />
                    </div>
                    <div>
                        <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {language === 'en' ? 'Personal Projects' : 'Projets Personnels'}
                        </h2>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {language === 'en' ? 'Explorations in AI & Machine Learning' : 'Explorations en IA et Machine Learning'}
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects && projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`group flex flex-col p-6 rounded-2xl border transition-all ${darkMode
                                    ? 'bg-[#151B2E] border-white/5 hover:border-indigo-500/30'
                                    : 'bg-white border-gray-100 hover:border-indigo-500/30 shadow-lg shadow-gray-200/50'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <FolderGit2 size={40} className="text-indigo-500" />
                                <div className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-white/5 group-hover:bg-indigo-500/20 text-gray-400 group-hover:text-indigo-400' : 'bg-gray-100 group-hover:bg-indigo-100 text-gray-500 group-hover:text-indigo-600'}`}>
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>

                            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'} transition-colors`}>
                                {project.title}
                            </h3>

                            <p className={`text-sm mb-6 flex-1 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className={`text-xs px-2.5 py-1 rounded-md font-medium ${darkMode
                                                ? 'bg-indigo-500/10 text-indigo-300'
                                                : 'bg-indigo-50 text-indigo-700'
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
