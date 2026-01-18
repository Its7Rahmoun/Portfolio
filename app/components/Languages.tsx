import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Globe2 } from 'lucide-react';

const languages = [
  {
    name: 'English',
    nameFr: 'Anglais',
    level: 'Professional Working Proficiency',
    levelFr: 'Maîtrise Professionnelle',
    proficiency: 95,
    flag: '🇬🇧',
  },
  {
    name: 'French',
    nameFr: 'Français',
    level: 'Professional Working Proficiency',
    levelFr: 'Maîtrise Professionnelle',
    proficiency: 90,
    flag: '🇫🇷',
  },
  {
    name: 'Turkish',
    nameFr: 'Turc',
    level: 'Native or Bilingual',
    levelFr: 'Langue Maternelle',
    proficiency: 100,
    flag: '🇹🇷',
  },
  {
    name: 'Arabic',
    nameFr: 'Arabe',
    level: 'Native or Bilingual',
    levelFr: 'Langue Maternelle',
    proficiency: 100,
    flag: '🇸🇦',
  },
];

interface LanguagesProps {
  darkMode: boolean;
  language: 'en' | 'fr';
}

export function Languages({ darkMode, language }: LanguagesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const content = {
    en: {
      badge: 'Communication',
      title: 'Languages',
      subtitle: 'Multilingual professional ready for international teams',
    },
    fr: {
      badge: 'Communication',
      title: 'Langues',
      subtitle: 'Professionnel multilingue prêt pour équipes internationales',
    },
  };

  const t = content[language];

  return (
    <section
      ref={ref}
      className={`relative py-32 overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950'
          : 'bg-gradient-to-b from-white via-purple-50 to-white'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-500 text-sm font-semibold mb-6">
              {t.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg ${
              darkMode ? 'text-white/60' : 'text-gray-600'
            }`}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Languages Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`group relative p-6 rounded-2xl backdrop-blur-sm transition-all ${
                darkMode
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                  : 'bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg'
              }`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{lang.flag}</span>
                    <div>
                      <h3 className={`text-xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {language === 'en' ? lang.name : lang.nameFr}
                      </h3>
                      <p className={`text-sm ${
                        darkMode ? 'text-white/60' : 'text-gray-500'
                      }`}>
                        {language === 'en' ? lang.level : lang.levelFr}
                      </p>
                    </div>
                  </div>
                  <div className={`text-2xl font-bold ${
                    darkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>
                    {lang.proficiency}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className={`h-2 rounded-full overflow-hidden ${
                  darkMode ? 'bg-white/10' : 'bg-gray-200'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.proficiency}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* International Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={`mt-12 p-6 rounded-2xl backdrop-blur-sm flex items-center justify-center gap-3 ${
            darkMode
              ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20'
              : 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200'
          }`}
        >
          <Globe2 className={darkMode ? 'text-purple-400' : 'text-purple-500'} size={24} />
          <p className={`text-lg font-semibold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'en' 
              ? 'Available for remote roles worldwide' 
              : 'Disponible pour postes à distance dans le monde entier'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
