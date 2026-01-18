import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Mail, Github, Linkedin, Cloud, Code, Database, Server } from 'lucide-react';
import { useRef } from 'react';

const floatingIcons = [
  { Icon: Cloud, delay: 0, x: '10%', y: '20%' },
  { Icon: Code, delay: 0.2, x: '80%', y: '30%' },
  { Icon: Database, delay: 0.4, x: '15%', y: '70%' },
  { Icon: Server, delay: 0.6, x: '85%', y: '60%' },
];

interface HeroProps {
  darkMode: boolean;
  language: 'en' | 'fr';
}

export function Hero({ darkMode, language }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    en: {
      badge: 'Available for opportunities',
      headline: 'Full Stack Engineer &',
      headline2: 'Cloud Architect',
      subtitle: 'Building scalable, secure, cloud-native systems',
      subtitle2: 'with Java, AWS, and AI',
      cta1: 'Contact Me',
      cta2: 'View Projects',
    },
    fr: {
      badge: 'Disponible pour opportunités',
      headline: 'Ingénieur Full Stack &',
      headline2: 'Architecte Cloud',
      subtitle: 'Construire des systèmes cloud-native évolutifs et sécurisés',
      subtitle2: 'avec Java, AWS, et AI',
      cta1: 'Me Contacter',
      cta2: 'Voir Projets',
    },
  };

  const t = content[language];

  return (
    <section
      id="home"
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      {/* Animated Background */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? 'bg-gradient-to-br from-blue-950/20 via-slate-950 to-cyan-950/20'
            : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
        }`}
      />

      {/* Animated Gradient Orbs */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`} />
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-cyan-500' : 'bg-cyan-300'
        }`} />
      </motion.div>

      {/* Grid Pattern */}
      <div
        className={`absolute inset-0 ${darkMode ? 'opacity-10' : 'opacity-20'}`}
        style={{
          backgroundImage: `linear-gradient(${darkMode ? 'rgba(56,189,248,0.1)' : 'rgba(56,189,248,0.2)'} 1px, transparent 1px),
                           linear-gradient(90deg, ${darkMode ? 'rgba(56,189,248,0.1)' : 'rgba(56,189,248,0.2)'} 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{
            duration: 3,
            delay: item.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
          }}
          className={darkMode ? 'text-blue-400' : 'text-blue-500'}
        >
          <item.Icon size={64} strokeWidth={1} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-8 ${
              darkMode
                ? 'bg-white/5 border border-white/10'
                : 'bg-gray-100 border border-gray-200'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className={`text-sm ${darkMode ? 'text-white/80' : 'text-gray-700'}`}>
              {t.badge}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.headline}
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {t.headline2}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-2 mb-12"
          >
            <p className={`text-xl sm:text-2xl lg:text-3xl ${
              darkMode ? 'text-white/90' : 'text-gray-800'
            }`}>
              {t.subtitle}
            </p>
            <p className={`text-lg sm:text-xl lg:text-2xl ${
              darkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              {t.subtitle2}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
            >
              {t.cta1}
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold border transition-all backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  : 'bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200'
              }`}
            >
              {t.cta2}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rahmoun.oussama@example.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 transition-colors rounded-full ${
                  darkMode
                    ? 'text-white/60 hover:text-white hover:bg-white/10'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={scrollToNext}
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-colors ${
          darkMode ? 'text-white/40 hover:text-white/80' : 'text-gray-400 hover:text-gray-700'
        }`}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
