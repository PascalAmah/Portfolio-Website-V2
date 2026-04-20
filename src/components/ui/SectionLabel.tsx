import React from "react";
import { Sparkles } from "lucide-react";

interface SectionLabelProps {
  label: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ label }) => {
  return (
    <div className="flex items-center gap-3 mb-8 md:mb-12 group">
      <Sparkles className="text-accent animate-pulse" size={18} />
      <span className="font-mono text-text-muted text-sm md:text-base group-hover:text-text-primary transition-colors">
        .../{label} ...
      </span>
    </div>
  );
};

export default SectionLabel;
