
import { PortfolioData } from '@/hooks/usePortfolioData';

interface EducationProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    education: PortfolioData['education'];
}

export function Education({ darkMode, language, education }: EducationProps) {
    return (
        <section id="education" className={`py-20 ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl font-bold mb-12 text-center">{language === 'en' ? 'Education' : 'Formation'}</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {education && education.map((edu, index) => (
                        <div key={index} className={`p-6 rounded-2xl ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'} hover:shadow-lg transition-all`}>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                    <p className={`text-lg ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>{edu.school}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                                    {edu.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
