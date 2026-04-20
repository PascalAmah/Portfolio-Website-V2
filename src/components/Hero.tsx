import React from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Send,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { SOCIAL_LINKS } from "../constants";
import MagneticButton from "./ui/MagneticButton";

const Hero: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Github":
        return <Github size={18} />;
      case "Linkedin":
        return <Linkedin size={18} />;
      case "Telegram":
        return <Send size={18} />;
      case "Facebook":
        return <Facebook size={18} />;
      case "Instagram":
        return <Instagram size={18} />;
      default:
        return <Github size={18} />;
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-38 md:pb-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background decoration with overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px] pointer-events-none opacity-40" />
      {/* Gradient Overlay to ensure text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-0 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 text-text-primary">
            Software <br />
            <span className="text-text-tertiary">Engineer</span>
          </h1>

          {/* Hashtag Row - Inspired by design */}
          <div className="flex flex-wrap gap-3 mb-6 font-mono text-xs md:text-sm text-accent/80">
            <span>#REACT</span>
            <span>#NEXT.JS</span>
            <span>#PYTHON</span>
            <span>#AI/ML</span>
          </div>

          <p className="text-text-tertiary max-w-md mb-8 leading-relaxed text-lg">
            Backend-Focused Software Engineer building scalable systems and
            AI-powered applications. I design and build backend systems,
            real-time architectures, and AI-driven products with strong frontend
            delivery when needed.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <MagneticButton
              strength={0.2}
              className="bg-accent text-black px-8 py-3.5 rounded-full font-bold hover:bg-accent-hover transition-colors duration-300 flex items-center gap-2 shadow-accent"
            >
              <span className="flex items-center gap-2">
                Projects <ArrowUpRight size={20} />
              </span>
            </MagneticButton>

            <MagneticButton
              strength={0.4}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-text-primary hover:bg-surfaceHighlight hover:border-borderHover transition-all duration-300"
            >
              <ArrowRight size={20} />
            </MagneticButton>
          </div>

          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="flex items-center gap-2 px-4 py-2 bg-surfaceHighlight rounded-full border border-border text-sm text-text-tertiary hover:text-text-primary hover:border-borderHover transition-all duration-300"
              >
                {getIcon(link.icon)}
                <span className="hidden sm:inline">{link.platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Content - Visual Element */}
        <div className="relative hidden lg:block">
          <div className="relative bg-surface border border-border rounded-3xl p-6 w-full max-w-md mx-auto transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 shadow-lg group">
            <div className="absolute -top-12 -left-12 text-text-tertiary opacity-20 text-9xl font-bold select-none z-0 group-hover:text-accent/10 transition-colors duration-300">
              Code
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="font-mono text-xs text-text-muted">
                  article-preview.tsx
                </span>
              </div>
              <div className="h-40 bg-gradient-to-br from-background to-surface-highlight rounded-xl mb-4 border border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300" />
                <div className="w-16 h-16 rounded-full bg-surface border border-white/10 backdrop-blur-md flex items-center justify-center shadow-inner z-10">
                  <div className="w-8 h-8 rounded-full bg-accent blur-md animate-pulse opacity-50" />
                  <div className="absolute w-2 h-2 bg-accent rounded-full" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-text-primary">
                The simplest example
              </h3>
              <p className="text-sm text-text-tertiary mb-4">
                This article presents a simple way to implement
                micro-services...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-text-muted">
                  Read time: 5m
                </span>
                <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Decorative elements behind */}
          <div className="absolute top-10 right-10 w-full h-full border border-white/5 rounded-3xl -z-10 transform rotate-[3deg]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
