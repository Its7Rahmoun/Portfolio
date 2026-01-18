import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const projects = [
  {
    title: 'Cloud-Native E-Commerce Platform',
    titleFr: 'Plateforme E-Commerce Cloud-Native',
    description: 'Scalable microservices architecture for high-traffic e-commerce platform deployed on AWS. Features event-driven design, real-time inventory management, payment processing, and advanced analytics dashboard.',
    descriptionFr: 'Architecture microservices évolutive pour plateforme e-commerce à fort trafic déployée sur AWS. Conception événementielle, gestion d\'inventaire temps réel, traitement des paiements et tableau de bord analytique avancé.',
    image: 'https://images.unsplash.com/photo-1622131815183-e7f8bbac9cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY4NzM3MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Java', 'Spring Boot', 'AWS Lambda', 'Kafka', 'PostgreSQL', 'Redis', 'Docker'],
    highlights: [
      { label: '10M+ monthly requests', labelFr: '10M+ requêtes/mois' },
      { label: '99.9% uptime SLA', labelFr: '99,9% disponibilité' },
      { label: 'Auto-scaling', labelFr: 'Auto-scaling' },
    ],
    year: '2024',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    titleFr: 'Tableau de Bord Analytique IA',
    description: 'Enterprise-grade analytics platform with AI-powered insights processing millions of events daily. Built with stream processing, ML predictions, complex aggregations, and interactive data visualizations.',
    descriptionFr: 'Plateforme analytique de niveau entreprise avec insights IA traitant des millions d\'événements quotidiens. Construit avec traitement de flux, prédictions ML, agrégations complexes et visualisations de données interactives.',
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3Njg3NDA3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'Kafka', 'React', 'PostgreSQL', 'Redis'],
    highlights: [
      { label: 'Real-time processing', labelFr: 'Traitement temps réel' },
      { label: 'Sub-second queries', labelFr: 'Requêtes <1s' },
      { label: 'ML predictions', labelFr: 'Prédictions ML' },
    ],
    year: '2024',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Infrastructure Automation Suite',
    titleFr: 'Suite d\'Automatisation Infrastructure',
    description: 'Comprehensive Infrastructure as Code solution for automated multi-region cloud provisioning and management. Includes CI/CD pipelines, monitoring, disaster recovery automation, and cost optimization.',
    descriptionFr: 'Solution Infrastructure as Code complète pour provisionnement et gestion cloud multi-régions automatisés. Inclut pipelines CI/CD, surveillance, automatisation de récupération après sinistre et optimisation des coûts.',
    image: 'https://images.unsplash.com/photo-1739343338040-2dae68f6bdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkYXJrfGVufDF8fHx8MTc2ODY0MDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Terraform', 'AWS', 'Kubernetes', 'GitHub Actions', 'Python', 'Ansible'],
    highlights: [
      { label: '70% faster deployments', labelFr: '70% déploiements plus rapides' },
      { label: 'Zero-downtime', labelFr: 'Zéro temps d\'arrêt' },
      { label: 'Multi-region', labelFr: 'Multi-régions' },
    ],
    year: '2023',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
];

interface ProjectsProps {
  darkMode: boolean;
  language: 'en' | 'fr';
}

export function Projects({ darkMode, language }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const content = {
    en: {
      badge: 'Featured Work',
      title: 'Selected Projects',
      subtitle: 'Cloud-native applications, microservices, and AI integration',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
    },
    fr: {
      badge: 'Projets Phares',
      title: 'Projets Sélectionnés',
      subtitle: 'Applications cloud-native, microservices et intégration IA',
      viewCode: 'Voir Code',
      liveDemo: 'Démo',
    },
  };

  const t = content[language];

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative py-32 overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
              darkMode
                ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                : 'bg-cyan-100 border border-cyan-200 text-cyan-600'
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
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-white/60' : 'text-gray-600'
            }`}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-5 gap-8 p-8 rounded-3xl backdrop-blur-sm transition-all ${
                darkMode
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50'
                  : 'bg-white border border-gray-200 hover:border-cyan-500 hover:shadow-2xl'
              }`}>
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`lg:col-span-2 relative overflow-hidden rounded-2xl aspect-video ${
                    darkMode
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
                      : 'bg-gradient-to-br from-blue-100 to-purple-100'
                  }`}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 transition-opacity ${
                    darkMode
                      ? 'bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100'
                      : 'bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-100'
                  }`} />

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-semibold">
                    {project.year}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="lg:col-span-3 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {language === 'en' ? project.title : project.titleFr}
                    </h3>

                    <p className={`text-lg leading-relaxed mb-6 ${
                      darkMode ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      {language === 'en' ? project.description : project.descriptionFr}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight.label}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                            darkMode
                              ? 'bg-white/5 border border-white/10'
                              : 'bg-gray-100 border border-gray-200'
                          }`}
                        >
                          <Zap size={14} className={darkMode ? 'text-green-400' : 'text-green-500'} />
                          <span className={`text-sm ${
                            darkMode ? 'text-white/80' : 'text-gray-700'
                          }`}>
                            {language === 'en' ? highlight.label : highlight.labelFr}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                            darkMode
                              ? 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                              : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                        darkMode
                          ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                          : 'bg-gray-100 border border-gray-300 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      <Github size={18} />
                      <span>{t.viewCode}</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 font-semibold transition-all shadow-lg shadow-blue-500/25"
                    >
                      <span>{t.liveDemo}</span>
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
