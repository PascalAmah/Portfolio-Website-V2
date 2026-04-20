import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'solid' | 'dark';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'outline' }) => {
  const baseClasses = "rounded-full px-4 py-1.5 text-xs font-mono tracking-wide whitespace-nowrap transition-colors";
  const variants = {
    outline: "border border-neutral-800 text-neutral-400 bg-transparent group-hover:border-neutral-600 group-hover:text-neutral-300",
    solid: "bg-white text-black border border-white",
    dark: "border border-neutral-300 text-neutral-700 bg-transparent hover:border-neutral-900 hover:text-black"
  };

  return (
    <span className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;