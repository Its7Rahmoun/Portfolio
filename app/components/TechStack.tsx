import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const techStack = {
  backend: {
    title: 'Backend',
    titleFr: 'Backend',
    color: 'from-red-500 to-orange-500',
    techs: [
      { name: 'Java', icon: '☕' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'Spring Cloud', icon: '☁️' },
      { name: 'Node.js', icon: '💚' },
      { name: 'Python', icon: '🐍' },
      { name: 'Go', icon: '🔷' },
    ],
  },
  frontend: {
    title: 'Frontend',
    titleFr: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    techs: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Vue.js', icon: '💚' },
    ],
  },
  cloud: {
    title: 'Cloud & DevOps',
    titleFr: 'Cloud & DevOps',
    color: 'from-purple-500 to-pink-500',
    techs: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '⚓' },
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Jenkins', icon: '🔧' },
      { name: 'GitHub Actions', icon: '⚙️' },
    ],
  },
  databases: {
    title: 'Databases',
    titleFr: 'Bases de données',
    color: 'from-green-500 to-emerald-500',
    techs: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Elasticsearch', icon: '🔍' },
    ],
  },
  messaging: {
    title: 'Messaging',
    titleFr: 'Messagerie',
    color: 'from-yellow-500 to-orange-500',
    techs: [
      { name: 'Apache Kafka', icon: '📨' },
      { name: 'RabbitMQ', icon: '🐰' },
      { name: 'AWS SQS', icon: '📬' },
      { name: 'AWS SNS', icon: '📡' },
    ],
  },
  security: {
    title: 'Security',
    titleFr: 'Sécurité',
    color: 'from-indigo-500 to-blue-500',
    techs: [
      { name: 'OAuth 2.0', icon: '🔐' },
      { name: 'JWT', icon: '🎫' },
      { name: 'Spring Security', icon: '🛡️' },
      { name: 'AWS IAM', icon: '👤' },
    ],
  },
  ai: {
    title: 'AI & ML',
    titleFr: 'IA & ML',
    color: 'from-pink-500 to-rose-500',
    techs: [
      { name: 'OpenAI API', icon: '🤖' },
      { name: 'LangChain', icon: '🔗' },
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'AWS SageMaker', icon: '📊' },
    ],
  },
};

interface TechStackProps {
  darkMode: boolean;
  language: 'en' | 'fr';
}

export function TechStack({ darkMode, language }: TechStackProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const content = {
    en: {
      badge: 'Technical Expertise',
      title: 'Technology Stack',
      subtitle: 'Building enterprise-grade applications with cutting-edge technologies',
    },
    fr: {
      badge: 'Expertise Technique',
      title: 'Stack Technologique',
      subtitle: 'Construire des applications professionnelles avec des technologies de pointe',
    },
  };

  const t = content[language];

  return (
    <section
      id="stack"
      ref={ref}
      className={`relative py-32 overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950'
          : 'bg-gradient-to-b from-white via-blue-50 to-white'
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-500 text-sm font-semibold mb-6">
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
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-white/60' : 'text-gray-600'
            }`}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(techStack).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`group relative p-6 rounded-2xl backdrop-blur-sm transition-all ${
                darkMode
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                  : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative">
                {/* Category Title */}
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} mb-3`}>
                    <span className="text-2xl">
                      {category.techs[0].icon}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {language === 'en' ? category.title : category.titleFr}
                  </h3>
                </div>

                {/* Tech List */}
                <div className="space-y-2">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + categoryIndex * 0.1 + techIndex * 0.05,
                      }}
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        darkMode
                          ? 'hover:bg-white/5'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className={`text-sm ${
                        darkMode ? 'text-white/80' : 'text-gray-700'
                      }`}>
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Microservices Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className={`mt-12 p-8 rounded-2xl backdrop-blur-sm ${
            darkMode
              ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20'
              : 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200'
          }`}
        >
          <div className="text-center">
            <h3 className={`text-2xl font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {language === 'en' ? 'Specialized in Microservices Architecture' : 'Spécialisé en Architecture Microservices'}
            </h3>
            <p className={`text-lg ${
              darkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              {language === 'en' 
                ? 'Designing scalable, resilient, and maintainable distributed systems'
                : 'Concevoir des systèmes distribués évolutifs, résilients et maintenables'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
