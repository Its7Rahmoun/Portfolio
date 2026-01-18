import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { User, Briefcase, Clock } from 'lucide-react';
import { PortfolioData } from '@/hooks/usePortfolioData';

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
        <section
            id="about"
            ref={ref}
            className={`relative py-32 overflow-hidden ${darkMode
                ? 'bg-gradient-to-b from-slate-950 via-zinc-950 to-slate-950'
                : 'bg-gradient-to-b from-white via-gray-50 to-white'
                }`}
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.03),transparent_50%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Portrait & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${darkMode
                                ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                                : 'bg-blue-100 border border-blue-200 text-blue-600'
                                }`}>
                                About Me
                            </span>
                        </motion.div>

                        {/* Portrait Placeholder */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`relative w-full aspect-square max-w-md mx-auto mb-8 rounded-3xl overflow-hidden ${darkMode
                                ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-white/10'
                                : 'bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-gray-200'
                                }`}
                        >
                            <img
                                src="/images/453000AB-ED3D-4449-B1EC-C171E8DA0057.jpeg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </motion.div>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-3">
                            {highlights && highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className={`p-4 rounded-xl text-center backdrop-blur-sm ${darkMode
                                        ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                                        : 'bg-white border border-gray-200 hover:shadow-md'
                                        }`}
                                >
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <p className={`text-sm ${darkMode ? 'text-white/80' : 'text-gray-700'
                                        }`}>
                                        {language === 'en' ? item.text : item.textFr}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Bio & Timeline */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'
                                }`}
                        >
                            {profile.title}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`space-y-4 mb-8 text-lg leading-relaxed ${darkMode ? 'text-white/70' : 'text-gray-600'
                                }`}
                        >
                            <p>{profile.bio}</p>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-12"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Briefcase className={darkMode ? 'text-blue-400' : 'text-blue-500'} size={24} />
                                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Professional Journey
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {experience && experience.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                        whileHover={{ x: 4 }}
                                        className={`flex items-start gap-4 p-4 rounded-xl transition-all ${darkMode
                                            ? 'hover:bg-white/5'
                                            : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${darkMode
                                            ? 'bg-blue-500/20 text-blue-400'
                                            : 'bg-blue-100 text-blue-600'
                                            }`}>
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <p className={`text-sm mb-1 ${darkMode ? 'text-white/50' : 'text-gray-500'
                                                }`}>
                                                {item.year}
                                            </p>
                                            <h4 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'
                                                }`}>
                                                {language === 'en' ? item.title : item.titleFr}
                                            </h4>
                                            <p className={`text-sm ${darkMode ? 'text-white/60' : 'text-gray-600'
                                                }`}>
                                                {item.company}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
