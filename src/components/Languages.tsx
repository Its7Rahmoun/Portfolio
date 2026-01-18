
import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

interface LanguagesProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    languages: PortfolioData['languages'];
}

export function Languages({ darkMode, language, languages }: LanguagesProps) {
    return (
        <section id="languages" className={`py-32 ${darkMode ? 'bg-[#0B1120] text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-4xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-pink-500/10 text-pink-500 border border-pink-500/20 mb-6 inline-block">
                            {language === 'en' ? 'Communication' : 'Communication'}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {language === 'en' ? 'Languages' : 'Langues'}
                        </h2>
                        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {language === 'en'
                                ? 'Multilingual professional ready for international teams'
                                : 'Professionnel multilingue prêt pour des équipes internationales'}
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {languages && languages.map((lang, index) => (
                        <motion.div
                            key={lang.language}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-2xl border ${darkMode
                                    ? 'bg-[#151B2E] border-white/5 hover:border-pink-500/30'
                                    : 'bg-white border-gray-100 hover:border-pink-500/30 shadow-lg shadow-gray-200/50'
                                } transition-colors group`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    {/* Flag Display */}
                                    <div className="w-12 h-8 rounded overflow-hidden shadow-sm relative">
                                        <img
                                            src={`https://flagcdn.com/${lang.code.toLowerCase()}.svg`}
                                            alt={`${lang.language} flag`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/10"></div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg">{lang.language}</h3>
                                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {lang.level}
                                        </p>
                                    </div>
                                </div>
                                <span className="font-bold text-xl">{lang.percentage}%</span>
                            </div>

                            {/* Progress Bar */}
                            <div className={`h-2 rounded-full w-full overflow-hidden ${darkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.percentage}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Remote Banner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className={`p-4 rounded-xl text-center border ${darkMode
                            ? 'bg-[#151B2E] border-white/5'
                            : 'bg-white border-gray-100'
                        }`}
                >
                    <div className="flex items-center justify-center gap-3 text-sm font-medium">
                        <Globe size={18} className="text-purple-500" />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                            {language === 'en'
                                ? 'Available for remote roles worldwide'
                                : 'Disponible pour des postes à distance dans le monde entier'}
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
