import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    level: 'Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    badge: '☁️',
  },
  {
    name: 'AWS Certified Developer',
    level: 'Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    badge: '💻',
  },
  {
    name: 'Certified Kubernetes Administrator',
    level: 'CKA',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
    badge: '⚓',
  },
];

const education = [
  {
    degree: 'Master\'s Degree in Computer Science',
    degreeFr: 'Master en Informatique',
    institution: 'University of Technology',
    institutionFr: 'Université de Technologie',
    period: '2017 - 2019',
    focus: 'Software Engineering & Cloud Computing',
    focusFr: 'Génie Logiciel & Cloud Computing',
  },
  {
    degree: 'Bachelor\'s Degree in Software Engineering',
    degreeFr: 'Licence en Génie Logiciel',
    institution: 'Engineering School',
    institutionFr: 'École d\'Ingénieurs',
    period: '2014 - 2017',
    focus: 'Computer Systems & Networks',
    focusFr: 'Systèmes Informatiques & Réseaux',
  },
];

interface CertificationsProps {
  darkMode: boolean;
  language: 'en' | 'fr';
}

export function Certifications({ darkMode, language }: CertificationsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const content = {
    en: {
      badge: 'Credentials',
      title: 'Certifications & Education',
      certTitle: 'Professional Certifications',
      eduTitle: 'Education',
    },
    fr: {
      badge: 'Qualifications',
      title: 'Certifications & Formation',
      certTitle: 'Certifications Professionnelles',
      eduTitle: 'Formation',
    },
  };

  const t = content[language];

  return (
    <section
      id="certifications"
      ref={ref}
      className={`relative py-32 overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
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
            className={`text-4xl lg:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.title}
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Award className="text-white" size={24} />
              </div>
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t.certTitle}
              </h3>
            </motion.div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className={`group relative p-6 rounded-2xl backdrop-blur-sm transition-all ${
                    darkMode
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50'
                      : 'bg-white border border-gray-200 hover:border-purple-500 hover:shadow-lg'
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-3xl border border-purple-500/20">
                      {cert.badge}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className={`font-bold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {cert.name}
                        </h4>
                        <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                      </div>
                      <p className={`text-sm mb-1 ${
                        darkMode ? 'text-white/70' : 'text-gray-600'
                      }`}>
                        {cert.level} • {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className={darkMode ? 'text-white/50' : 'text-gray-400'} />
                        <span className={`text-xs ${
                          darkMode ? 'text-white/50' : 'text-gray-500'
                        }`}>
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t.eduTitle}
              </h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: -4 }}
                  className={`relative p-6 rounded-2xl backdrop-blur-sm transition-all ${
                    darkMode
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50'
                      : 'bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg'
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <h4 className={`text-lg font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {language === 'en' ? edu.degree : edu.degreeFr}
                    </h4>
                    <p className={`mb-2 ${
                      darkMode ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      {language === 'en' ? edu.institution : edu.institutionFr}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className={darkMode ? 'text-white/50' : 'text-gray-400'} />
                      <span className={`text-sm ${
                        darkMode ? 'text-white/50' : 'text-gray-500'
                      }`}>
                        {edu.period}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      darkMode ? 'text-white/60' : 'text-gray-500'
                    }`}>
                      {language === 'en' ? edu.focus : edu.focusFr}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
