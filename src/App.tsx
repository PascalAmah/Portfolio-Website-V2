import React from "react";
import Hero from "./components/Hero";
import AboutSkills from "./components/AboutSkills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import InteractiveBackground from "./components/ui/InteractiveBackground";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans flex items-start justify-center py-12 px-4 relative">
      <InteractiveBackground />
      <div className="relative z-10 w-full max-w-2xl bg-surface/90 border border-border rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
        <Hero />
        <div className="px-6 pb-8 pt-6 space-y-8">
          <AboutSkills />
          <WorkExperience />
          <Projects />
          <Contact />
        </div>
        <div className="px-6 py-4 border-t border-border text-center">
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} Pascal Amaliri
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
