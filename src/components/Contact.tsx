import React from "react";
import { Mail, Github, Linkedin, Send, Instagram } from "lucide-react";
import { SOCIAL_LINKS, EMAIL } from "../constants";

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={14} />,
  Linkedin: <Linkedin size={14} />,
  X: <XIcon size={14} />,
  Telegram: <Send size={14} />,
  Instagram: <Instagram size={14} />,
};

const Contact: React.FC = () => {
  const visibleLinks = SOCIAL_LINKS.filter((l) => l.url !== "#" && iconMap[l.icon]);

  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 font-display">
        Contact
      </h2>

      <a
        href={`mailto:${EMAIL}`}
        className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors mb-4"
      >
        <Mail size={14} className="text-zinc-500" />
        {EMAIL}
      </a>

      <div className="flex flex-wrap gap-2">
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
    </section>
  );
};

export default Contact;
