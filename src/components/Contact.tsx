import { FormEvent, useState } from 'react';
import { PortfolioData } from '@/hooks/usePortfolioData';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { GlassCard } from '@/components/layout/GlassCard';
import { SectionHeader } from '@/components/layout/SectionHeader';

interface ContactProps {
    darkMode: boolean;
    language: 'en' | 'fr';
    contact: PortfolioData['contact'];
    profile: PortfolioData['profile'];
}

export function Contact({ darkMode, language, contact, profile }: ContactProps) {
    const currentYear = new Date().getFullYear();
    const [status, setStatus] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = String(form.get('name') || '');
        const email = String(form.get('email') || '');
        const message = String(form.get('message') || '');
        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setStatus(language === 'en' ? 'Opening your email client…' : 'Ouverture de votre client e-mail…');
    };

    const fieldClass = `w-full rounded-xl border px-4 py-3 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
        darkMode
            ? 'border-white/15 bg-black/30 text-white placeholder:text-slate-500'
            : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400'
    }`;

    return (
        <footer id="contact" className="pb-0 pt-24 md:pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <SectionHeader
                    darkMode={darkMode}
                    title={language === 'en' ? "Let's Work Together" : 'Travaillons Ensemble'}
                    subtitle={contact.message || (language === 'en'
                        ? 'Available for freelance work, full-time opportunities, and consulting.'
                        : 'Disponible pour du freelance, du temps plein et du consulting.')}
                />
                <div className="mb-24 grid gap-10 lg:grid-cols-5 lg:gap-16">
                    <div className="space-y-4 lg:col-span-2">
                        <h3 className="font-display mb-6 text-2xl font-bold">
                            {language === 'en' ? 'Contact Information' : 'Coordonnées'}
                        </h3>
                        {[
                            { icon: Mail, label: 'Email', href: `mailto:${profile.email}`, value: profile.email },
                            { icon: Linkedin, label: 'LinkedIn', href: profile.social.linkedin, value: 'linkedin.com/in/oussama-rahmoun' },
                            { icon: Github, label: 'GitHub', href: profile.social.github, value: 'github.com/Its7Rahmoun' },
                        ].map((item) => (
                            <GlassCard key={item.label} darkMode={darkMode} className="flex items-center gap-4 p-5">
                                <div className="rounded-full bg-blue-500/15 p-3 text-blue-400">
                                    <item.icon size={22} aria-hidden="true" />
                                </div>
                                <div>
                                    <p className={`mb-1 text-xs font-semibold uppercase ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</p>
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="cursor-pointer font-medium hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                                    >
                                        {item.value}
                                    </a>
                                </div>
                            </GlassCard>
                        ))}
                        <GlassCard darkMode={darkMode} className="flex items-center gap-4 p-5">
                            <div className="rounded-full bg-violet-500/15 p-3 text-violet-400">
                                <MapPin size={22} aria-hidden="true" />
                            </div>
                            <div>
                                <p className={`mb-1 text-xs font-semibold uppercase ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Location</p>
                                <p className="font-medium">{profile.location} · {language === 'en' ? 'Remote available' : 'Télétravail possible'}</p>
                            </div>
                        </GlassCard>
                    </div>

                    <GlassCard darkMode={darkMode} className="p-6 md:p-10 lg:col-span-3">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        {language === 'en' ? 'Your Name' : 'Votre Nom'}
                                    </label>
                                    <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" className={fieldClass} />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        {language === 'en' ? 'Your Email' : 'Votre Email'}
                                    </label>
                                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@example.com" className={fieldClass} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                    {language === 'en' ? 'Message' : 'Message'}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder={language === 'en' ? 'Tell me about your project or opportunity…' : 'Parlez-moi de votre projet ou opportunité…'}
                                    className={`${fieldClass} resize-none`}
                                />
                            </div>
                            <button
                                type="submit"
                                className="flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] py-3 text-lg font-bold text-white transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                            >
                                {language === 'en' ? 'Send Message' : 'Envoyer le Message'}
                                <Send size={20} aria-hidden="true" />
                            </button>
                            {status && <p className="text-sm text-slate-300" role="status">{status}</p>}
                        </form>
                    </GlassCard>
                </div>
                <div className={`py-8 text-center text-sm ${darkMode ? 'border-t border-white/10 text-slate-400' : 'border-t border-slate-200 text-slate-500'}`}>
                    <p>© {currentYear} {profile.name}. Built with React, Three.js, and Motion.</p>
                </div>
            </div>
        </footer>
    );
}
