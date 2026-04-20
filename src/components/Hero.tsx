import React from "react";
import { Github, Linkedin, Send, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={16} />,
  Linkedin: <Linkedin size={16} />,
  X: <XIcon size={16} />,
  Telegram: <Send size={16} />,
  Instagram: <Instagram size={16} />,
};

const Hero: React.FC = () => {
  const visibleLinks = SOCIAL_LINKS.filter((l) => l.url !== "#" && iconMap[l.icon]);

  return (
    <div className="flex flex-col items-center text-center px-6 pt-10 pb-8 border-b border-zinc-800">
      {/* Avatar */}
      <img
        src="/assets/images/pascal-professional.jpg"
        alt="Pascal Amaliri"
        className="w-24 h-24 rounded-full object-cover border-2 border-zinc-700 mb-4"
      />

      <h1 className="text-2xl font-bold text-white mb-1 font-display tracking-tight">Pascal Amaliri</h1>
      
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-xs text-green-400">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
          Open to Work
        </span>
      </div>

      <p className="text-sm text-zinc-400 mb-4">
        Backend-Focused Software Engineer · AI/ML · Scalable Systems
      </p>

      {/* Social links */}
      <div className="flex flex-wrap justify-center gap-2">
        {visibleLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full text-xs text-zinc-300 hover:text-white transition-colors"
          >
            {iconMap[link.icon]}
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
