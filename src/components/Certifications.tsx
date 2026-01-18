
import { PortfolioData } from '@/hooks/usePortfolioData';
import { Award } from 'lucide-react';

interface CertificationsProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    certifications: PortfolioData['certifications'];
}

export function Certifications({ darkMode, language, certifications }: CertificationsProps) {
    return (
        <section id="certifications" className={`py-20 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl font-bold mb-12 text-center">{language === 'en' ? 'Certifications' : 'Certifications'}</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications && certifications.map((cert, index) => (
                        <div key={index} className={`p-6 rounded-2xl flex items-start gap-4 ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'} hover:border-blue-500 transition-colors group`}>
                            <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'} group-hover:scale-110 transition-transform`}>
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1 group-hover:text-blue-500 transition-colors">{cert.name}</h3>
                                <p className={`text-sm mb-2 ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>{cert.issuer}</p>
                                <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-white/10' : 'bg-gray-100'}`}>
                                    {cert.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
