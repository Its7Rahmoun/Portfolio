import { motion } from 'motion/react';
import { Moon, Sun, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PortfolioData } from '@/hooks/usePortfolioData';

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
}

export function Navigation({ darkMode, setDarkMode, language, setLanguage, profile }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Extract initials from profile name
    const initials = profile.name
        ? profile.name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase()
        : 'RO';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.slice(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.slice(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? darkMode
                    ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10'
                    : 'bg-white/80 backdrop-blur-xl border-b border-gray-200'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#home');
                        }}
                        className={`flex items-center gap-2 text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg" />
                            <div className="absolute inset-0.5 bg-gradient-to-br from-slate-950 to-slate-900 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">{initials}</span>
                            </div>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className={`relative px-4 py-2 text-sm transition-colors ${activeSection === item.href.slice(1)
                                    ? darkMode
                                        ? 'text-white'
                                        : 'text-gray-900'
                                    : darkMode
                                        ? 'text-white/60 hover:text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {language === 'en' ? item.label : item.labelFr}
                                {activeSection === item.href.slice(1) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className={`absolute inset-0 rounded-lg -z-10 ${darkMode ? 'bg-white/10' : 'bg-gray-200'
                                            }`}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-4">
                        {/* Language Toggle */}
                        <motion.button
                            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`hidden md:flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${darkMode
                                ? 'bg-white/10 text-white/80 hover:bg-white/20'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            <Globe size={16} />
                            <span className="text-xs font-semibold uppercase">{language}</span>
                        </motion.button>

                        {/* Dark Mode Toggle */}
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-2 rounded-lg transition-colors ${darkMode
                                ? 'bg-white/10 text-white/80 hover:bg-white/20'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            className={`md:hidden p-2 rounded-lg ${darkMode ? 'text-white/80' : 'text-gray-700'
                                }`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`md:hidden ${darkMode ? 'bg-slate-950/95' : 'bg-white/95'
                        } backdrop-blur-xl border-t ${darkMode ? 'border-white/10' : 'border-gray-200'
                        }`}
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`text-lg transition-colors ${darkMode
                                    ? 'text-white/80 hover:text-white'
                                    : 'text-gray-700 hover:text-gray-900'
                                    }`}
                            >
                                {language === 'en' ? item.label : item.labelFr}
                            </motion.a>
                        ))}
                        <div className="flex gap-2 pt-4 border-t border-white/10">
                            <button
                                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                                className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold ${darkMode
                                    ? 'bg-white/10 text-white'
                                    : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                {language === 'en' ? 'FR' : 'EN'}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
