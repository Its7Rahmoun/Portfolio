import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Engineer',
    titleFr: 'Ingénieur Full Stack Senior',
    company: 'Tech Innovation Corp',
    location: 'Remote',
    locationFr: 'Télétravail',
    period: '2023 - Present',
    periodFr: '2023 - Présent',
    description: [
      'Architected and deployed microservices on AWS using ECS, Lambda, and API Gateway, reducing infrastructure costs by 35% while improving scalability',
      'Led migration from monolithic to event-driven microservices architecture serving 500K+ daily active users with 99.9% uptime SLA',
      'Implemented comprehensive CI/CD pipelines with GitHub Actions and AWS CodePipeline, reducing deployment time by 60%',
      'Mentored team of 5 junior developers on cloud-native best practices, Spring Boot patterns, and distributed systems design',
    ],
    descriptionFr: [
      'Architecturé et déployé des microservices sur AWS avec ECS, Lambda et API Gateway, réduisant les coûts d\'infrastructure de 35% tout en améliorant l\'évolutivité',
      'Dirigé la migration d\'une architecture monolithique vers une architecture microservices événementielle desservant plus de 500K utilisateurs actifs quotidiens avec 99,9% de disponibilité',
      'Implémenté des pipelines CI/CD complets avec GitHub Actions et AWS CodePipeline, réduisant le temps de déploiement de 60%',
      'Mentoré une équipe de 5 développeurs juniors sur les meilleures pratiques cloud-native, les patterns Spring Boot et la conception de systèmes distribués',
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'Kafka', 'PostgreSQL'],
    metrics: [
      { label: 'Cost Reduction', labelFr: 'Réduction des coûts', value: '35%' },
      { label: 'Uptime', labelFr: 'Disponibilité', value: '99.9%' },
      { label: 'Users', labelFr: 'Utilisateurs', value: '500K+' },
    ],
  },
  {
    title: 'Cloud Solutions Architect',
    titleFr: 'Architecte Solutions Cloud',
    company: 'Digital Solutions Inc',
    location: 'Hybrid',
    locationFr: 'Hybride',
    period: '2021 - 2023',
    periodFr: '2021 - 2023',
    description: [
      'Designed and implemented multi-region AWS infrastructure for enterprise clients with automated disaster recovery, achieving 99.95% availability',
      'Built high-performance RESTful APIs and GraphQL services using Spring Boot, processing 10M+ requests daily with sub-100ms latency',
      'Optimized database queries and implemented Redis caching strategies, improving API response times by 70% and reducing database load',
      'Achieved AWS Solutions Architect Associate certification and led knowledge-sharing sessions on cloud architecture patterns',
    ],
    descriptionFr: [
      'Conçu et implémenté une infrastructure AWS multi-régions pour clients entreprise avec récupération automatique en cas de sinistre, atteignant 99,95% de disponibilité',
      'Construit des API RESTful et services GraphQL haute performance avec Spring Boot, traitant plus de 10M de requêtes quotidiennes avec une latence inférieure à 100ms',
      'Optimisé les requêtes de base de données et implémenté des stratégies de mise en cache Redis, améliorant les temps de réponse API de 70% et réduisant la charge base de données',
      'Obtenu la certification AWS Solutions Architect Associate et animé des sessions de partage de connaissances sur les patterns d\'architecture cloud',
    ],
    technologies: ['AWS', 'Java', 'Spring Cloud', 'Redis', 'PostgreSQL', 'Terraform', 'GraphQL'],
    metrics: [
      { label: 'Availability', labelFr: 'Disponibilité', value: '99.95%' },
      { label: 'Performance', labelFr: 'Performance', value: '+70%' },
      { label: 'Requests/Day', labelFr: 'Requêtes/Jour', value: '10M+' },
    ],
  },
  {
    title: 'Full Stack Developer',
    titleFr: 'Développeur Full Stack',
    company: 'StartupHub',
    location: 'On-site',
    locationFr: 'Sur site',
    period: '2019 - 2021',
    periodFr: '2019 - 2021',
    description: [
      'Developed scalable full-stack applications using React, Node.js, and Spring Boot in an Agile environment',
      'Implemented real-time features using WebSockets and event-driven architecture with Apache Kafka',
      'Built responsive, accessible UIs following WCAG guidelines and modern frontend best practices',
      'Collaborated with cross-functional teams to deliver features on tight deadlines with high quality standards',
    ],
    descriptionFr: [
      'Développé des applications full-stack évolutives avec React, Node.js et Spring Boot dans un environnement Agile',
      'Implémenté des fonctionnalités temps réel avec WebSockets et architecture événementielle avec Apache Kafka',
      'Construit des interfaces utilisateur réactives et accessibles suivant les directives WCAG et meilleures pratiques frontend modernes',
      'Collaboré avec équipes interfonctionnelles pour livrer des fonctionnalités dans des délais serrés avec standards de qualité élevés',
    ],
    technologies: ['React', 'Node.js', 'Spring Boot', 'MongoDB', 'Kafka', 'Docker'],
    metrics: [
      { label: 'Projects', labelFr: 'Projets', value: '15+' },
      { label: 'Team Size', labelFr: 'Taille équipe', value: '8' },
      { label: 'Sprints', labelFr: 'Sprints', value: '40+' },
    ],
  },
];

interface ExperienceProps {
  darkMode: boolean;
  language: 'en' | 'fr';
}

export function Experience({ darkMode, language }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const content = {
    en: {
      badge: 'Career Journey',
      title: 'Professional Experience',
      subtitle: 'Building scalable systems and leading cloud transformations',
    },
    fr: {
      badge: 'Parcours Professionnel',
      title: 'Expérience Professionnelle',
      subtitle: 'Construire des systèmes évolutifs et diriger des transformations cloud',
    },
  };

  const t = content[language];

  return (
    <section
      id="experience"
      ref={ref}
      className={`relative py-32 overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-b from-slate-950 via-zinc-950 to-slate-950'
          : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
              darkMode
                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                : 'bg-green-100 border border-green-200 text-green-600'
            }`}>
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-px ${
            darkMode
              ? 'bg-gradient-to-b from-transparent via-white/20 to-transparent'
              : 'bg-gradient-to-b from-transparent via-gray-300 to-transparent'
          }`} />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full border-4 border-slate-950" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.01, y: -4 }}
                  className={`group relative p-8 rounded-2xl backdrop-blur-sm transition-all ${
                    darkMode
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/50'
                      : 'bg-white border border-gray-200 hover:border-green-500 hover:shadow-xl'
                  }`}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {language === 'en' ? exp.title : exp.titleFr}
                        </h3>
                        <div className={`flex flex-wrap items-center gap-3 mb-2 ${
                          darkMode ? 'text-white/70' : 'text-gray-600'
                        }`}>
                          <div className="flex items-center gap-2">
                            <Briefcase size={16} />
                            <span>{exp.company}</span>
                          </div>
                          <span>•</span>
                          <span>{language === 'en' ? exp.location : exp.locationFr}</span>
                        </div>
                        <div className={`flex items-center gap-2 text-sm ${
                          darkMode ? 'text-white/50' : 'text-gray-500'
                        }`}>
                          <Calendar size={14} />
                          <span>{language === 'en' ? exp.period : exp.periodFr}</span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="flex gap-4">
                        {exp.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className={`text-center px-4 py-2 rounded-lg ${
                              darkMode
                                ? 'bg-white/5 border border-white/10'
                                : 'bg-gray-100 border border-gray-200'
                            }`}
                          >
                            <div className={`text-xl font-bold ${
                              darkMode ? 'text-green-400' : 'text-green-600'
                            }`}>
                              {metric.value}
                            </div>
                            <div className={`text-xs ${
                              darkMode ? 'text-white/60' : 'text-gray-600'
                            }`}>
                              {language === 'en' ? metric.label : metric.labelFr}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {(language === 'en' ? exp.description : exp.descriptionFr).map((item, i) => (
                        <li key={i} className={`flex items-start gap-3 ${
                          darkMode ? 'text-white/70' : 'text-gray-600'
                        }`}>
                          <TrendingUp size={16} className={`mt-1 flex-shrink-0 ${
                            darkMode ? 'text-green-400' : 'text-green-500'
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 text-sm rounded-lg ${
                            darkMode
                              ? 'bg-white/5 border border-white/10 text-white/70'
                              : 'bg-gray-100 border border-gray-200 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
