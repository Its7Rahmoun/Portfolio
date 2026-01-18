import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { TechStack } from '@/app/components/TechStack';
import { Experience } from '@/app/components/Experience';
import { Projects } from '@/app/components/Projects';
import { Certifications } from '@/app/components/Certifications';
import { Languages } from '@/app/components/Languages';
import { Contact } from '@/app/components/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'} antialiased transition-colors duration-300`}>
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Hero darkMode={darkMode} language={language} />
        <About darkMode={darkMode} language={language} />
        <TechStack darkMode={darkMode} language={language} />
        <Experience darkMode={darkMode} language={language} />
        <Projects darkMode={darkMode} language={language} />
        <Certifications darkMode={darkMode} language={language} />
        <Languages darkMode={darkMode} language={language} />
        <Contact darkMode={darkMode} language={language} />
      </main>
    </div>
  );
}
