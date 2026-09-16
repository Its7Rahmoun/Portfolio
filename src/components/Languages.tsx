import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { GlassCard } from '@/components/layout/GlassCard';

interface LanguagesProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    languages: PortfolioData['languages'];
}

export function Languages({ darkMode, language, languages }: LanguagesProps) {
    return (
        <section id="languages" className="py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-12">
                <SectionHeader
                    darkMode={darkMode}
                    accent="pink"
                    badge={language === 'en' ? 'Communication' : 'Communication'}
                    title={language === 'en' ? 'Languages' : 'Langues'}
                    subtitle={language === 'en'
                        ? 'Multilingual professional ready for international teams'
                        : 'Professionnel multilingue prêt pour des équipes internationales'}
                />
                <div className="mb-10 grid gap-6 md:grid-cols-2">
                    {languages?.map((lang, index) => (
                        <motion.div
                            key={lang.language}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <GlassCard darkMode={darkMode} hoverAccent="hover:border-fuchsia-400/40" className="p-6">
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={`https://flagcdn.com/${lang.code.toLowerCase()}.svg`}
                                            alt=""
                                            className="h-8 w-12 rounded object-cover"
                                        />
                                        <div>
                                            <h3 className="text-lg font-bold">{lang.language}</h3>
                                            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{lang.level}</p>
                                        </div>
                                    </div>
                                    <span className="text-xl font-bold">{lang.percentage}%</span>
                                </div>
                                <div className={`h-2 w-full overflow-hidden rounded-full ${darkMode ? 'bg-white/10' : 'bg-slate-200'}`}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
                                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500"
                                    />
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
                <GlassCard darkMode={darkMode} className="p-4 text-center">
                    <div className="flex items-center justify-center gap-3 text-sm font-medium">
                        <Globe size={18} className="text-fuchsia-400" aria-hidden="true" />
                        <span className="bg-gradient-to-r from-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                            {language === 'en'
                                ? 'Available for remote roles worldwide'
                                : 'Disponible pour des postes à distance dans le monde entier'}
                        </span>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
