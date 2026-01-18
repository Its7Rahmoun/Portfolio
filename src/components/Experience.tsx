
import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Calendar, Building, TrendingUp, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    experience: PortfolioData['experience'];
}

export function Experience({ darkMode, language, experience }: ExperienceProps) {
    return (
        <section id="experience" className={`py-32 ${darkMode ? 'bg-[#0B1120] text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-green-500/10 text-green-500 border border-green-500/20 mb-6 inline-block">
                            {language === 'en' ? 'Career Journey' : 'Parcours Professionnel'}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {language === 'en' ? 'Professional Experience' : 'Expérience Professionnelle'}
                        </h2>
                        <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {language === 'en'
                                ? 'Building scalable systems and leading cloud transformations'
                                : 'Construction de systèmes évolutifs et direction de transformations cloud'}
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className={`absolute left-0 md:left-[19px] top-0 bottom-0 w-[2px] ${darkMode ? 'bg-white/10' : 'bg-gray-200'} hidden md:block`} />

                    <div className="space-y-16">
                        {experience && experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative md:pl-16"
                            >
                                {/* Timeline Dot */}
                                <div className={`hidden md:flex absolute left-0 top-0 w-10 h-10 rounded-full items-center justify-center border-4 z-10 ${darkMode ? 'bg-[#0B1120] border-green-500' : 'bg-white border-green-500'}`}>
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>

                                {/* Content Card */}
                                <div className={`rounded-3xl p-8 ${darkMode ? 'bg-[#151B2E] border border-white/5' : 'bg-white border border-gray-100 shadow-xl shadow-gray-200/50'} relative overflow-hidden group hover:border-green-500/30 transition-colors`}>

                                    <div className="grid lg:grid-cols-3 gap-8">
                                        <div className="lg:col-span-2">
                                            {/* Header */}
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                                <h3 className="text-2xl font-bold">
                                                    {language === 'en' ? item.title : (item.titleFr || item.title)}
                                                </h3>
                                                {item.year.includes('Present') && (
                                                    <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/30">
                                                        Current
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-4 text-sm mb-8 text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <Building size={16} className="text-green-500" />
                                                    <span>{item.company}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} className="text-green-500" />
                                                    <span>{item.year}</span>
                                                </div>
                                            </div>

                                            {/* Bullet Points */}
                                            <ul className="space-y-4 mb-8">
                                                {item.details && item.details.map((detail, idx) => (
                                                    <li key={idx} className="flex gap-3">
                                                        <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Tech Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies && item.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`px-3 py-1 rounded-lg text-sm font-medium ${darkMode ? 'bg-white/5 text-gray-400 border border-white/5' : 'bg-gray-100 text-gray-600'} hover:text-green-400 transition-colors`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Metrics Column */}
                                        <div className="lg:col-span-1">
                                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 h-full content-start">
                                                {item.metrics && item.metrics.map((metric, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`p-4 rounded-2xl ${darkMode ? 'bg-white/5' : 'bg-gray-50'} border ${darkMode ? 'border-white/5' : 'border-gray-100'} text-center`}
                                                    >
                                                        <div className="text-2xl font-bold text-green-500 mb-1">{metric.value}</div>
                                                        <div className={`text-xs uppercase tracking-wider font-semibold ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{metric.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
