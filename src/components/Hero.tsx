import { motion } from 'motion/react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { PortfolioData } from '@/hooks/usePortfolioData';

interface HeroProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    profile: PortfolioData['profile'];
}

export function Hero({ darkMode, language, profile }: HeroProps) {
    const scrollToNext = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, href: profile.social.github, label: 'GitHub' },
        { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
        { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
    ].filter((link) => link.href);

    return (
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-12">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className={`mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-[15px] ${
                            darkMode ? 'border-white/20 bg-white/10' : 'border-slate-200 bg-white/80'
                        }`}
                    >
                        <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                        <span className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                            {language === 'en' ? 'Available for opportunities' : 'Ouvert aux opportunités'}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-8"
                    >
                        <h1 className={`font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            {profile.name}
                        </h1>
                        <p className="font-display mt-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-6xl">
                            {profile.title}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mb-12 max-w-3xl space-y-3"
                    >
                        <p className={`text-xl leading-relaxed sm:text-2xl ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                            {profile.bio}
                        </p>
                        <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{profile.location}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="mb-16 flex flex-wrap items-center justify-center gap-4"
                    >
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="min-h-11 cursor-pointer rounded-full bg-[var(--color-accent)] px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                        >
                            {language === 'en' ? 'Contact Me' : 'Me contacter'}
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`min-h-11 cursor-pointer rounded-full border px-8 py-3 font-semibold backdrop-blur-[15px] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                                darkMode
                                    ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
                                    : 'border-slate-300 bg-white/80 text-slate-900 hover:bg-white'
                            }`}
                        >
                            {language === 'en' ? 'View Projects' : 'Voir les projets'}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="flex items-center gap-3"
                    >
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className={`flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                                    darkMode
                                        ? 'text-slate-300 hover:bg-white/10 hover:text-white'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                            >
                                <social.icon size={22} />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            <button
                type="button"
                onClick={scrollToNext}
                aria-label={language === 'en' ? 'Scroll to about section' : 'Aller à la section à propos'}
                className={`absolute bottom-10 left-1/2 flex min-h-11 min-w-11 -translate-x-1/2 cursor-pointer items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                    darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-slate-800'
                }`}
            >
                <ArrowDown size={28} />
            </button>
        </section>
    );
}
