import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { GlassCard } from '@/components/layout/GlassCard';

interface CredentialsProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    certifications: PortfolioData['certifications'];
    education: PortfolioData['education'];
}

export function Credentials({ darkMode, language, certifications, education }: CredentialsProps) {
    return (
        <section id="credentials" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <SectionHeader
                    darkMode={darkMode}
                    accent="purple"
                    badge={language === 'en' ? 'Credentials' : 'Parcours'}
                    title={language === 'en' ? 'Certifications & Education' : 'Certifications & Diplômes'}
                />
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="mb-8 flex items-center gap-3">
                            <div className={`rounded-lg p-2 ${darkMode ? 'bg-violet-500/20 text-violet-300' : 'bg-violet-100 text-violet-700'}`}>
                                <Award size={24} aria-hidden="true" />
                            </div>
                            <h3 className="font-display text-2xl font-bold">
                                {language === 'en' ? 'Professional Certifications' : 'Certifications Professionnelles'}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {certifications?.map((cert) => (
                                <GlassCard key={cert.name} darkMode={darkMode} hoverAccent="hover:border-violet-400/40" className="p-6">
                                    <div className="flex items-start gap-4">
                                        <Award size={24} className="shrink-0 text-violet-400" aria-hidden="true" />
                                        <div className="flex-1">
                                            <h4 className="mb-1 text-lg font-bold">{cert.name}</h4>
                                            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                {cert.issuer} · {cert.year}
                                            </p>
                                        </div>
                                        <CheckCircle2 size={20} className="shrink-0 text-emerald-400" aria-hidden="true" />
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <div className="mb-8 flex items-center gap-3">
                            <div className={`rounded-lg p-2 ${darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                                <GraduationCap size={24} aria-hidden="true" />
                            </div>
                            <h3 className="font-display text-2xl font-bold">
                                {language === 'en' ? 'Education' : 'Formation'}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {education?.map((edu) => (
                                <GlassCard key={edu.degree} darkMode={darkMode} className="p-6">
                                    <h4 className="mb-1 text-lg font-bold">{edu.degree}</h4>
                                    <p className={`mb-4 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{edu.school}</p>
                                    <span className={`rounded-full px-3 py-1 text-sm ${darkMode ? 'bg-white/5 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                                        {edu.year}
                                    </span>
                                    {edu.description && (
                                        <p className={`mt-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{edu.description}</p>
                                    )}
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
