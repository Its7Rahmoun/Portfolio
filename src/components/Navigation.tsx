import { motion } from 'motion/react';
import { Moon, Sun, Globe, Menu, X, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PortfolioData } from '@/hooks/usePortfolioData';
import { useScrollProgress } from '@/lib/useScrollProgress';

const navItems = [
    { label: 'Home', labelFr: 'Accueil', href: '#home' },
    { label: 'About', labelFr: 'À propos', href: '#about' },
    { label: 'Stack', labelFr: 'Technologies', href: '#stack' },
    { label: 'Experience', labelFr: 'Expérience', href: '#experience' },
    { label: 'Projects', labelFr: 'Projets', href: '#projects' },
    { label: 'Certifications', labelFr: 'Certifications', href: '#credentials' },
    { label: 'Contact', labelFr: 'Contact', href: '#contact' },
];

interface NavigationProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
    language: 'en' | 'fr';
    setLanguage: (value: 'en' | 'fr') => void;
    profile: PortfolioData['profile'];
    universeEnabled: boolean;
    setUniverseEnabled: (value: boolean) => void;
}

export function Navigation({
    darkMode,
    setDarkMode,
    language,
    setLanguage,
    profile,
    universeEnabled,
    setUniverseEnabled,
}: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const progress = useScrollProgress();

    const initials = profile.name
        ? profile.name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase()
        : 'RO';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navItems.map((item) => item.href.slice(1));
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top <= 150 && rect.bottom >= 150;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.slice(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false);
        }
    };

    const controlClass = `flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
        darkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
    }`;

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${
                scrolled
                    ? darkMode
                        ? 'border-b border-white/15 bg-[#0B0B10]/70 backdrop-blur-[15px]'
                        : 'border-b border-slate-200 bg-white/80 backdrop-blur-[15px]'
                    : 'bg-transparent'
            }`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex h-20 items-center justify-between">
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#home');
                        }}
                        className={`flex min-h-11 cursor-pointer items-center gap-2 text-xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                            darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                    >
                        <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 font-display text-white">
                            {initials}
                        </span>
                        <span className="sr-only">{profile.name}</span>
                    </a>

                    <div className="hidden items-center gap-1 lg:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className={`relative min-h-11 cursor-pointer px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                                    activeSection === item.href.slice(1)
                                        ? darkMode
                                            ? 'text-white'
                                            : 'text-slate-900'
                                        : darkMode
                                            ? 'text-slate-300 hover:text-white'
                                            : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                {language === 'en' ? item.label : item.labelFr}
                                {activeSection === item.href.slice(1) && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className={`absolute inset-0 -z-10 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-slate-200'}`}
                                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setUniverseEnabled(!universeEnabled)}
                            aria-pressed={universeEnabled}
                            aria-label={universeEnabled ? 'Disable 3D universe' : 'Enable 3D universe'}
                            className={`${controlClass} hidden md:flex`}
                            title={universeEnabled ? 'Disable 3D' : 'Enable 3D'}
                        >
                            <Sparkles size={16} className={universeEnabled ? 'text-blue-400' : ''} />
                        </button>
                        <button
                            type="button"
                            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                            aria-label="Toggle language"
                            className={`${controlClass} hidden gap-2 px-3 md:flex`}
                        >
                            <Globe size={16} />
                            <span className="text-xs font-semibold uppercase">{language}</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setDarkMode(!darkMode)}
                            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            className={controlClass}
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            type="button"
                            className={`md:hidden ${controlClass}`}
                            aria-expanded={mobileMenuOpen}
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-0.5 w-full bg-white/10" aria-hidden="true">
                <div
                    className="h-full bg-[var(--color-accent)] transition-[width] duration-150"
                    style={{ width: `${Math.min(100, progress * 100)}%` }}
                />
            </div>

            {mobileMenuOpen && (
                <div className={`${darkMode ? 'border-white/10 bg-[#0B0B10]/95' : 'border-slate-200 bg-white/95'} border-t backdrop-blur-[15px] md:hidden`}>
                    <div className="flex flex-col gap-2 p-6">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className={`min-h-11 cursor-pointer rounded-lg px-3 py-2 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                                    darkMode ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'
                                }`}
                            >
                                {language === 'en' ? item.label : item.labelFr}
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={() => setUniverseEnabled(!universeEnabled)}
                            className={`min-h-11 cursor-pointer rounded-lg px-3 py-2 text-left ${darkMode ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-800'}`}
                        >
                            {universeEnabled ? 'Disable 3D universe' : 'Enable 3D universe'}
                        </button>
                    </div>
                </div>
            )}
        </motion.nav>
    );
}
