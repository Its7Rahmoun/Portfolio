import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { PersonalProjects } from '@/components/PersonalProjects';
import { Credentials } from '@/components/Credentials';
import { Languages } from '@/components/Languages';
import { Contact } from '@/components/Contact';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export default function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState<'en' | 'fr'>('en');
    const { data, isLoading, isError } = usePortfolioData();

    // Apply dark mode class to document
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    if (isLoading) {
        return <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">Loading...</div>;
    }

    if (isError || !data) {
        return <div className="flex items-center justify-center min-h-screen bg-slate-950 text-red-500">Error loading portfolio data</div>;
    }

    return (
        <div className={`${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'} antialiased transition-colors duration-300`}>
            <Navigation
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                language={language}
                setLanguage={setLanguage}
                profile={data.profile}
            />
            <main>
                <Hero darkMode={darkMode} language={language} profile={data.profile} />
                <About
                    darkMode={darkMode}
                    language={language}
                    profile={data.profile}
                    experience={data.experience}
                    highlights={data.aboutHighlights}
                />
                <TechStack darkMode={darkMode} language={language} skills={data.skills} />
                <Experience darkMode={darkMode} language={language} experience={data.experience} />
                <Projects darkMode={darkMode} language={language} projects={data.projects} />
                <PersonalProjects darkMode={darkMode} language={language} projects={data.personalProjects} />
                <Credentials
                    darkMode={darkMode}
                    language={language}
                    certifications={data.certifications}
                    education={data.education}
                />
                <Languages darkMode={darkMode} language={language} languages={data.languages} />
                <Contact darkMode={darkMode} language={language} contact={data.contact} profile={data.profile} />
            </main>
        </div>
    );
}
