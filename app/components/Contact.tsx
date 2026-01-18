import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    labelFr: 'Email',
    value: 'rahmoun.oussama@example.com',
    href: 'mailto:rahmoun.oussama@example.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    labelFr: 'LinkedIn',
    value: 'linkedin.com/in/rahmounoussama',
    href: 'https://linkedin.com/in/rahmounoussama',
  },
  {
    icon: Github,
    label: 'GitHub',
    labelFr: 'GitHub',
    value: 'github.com/rahmounoussama',
    href: 'https://github.com/rahmounoussama',
  },
  {
    icon: MapPin,
    label: 'Location',
    labelFr: 'Localisation',
    value: 'Available for remote work',
    valueFr: 'Disponible pour télétravail',
    href: null,
  },
];

interface ContactProps {
  darkMode: boolean;
  language: 'en' | 'fr';
}

export function Contact({ darkMode, language }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const content = {
    en: {
      badge: 'Get In Touch',
      title: 'Let\'s Work Together',
      subtitle: 'Available for freelance work, full-time opportunities, and consulting. Let\'s discuss how I can help build your next project.',
      contactInfo: 'Contact Information',
      bio: 'Passionate about building scalable cloud solutions and would love to discuss opportunities where I can contribute my expertise in Java, AWS, microservices, and system architecture.',
      nameLabel: 'Your Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Your Email',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project or opportunity...',
      sendButton: 'Send Message',
      successMessage: 'Message sent successfully!',
      footer: '© 2026 Rahmoun Oussama. Built with React, Tailwind CSS, and Motion.',
    },
    fr: {
      badge: 'Contact',
      title: 'Travaillons Ensemble',
      subtitle: 'Disponible pour travail freelance, opportunités à temps plein et conseil. Discutons de comment je peux aider à construire votre prochain projet.',
      contactInfo: 'Informations de Contact',
      bio: 'Passionné par la création de solutions cloud évolutives et j\'aimerais discuter d\'opportunités où je peux apporter mon expertise en Java, AWS, microservices et architecture de systèmes.',
      nameLabel: 'Votre Nom',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Votre Email',
      emailPlaceholder: 'jean@exemple.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet ou opportunité...',
      sendButton: 'Envoyer',
      successMessage: 'Message envoyé avec succès!',
      footer: '© 2026 Rahmoun Oussama. Créé avec React, Tailwind CSS, et Motion.',
    },
  };

  const t = content[language];

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-32 overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-b from-slate-950 via-zinc-950 to-slate-950'
          : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

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
                ? 'bg-pink-500/10 border border-pink-500/20 text-pink-400'
                : 'bg-pink-100 border border-pink-200 text-pink-600'
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.contactInfo}
            </h3>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={method.href ? { scale: 1.02, x: 4 } : {}}
                className="group"
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-start gap-4 p-5 rounded-2xl backdrop-blur-sm transition-all ${
                      darkMode
                        ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50'
                        : 'bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 transition-colors ${
                      darkMode
                        ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/10 group-hover:border-blue-500/50'
                        : 'bg-gradient-to-br from-blue-100 to-purple-100 border-gray-200 group-hover:border-blue-500'
                    }`}>
                      <method.icon className={darkMode ? 'text-blue-400' : 'text-blue-500'} size={20} />
                    </div>
                    <div>
                      <p className={`text-sm mb-1 ${
                        darkMode ? 'text-white/60' : 'text-gray-500'
                      }`}>
                        {language === 'en' ? method.label : method.labelFr}
                      </p>
                      <p className={`transition-colors ${
                        darkMode
                          ? 'text-white/90 group-hover:text-white'
                          : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {method.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className={`flex items-start gap-4 p-5 rounded-2xl backdrop-blur-sm ${
                    darkMode
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-white border border-gray-200'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 ${
                      darkMode
                        ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/10'
                        : 'bg-gradient-to-br from-blue-100 to-purple-100 border-gray-200'
                    }`}>
                      <method.icon className={darkMode ? 'text-blue-400' : 'text-blue-500'} size={20} />
                    </div>
                    <div>
                      <p className={`text-sm mb-1 ${
                        darkMode ? 'text-white/60' : 'text-gray-500'
                      }`}>
                        {language === 'en' ? method.label : method.labelFr}
                      </p>
                      <p className={darkMode ? 'text-white/90' : 'text-gray-700'}>
                        {language === 'en' ? method.value : method.valueFr || method.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8"
            >
              <p className={`leading-relaxed ${
                darkMode ? 'text-white/60' : 'text-gray-600'
              }`}>
                {t.bio}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`relative rounded-3xl backdrop-blur-xl p-8 border ${
              darkMode
                ? 'bg-white/5 border-white/10'
                : 'bg-white/80 border-gray-200 shadow-2xl'
            }`}
          >
            {/* Glowing border animation */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-semibold mb-2 ${
                  darkMode ? 'text-white/80' : 'text-gray-700'
                }`}>
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all focus:outline-none focus:ring-2 ${
                    darkMode
                      ? 'bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-blue-500/50 focus:border-blue-500/50'
                      : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-semibold mb-2 ${
                  darkMode ? 'text-white/80' : 'text-gray-700'
                }`}>
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all focus:outline-none focus:ring-2 ${
                    darkMode
                      ? 'bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-blue-500/50 focus:border-blue-500/50'
                      : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${
                  darkMode ? 'text-white/80' : 'text-gray-700'
                }`}>
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all focus:outline-none focus:ring-2 resize-none ${
                    darkMode
                      ? 'bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-blue-500/50 focus:border-blue-500/50'
                      : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder={t.messagePlaceholder}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>{t.successMessage}</span>
                  </>
                ) : (
                  <>
                    <span>{t.sendButton}</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className={`text-center mt-20 pt-12 border-t ${
            darkMode ? 'border-white/10' : 'border-gray-200'
          }`}
        >
          <p className={darkMode ? 'text-white/40' : 'text-gray-500'}>
            {t.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
