import React from "react";
import SectionLabel from "./ui/SectionLabel";
import { SOCIAL_LINKS } from "../constants";
import {
  Github,
  Linkedin,
  Send,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

const Footer: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Github":
        return <Github size={16} />;
      case "Linkedin":
        return <Linkedin size={16} />;
      case "Telegram":
        return <Send size={16} />;
      case "Facebook":
        return <Facebook size={16} />;
      case "Instagram":
        return <Instagram size={16} />;
      default:
        return <Github size={16} />;
    }
  };

  return (
    <footer
      id="contacts"
      className="pt-10 pb-10 px-6 max-w-7xl mx-auto border-t border-white/5 mt-20"
    >
      {/* NEW CTA Section - Inspired by David Michel Design */}
      <div className="mb-20 bg-surface border border-border rounded-3xl p-10 md:p-20 text-center relative overflow-hidden group">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-[100px] pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />

        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight relative z-10">
          Surround yourself
          <br />
          <span className="text-text-secondary">with an expert</span>
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto mb-10 text-lg relative z-10">
          Ready to bring your ideas to life? Let's collaborate and build
          something extraordinary together.
        </p>
        <div className="flex justify-center">
          <MagneticButton
            strength={0.25}
            className="relative z-10 bg-accent text-black px-8 py-4 rounded-full font-bold hover:bg-[#FACC15] transition-colors shadow-[0_0_30px_rgba(255,209,102,0.4)]"
          >
            <span className="flex items-center gap-2">
              Start a Project Now <ArrowUpRight size={20} />
            </span>
          </MagneticButton>
        </div>
      </div>

      <SectionLabel label="Contacts" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <div className="flex flex-col mb-8">
            <a
              href="#about"
              className="text-text-secondary hover:text-text-primary transition-colors mb-2"
            >
              Main
            </a>
            <a
              href="#about"
              className="text-text-secondary hover:text-text-primary transition-colors mb-2"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-text-secondary hover:text-text-primary transition-colors mb-2"
            >
              Projects
            </a>
            <a
              href="#articles"
              className="text-text-secondary hover:text-text-primary transition-colors mb-2"
            >
              Articles
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="bg-surface border border-border rounded-2xl p-6 mb-8 md:mb-0">
            <h4 className="font-mono text-sm text-text-muted mb-4">Site</h4>
            <p className="text-sm text-text-secondary mb-1">
              Handcrafted by ME /
            </p>
            <p className="text-sm text-text-secondary mb-1">
              Designed by Talzia /
            </p>
            <p className="text-sm text-text-secondary">Powered by React.js</p>
          </div>
        </div>
      </div>

      <div className="bg-surface-highlight rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Pascal</h2>
          <h2 className="text-4xl md:text-5xl font-light text-text-secondary">
            Amaliri
          </h2>
          <p className="text-xs font-mono text-text-muted mt-2">
            Full-stack developer
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full md:w-auto">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="flex items-center gap-2 px-3 py-2 bg-black border border-border rounded-lg text-xs text-text-secondary hover:border-border-hover hover:text-text-primary transition-colors"
            >
              {getIcon(link.icon)}
              {link.platform}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-text-muted text-xs font-mono">
          © {new Date().getFullYear()} Pascal Amaliri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
