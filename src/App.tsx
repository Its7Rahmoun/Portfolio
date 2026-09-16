import { lazy, Suspense, useEffect, useState } from 'react';
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

const UniverseBackground = lazy(() =>
    import('@/components/universe/UniverseBackground').then((module) => ({ default: module.UniverseBackground })),
);

export default function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState<'en' | 'fr'>('en');
    const [universeEnabled, setUniverseEnabled] = useState(true);
    const { data, isLoading, isError } = usePortfolioData();

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#05060c] text-white">
                Loading...
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#05060c] text-red-400">
                Error loading portfolio data
            </div>
        );
    }

    return (
        <div className={`${darkMode ? 'text-white' : 'text-slate-900'} relative min-h-screen antialiased`}>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
            >
                Skip to main content
            </a>
            <Suspense fallback={null}>
                <UniverseBackground enabled={universeEnabled} lightMode={!darkMode} />
            </Suspense>
            <Navigation
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                language={language}
                setLanguage={setLanguage}
                profile={data.profile}
                universeEnabled={universeEnabled}
                setUniverseEnabled={setUniverseEnabled}
            />
            <main id="main-content" className="relative z-10">
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
