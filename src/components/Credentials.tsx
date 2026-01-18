
import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';

interface CredentialsProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    certifications: PortfolioData['certifications'];
    education: PortfolioData['education'];
}

export function Credentials({ darkMode, language, certifications, education }: CredentialsProps) {
    return (
        <section id="credentials" className={`py-32 ${darkMode ? 'bg-[#0B1120] text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-500/10 text-purple-500 border border-purple-500/20 mb-6 inline-block">
                            {language === 'en' ? 'Credentials' : 'Certifications'}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {language === 'en' ? 'Certifications & Education' : 'Certifications & Diplômes'}
                        </h2>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">
                                {language === 'en' ? 'Professional Certifications' : 'Certifications Professionnelles'}
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {certifications && certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-2xl border ${darkMode
                                            ? 'bg-[#151B2E] border-white/5 hover:border-purple-500/30'
                                            : 'bg-white border-gray-100 hover:border-purple-500/30 shadow-lg shadow-gray-200/50'
                                        } transition-colors group relative`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-full ${darkMode ? 'bg-white/5 group-hover:bg-purple-500/10' : 'bg-gray-50 group-hover:bg-purple-50'
                                            } transition-colors`}>
                                            <img
                                                src={`https://cdn.simpleicons.org/${cert.name.toLowerCase().includes('aws') ? 'amazonwebservices' : 'kubernetes'}`}
                                                alt=""
                                                className={`w-6 h-6 object-contain ${darkMode ? 'invert' : ''} opacity-70 group-hover:opacity-100 transition-opacity`}
                                                onError={(e) => e.currentTarget.style.display = 'none'}
                                            />
                                            {/* Fallback Icon if image fails or for generic certs */}
                                            <Award size={24} className={`text-purple-500 ${cert.name.toLowerCase().includes('aws') || cert.name.toLowerCase().includes('kubernetes') ? 'hidden' : 'block'}`} />
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">{cert.name}</h4>
                                            <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {cert.issuer} • <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>{cert.year}</span>
                                            </p>
                                        </div>

                                        <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">
                                {language === 'en' ? 'Education' : 'Formation'}
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {education && education.map((edu, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-2xl border ${darkMode
                                            ? 'bg-[#151B2E] border-white/5 hover:border-blue-500/30'
                                            : 'bg-white border-gray-100 hover:border-blue-500/30 shadow-lg shadow-gray-200/50'
                                        } transition-colors group`}
                                >
                                    <h4 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{edu.degree}</h4>
                                    <p className={`text-base mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.school}</p>

                                    <div className="flex items-center justify-between text-sm">
                                        <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                                            {edu.year}
                                        </span>
                                    </div>

                                    {edu.description && (
                                        <p className={`mt-4 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                            {edu.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
