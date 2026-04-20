import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import InteractiveBackground from './components/ui/InteractiveBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-white/20 relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <AboutSkills />
          <WorkExperience />
          <Projects />
          <Articles />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;