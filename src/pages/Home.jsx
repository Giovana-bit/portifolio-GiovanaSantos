import { useState, useEffect } from 'react';
import ScrollProgress from '../components/portifolio/ScrollProgress';
import Navbar from '../components/portifolio/Navbar';
import HeroSection from '../components/portifolio/HeroSection';
import AboutSection from '../components/portifolio/AboutSection';
import SkillsSection from '../components/portifolio/SkillsSection';
import ProjectsSection from '../components/portifolio/Project.Section';
import CoursesSection from '../components/portifolio/CoursesSection';
import ContactSection from '../components/portifolio/ContactSection';
import Footer from '../components/portifolio/Footer';

const HERO_IMAGE = '/images/hero.png';
const ABOUT_IMAGE = '/images/about.png';
const PROJECTS_IMAGE = '/images/projects.png';

export default function Home() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else {
      root.classList.remove('light-theme');
      root.classList.add('dark-theme');
    }

    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div className={`min-h-screen bg-background text-foreground ${theme === 'light' ? 'light-portfolio' : 'dark-portfolio'}`}>
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection heroImage={HERO_IMAGE} />
      <AboutSection aboutImage={ABOUT_IMAGE} />
      <SkillsSection />
      <ProjectsSection bgImage={PROJECTS_IMAGE} />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}