import {
  SocialLink,
  SkillCategory,
  ExperienceItem,
  Project,
  Article,
} from "./types";

export const EMAIL = "pascalamaliri@gmail.com";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Github", url: "https://github.com/PascalAmah", icon: "Github" },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/pascal-amaliri-ba14b6193/",
    icon: "Linkedin",
  },
  { platform: "X", url: "https://x.com/chisax_", icon: "X" },
  { platform: "Telegram", url: "https://t.me/chisax_", icon: "Send" },
  { platform: "Facebook", url: "#", icon: "Facebook" },
  {
    platform: "Instagram",
    url: "https://instagram.com/chisax_",
    icon: "Instagram",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "Flask",
      "Django",
      "PHP",
      "FastAPI",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase", "Postgresql"],
  },
  {
    title: "Tools & AI/ML",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Agile",
      "pandas",
      "scikit-learn",
      "Transformers",
      "REST APIs",
      "Graphql",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  // { year: 'Jan 2025 -', company: 'HNG Internship', role: 'Frontend Developer | React.js & Next.js' },
  {
    year: "Nov 2025 - Present",
    company: "Outside Hospitaity",
    role: "Software Engineer | Backend",
  },
  {
    year: "Dec 2025 - Feb 2025",
    company: "AfroGoods",
    role: "Software Developer | Backend",
  },
  {
    year: "Sept 2025 - Present",
    company: "Skil Connect",
    role: "Software Developer | Backend",
  },
  {
    year: "Sept 2024 - Feb 2025",
    company: "Encounter Inc. - TripHoppa",
    role: "Frontend Developer | React.js",
  },
  {
    year: "2023 - 2025",
    company: "ALX",
    role: "Software Engineering Student | Certificate Program",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Syncra SDK",
    description:
      "An npm package for offline-first sync logic. Handles data synchronization, conflict resolution, and offline state management. Ships with a landing page and developer dashboard.",
    tags: ["Node.js", "TypeScript", "npm", "Offline-first", "Nest.js", "Redis"],
    link: "https://syncra-six.vercel.app", // replace with real URL
    category: "fullstack",
    githubUrl: "https://github.com/PascalAmah/syncra", // replace with real repo
    visualType: "hybrid",
    style: "default",
    accentColor: "from-cyan-600/20 to-blue-600/20",
  },
  {
    id: "2",
    title: "BarqPix",
    description:
      "A real-time event media platform with QR-based access. Designed backend services for media uploads, user access control, and event-based content isolation. Implemented scalable storage handling and asynchronous processing for uploads.",
    tags: ["Next.js", "Express.js", "Firebase", "AI"],
    link: "https://barq-pix.vercel.app", // replace with real URL
    category: "fullstack",
    githubUrl: "https://github.com/PascalAmah/BarqPix",
    visualType: "hybrid",
    style: "default",
    accentColor: "from-purple-600/20 to-pink-600/20",
  },
  {
    id: "3",
    title: "FoodNeural",
    description:
      "AI-Powered Food Impact Analyzer that analyzes the environmental impact of food products using machine learning. Assesses greenhouse gas emissions, water usage, and land impact to help users make sustainable dietary choices.",
    tags: ["Flask", "React", "pandas", "scikit-learn", "Transformers"],
    link: "https://foodneuralapp.vercel.app", // replace with real URL
    category: "ai",
    githubUrl: "https://github.com/PascalAmah/FoodNeural",
    visualType: "dashboard",
    style: "default",
    accentColor: "from-green-600/20 to-emerald-600/20",
  },
  {
    id: "4",
    title: "Breevs",
    description:
      "Breevs is a decentralized web application built on Stacks Blockchain, where users participate in a high-stakes elimination game.",
    tags: ["Next.js", "Node.js", "AI/ML", "Stacks Blockchain", "Clarity"],
    link: "https://breevs.pxxl.click", // replace with real URL
    category: "web3",
    githubUrl: "https://github.com/PascalAmah/Breevs",
    visualType: "mobile",
    style: "default",
    accentColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: "5",
    title: "EduPulse",
    description:
      "Smart microlearning platform with personalized bite-sized lessons & quizzes based on user behavior, mood, and goals. Revolutionizing education through adaptive learning.",
    tags: ["Python", "Django", "AI/ML", "MySQL"],
    link: "#", // replace with real URL
    category: "backend",
    githubUrl: "https://github.com/PascalAmah/edupulse",
    visualType: "mobile",
    style: "default",
    accentColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: "6",
    title: "AfroGoods",
    description:
      "A B2C ecommerce platform where business sells african food/products, with a built-in advert hub that lets users post and manage their own ads. Built backend services for product listings, order processing, and ad management.",
    tags: [
      "Node.js",
      "React",
      "Nest.js",
      "MongoDB",
      "REST APIs",
      "Stripe",
      "Calendly",
    ],
    link: "https://afrogoods-web.onrender.com", // replace with real URL
    category: "fullstack",
    visualType: "dashboard",
    style: "default",
    accentColor: "from-orange-500/20 to-yellow-500/20",
  },
];

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Building Responsive React Components with Tailwind CSS",
    description:
      "A comprehensive guide to creating modern, responsive UI components using React.js and Tailwind CSS for optimal user experience across devices.",
    link: "#",
  },
  {
    id: "2",
    title: "Integrating Firebase Authentication in React Applications",
    description:
      "Step-by-step tutorial on implementing secure user authentication and verification systems using Firebase in React applications.",
    link: "#",
  },
  {
    id: "3",
    title: "Machine Learning for Environmental Impact Analysis",
    description:
      "Exploring how to use Python, pandas, and scikit-learn to build AI models that analyze environmental impact of consumer choices.",
    link: "#",
  },
  {
    id: "4",
    title: "From Frontend to Full-Stack: My Development Journey",
    description:
      "Personal insights on transitioning from frontend development to full-stack engineering, including key learnings and project experiences.",
    link: "#",
  },
];
