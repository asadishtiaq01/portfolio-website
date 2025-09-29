import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProfessionalJourney from './components/ProfessionalJourney';
import Projects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import Skills from './components/Skills';
import Education from './components/Education';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Remove custom programmatic scrolling; rely on default anchor behavior with CSS scroll padding
  // Scroll to section on initial load if URL has a hash just to sync active state
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      setActiveSection(id);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main>
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>
        
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        
        {/* Journey section kept in page but not linked in navbar; remove id to avoid hash conflicts */}
        <section>
          <ProfessionalJourney />
        </section>
        
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        
        <section id="experience" className="scroll-mt-24">
          <ProfessionalExperience />
        </section>
        
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        
        <section id="education" className="scroll-mt-24">
          <Education />
        </section>
        
        <section id="case-studies" className="scroll-mt-24">
          <CaseStudy />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;