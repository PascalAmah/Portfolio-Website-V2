export interface SocialLink {
  platform: string;
  url: string;
  icon: string; 
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  year: string;
  company: string;
  role: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  visualType: 'dashboard' | 'mobile' | 'hybrid';
  style: 'default' | 'light'; // 'default' is dark theme, 'light' is the beige theme
  accentColor: string;
  githubUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  link: string;
}

export interface OptimizedImage {
  src: string;
  webp?: string;
  avif?: string;
  placeholder: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProfessionalPhotoProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  showStatus?: boolean;
  className?: string;
}