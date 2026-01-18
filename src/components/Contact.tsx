
import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

interface ContactProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    contact: PortfolioData['contact'];
    profile: PortfolioData['profile'];
}

export function Contact({ darkMode, language, contact, profile }: ContactProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className={`py-32 pb-0 ${darkMode ? 'bg-[#0B1120] text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {language === 'en' ? "Let's Work Together" : "Travaillons Ensemble"}
                        </h2>
                        <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {language === 'en'
                                ? "Available for freelance work, full-time opportunities, and consulting. Let's discuss how I can help build your next project."
                                : "Disponible pour des missions freelance, des opportunités à temps plein et du consulting. Discutons de la manière dont je peux vous aider à construire votre prochain projet."}
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-24 mb-32">

                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-2xl font-bold mb-8">
                            {language === 'en' ? 'Contact Information' : 'Coordonnées'}
                        </h3>

                        {/* Email */}
                        <div className={`p-6 rounded-2xl flex items-center gap-4 ${darkMode ? 'bg-[#151B2E] border border-white/5' : 'bg-white border border-gray-100 shadow-md'}`}>
                            <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className={`text-xs uppercase font-semibold mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Email</p>
                                <a href={`mailto:${profile.email}`} className="font-medium hover:text-blue-500 transition-colors">
                                    {profile.email}
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className={`p-6 rounded-2xl flex items-center gap-4 ${darkMode ? 'bg-[#151B2E] border border-white/5' : 'bg-white border border-gray-100 shadow-md'}`}>
                            <div className="p-3 bg-blue-700/10 rounded-full text-blue-700">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <p className={`text-xs uppercase font-semibold mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>LinkedIn</p>
                                <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="font-medium hover:text-blue-500 transition-colors">
                                    {profile.social.linkedin ? profile.social.linkedin.replace('https://', '') : 'linkedin.com/in/rahmounoussama'}
                                </a>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className={`p-6 rounded-2xl flex items-center gap-4 ${darkMode ? 'bg-[#151B2E] border border-white/5' : 'bg-white border border-gray-100 shadow-md'}`}>
                            <div className="p-3 bg-gray-500/10 rounded-full text-gray-500">
                                <Github size={24} />
                            </div>
                            <div>
                                <p className={`text-xs uppercase font-semibold mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>GitHub</p>
                                <a href={profile.social.github} target="_blank" rel="noreferrer" className="font-medium hover:text-blue-500 transition-colors">
                                    {profile.social.github ? profile.social.github.replace('https://', '') : 'github.com/rahmounoussama'}
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className={`p-6 rounded-2xl flex items-center gap-4 ${darkMode ? 'bg-[#151B2E] border border-white/5' : 'bg-white border border-gray-100 shadow-md'}`}>
                            <div className="p-3 bg-purple-500/10 rounded-full text-purple-500">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className={`text-xs uppercase font-semibold mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Location</p>
                                <p className="font-medium">
                                    {language === 'en' ? 'Available for remote work' : 'Disponible pour le télétravail'}
                                </p>
                            </div>
                        </div>

                        <p className={`text-sm mt-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {language === 'en'
                                ? "Passionate about building scalable cloud solutions and would love to discuss opportunities where I can contribute my expertise in Java, AWS, microservices, and system architecture."
                                : "Passionné par la création de solutions cloud évolutives, je serais ravi de discuter d'opportunités où je pourrais apporter mon expertise en Java, AWS, microservices et architecture système."}
                        </p>
                    </div>

                    {/* Right Column: Form */}
                    <div className={`lg:col-span-3 p-8 md:p-10 rounded-3xl border ${darkMode ? 'bg-[#151B2E] border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {language === 'en' ? 'Your Name' : 'Votre Nom'}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className={`w-full px-4 py-3 rounded-xl border appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? 'bg-[#0B1120] border-white/10 text-white placeholder-gray-600' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'}`}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {language === 'en' ? 'Your Email' : 'Votre Email'}
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className={`w-full px-4 py-3 rounded-xl border appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? 'bg-[#0B1120] border-white/10 text-white placeholder-gray-600' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'}`}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {language === 'en' ? 'Message' : 'Message'}
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder={language === 'en' ? 'Tell me about your project or opportunity...' : 'Parlez-moi de votre projet ou opportunité...'}
                                    className={`w-full px-4 py-3 rounded-xl border appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${darkMode ? 'bg-[#0B1120] border-white/10 text-white placeholder-gray-600' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'}`}
                                />
                            </div>

                            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2">
                                {language === 'en' ? 'Send Message' : 'Envoyer le Message'}
                                <Send size={20} />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Footer */}
                <div className={`py-8 border-t text-center text-sm ${darkMode ? 'border-white/5 text-gray-500' : 'border-gray-200 text-gray-500'}`}>
                    <p>© {currentYear} {profile.name}. Built with React, Tailwind CSS, and Motion.</p>
                </div>
            </div>
        </footer>
    );
}
