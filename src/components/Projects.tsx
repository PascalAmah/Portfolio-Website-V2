import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "./ui/SectionLabel";
import Badge from "./ui/Badge";
import { PROJECTS } from "../constants";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "../types";
import useReducedMotion from "../hooks/useReducedMotion";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <SectionLabel label="Projects" />

      {/* Projects List - Each project gets its own section */}
      <div className="space-y-32">
        {PROJECTS.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

interface ProjectSectionProps {
  project: Project;
  index: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    const section = sectionRef.current;
    const bentoGrid = section.querySelector(".project-bento-grid");
    const projectInfo = section.querySelector(".project-info");

    // Animate bento grid cards with stagger
    if (bentoGrid) {
      const cards = bentoGrid.querySelectorAll(".bento-card");
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          scale: 0.9,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 0.4,
            from: "start",
          },
          scrollTrigger: {
            trigger: bentoGrid,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animate project info
    if (projectInfo) {
      gsap.fromTo(
        projectInfo,
        {
          opacity: 0,
          x: isEven ? 40 : -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectInfo,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === bentoGrid || trigger.trigger === projectInfo) {
          trigger.kill();
        }
      });
    };
  }, [isEven, prefersReducedMotion]);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
    >
      {/* Bento Grid Images - 60% width */}
      <div
        className={`project-bento-grid lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        <ProjectBentoGrid project={project} />
      </div>

      {/* Project Info - 40% width */}
      <div
        className={`project-info lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col justify-center`}
      >
        <ProjectInfo project={project} />
      </div>
    </div>
  );
};

interface ProjectBentoGridProps {
  project: Project;
}

const ProjectBentoGrid: React.FC<ProjectBentoGridProps> = ({ project }) => {
  // Different bento layouts based on project type
  switch (project.visualType) {
    case "mobile":
      return <MobileBentoLayout project={project} />;
    case "dashboard":
      return <DashboardBentoLayout project={project} />;
    case "hybrid":
    default:
      return <HybridBentoLayout project={project} />;
  }
};

// Mobile App Bento Layout (Kana Master style)
const MobileBentoLayout: React.FC<{ project: Project }> = ({ project }) => (
  <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[500px] group">
    {/* Large Mobile Screenshot - Main Feature */}
    <div className="bento-card col-span-2 row-span-3 relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)] hover:-translate-y-1 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop&crop=center"
        alt="Mobile app main screen"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 text-text-primary transform group-hover:translate-y-[-6px] transition-transform duration-300">
        <div className="text-xs text-text-tertiary mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
          Main Interface
        </div>
        <div className="text-sm font-semibold">Learning Dashboard</div>
      </div>
    </div>

    {/* Mobile Navigation */}
    <div className="bento-card col-span-2 row-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_6px_24px_rgba(59,130,246,0.12)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center"
        alt="Mobile app navigation"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500" />
      <div className="absolute bottom-3 left-3 text-text-primary transform group-hover:translate-y-[-4px] transition-transform duration-300">
        <div className="text-xs font-medium">Navigation</div>
      </div>
    </div>

    {/* Feature Highlight */}
    <div className="bento-card col-span-2 row-span-1 relative overflow-hidden rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 hover:shadow-[0_4px_20px_rgba(34,197,94,0.1)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center"
        alt="Feature highlight"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent group-hover:from-black/40 transition-colors duration-500" />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-primary">
        <div className="text-xs font-medium">Progress Tracking</div>
      </div>
    </div>

    {/* Stats/Analytics */}
    <div className="bento-card col-span-2 row-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_6px_24px_rgba(168,85,247,0.12)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
        alt="Analytics dashboard"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500" />
      <div className="absolute bottom-3 left-3 text-text-primary transform group-hover:translate-y-[-4px] transition-transform duration-300">
        <div className="text-xs text-text-tertiary mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
          Analytics
        </div>
        <div className="text-sm font-semibold">User Progress</div>
      </div>
    </div>
  </div>
);

// Dashboard Bento Layout (Anime Sentry style)
const DashboardBentoLayout: React.FC<{ project: Project }> = ({ project }) => (
  <div className="grid grid-cols-6 grid-rows-4 gap-4 h-[500px] group">
    {/* Main Dashboard */}
    <div className="bento-card col-span-4 row-span-3 relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
        alt="Main dashboard interface"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 text-text-primary transform group-hover:translate-y-[-6px] transition-transform duration-300">
        <div className="text-xs text-text-tertiary mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
          Main Dashboard
        </div>
        <div className="text-lg font-semibold">Analytics Overview</div>
      </div>
    </div>

    {/* Mobile Companion */}
    <div className="bento-card col-span-2 row-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-[0_6px_24px_rgba(99,102,241,0.12)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=400&fit=crop&crop=center"
        alt="Mobile companion app"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500" />
      <div className="absolute bottom-3 left-3 text-text-primary transform group-hover:translate-y-[-4px] transition-transform duration-300">
        <div className="text-xs font-medium">Mobile App</div>
      </div>
    </div>

    {/* Notification System */}
    <div className="bento-card col-span-2 row-span-1 relative overflow-hidden rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 hover:shadow-[0_4px_20px_rgba(34,197,94,0.1)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=150&fit=crop&crop=center"
        alt="Notification system"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent group-hover:from-black/40 transition-colors duration-500" />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-primary">
        <div className="text-xs font-medium">Real-time Alerts</div>
      </div>
    </div>

    {/* Analytics Cards */}
    <div className="bento-card col-span-4 row-span-1 relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=150&fit=crop&crop=center"
        alt="Analytics overview"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent group-hover:from-black/40 transition-colors duration-500" />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-primary">
        <div className="text-sm font-medium">Performance Metrics</div>
      </div>
    </div>

    {/* API Status */}
    <div className="bento-card col-span-2 row-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 hover:border-teal-500/40 hover:shadow-[0_6px_24px_rgba(20,184,166,0.12)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=300&fit=crop&crop=center"
        alt="API monitoring"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500" />
      <div className="absolute bottom-3 left-3 text-text-primary transform group-hover:translate-y-[-4px] transition-transform duration-300">
        <div className="text-xs text-text-tertiary mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
          API Status
        </div>
        <div className="text-sm font-semibold">System Health</div>
      </div>
    </div>
  </div>
);

// Hybrid Bento Layout (BarqPix style)
const HybridBentoLayout: React.FC<{ project: Project }> = ({ project }) => (
  <div className="grid grid-cols-5 grid-rows-4 gap-4 h-[500px] group">
    {/* Web Application */}
    <div className="bento-card col-span-3 row-span-3 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop&crop=center"
        alt="Web application interface"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 text-text-primary transform group-hover:translate-y-[-6px] transition-transform duration-300">
        <div className="text-xs opacity-80 mb-1 group-hover:opacity-100 transition-opacity">
          Web Platform
        </div>
        <div className="text-lg font-semibold">Event Management</div>
      </div>
    </div>

    {/* Mobile App */}
    <div className="bento-card col-span-2 row-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_6px_24px_rgba(168,85,247,0.12)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=400&fit=crop&crop=center"
        alt="Mobile application"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500" />
      <div className="absolute bottom-3 left-3 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
        <div className="text-xs opacity-80 mb-1 group-hover:opacity-100 transition-opacity">
          Mobile
        </div>
        <div className="text-sm font-semibold">Photo Sharing</div>
      </div>
    </div>

    {/* QR Code Feature */}
    <div className="bento-card col-span-2 row-span-1 relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=150&fit=crop&crop=center"
        alt="QR code functionality"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent group-hover:from-black/40 transition-colors duration-500" />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-primary">
        <div className="text-xs font-medium">QR Integration</div>
      </div>
    </div>

    {/* AI Features */}
    <div className="bento-card col-span-3 row-span-1 relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_4px_20px_rgba(139,92,246,0.1)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=150&fit=crop&crop=center"
        alt="AI features"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent group-hover:from-black/40 transition-colors duration-500" />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-primary">
        <div className="text-sm font-medium">AI Smart Captions & Summaries</div>
      </div>
    </div>

    {/* Analytics Dashboard */}
    <div className="bento-card col-span-2 row-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 hover:shadow-[0_6px_24px_rgba(249,115,22,0.12)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop&crop=center"
        alt="Analytics dashboard"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500" />
      <div className="absolute bottom-3 left-3 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
        <div className="text-xs opacity-80 mb-1 group-hover:opacity-100 transition-opacity">
          Analytics
        </div>
        <div className="text-sm font-semibold">Event Insights</div>
      </div>
    </div>
  </div>
);

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  const isLight = project.style === "light";

  return (
    <div className="space-y-6">
      {/* Project Title */}
      <div>
        <h3
          className={`
          text-4xl md:text-5xl font-bold leading-tight mb-4
        ${isLight ? "text-text-primary" : "text-text-primary"}
          transition-colors duration-300
        `}
        >
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant={isLight ? "dark" : "outline"}
              className="text-sm hover:scale-105 transition-transform duration-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Description */}
      <p
        className={`
        text-lg leading-relaxed
        ${isLight ? "text-neutral-600" : "text-neutral-300"}
        transition-colors duration-300
      `}
      >
        {project.description}
      </p>

      {/* Key Features */}
      <div className="space-y-3">
        <h4
          className={`
          text-sm font-semibold uppercase tracking-wider 
          ${isLight ? "text-neutral-700" : "text-neutral-400"}
          transition-colors duration-300
        `}
        >
          Key Features
        </h4>
        <ul className="space-y-2.5">
          {getProjectFeatures(project).map((feature, index) => (
            <li
              key={index}
              className={`
                flex items-start gap-3 text-sm 
                ${isLight ? "text-text-tertiary" : "text-text-secondary"}
                hover:translate-x-1 transition-transform duration-200
              `}
            >
              <div
                className={`
                w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 
                ${isLight ? "bg-text-tertiary" : "bg-accent"}
                transition-colors duration-300
              `}
              />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 pt-4">
        <a
          href={project.link}
          className={`
            group/btn flex items-center gap-3 px-6 py-3.5 rounded-full font-bold 
            transition-all duration-300 transform hover:scale-105 hover:shadow-lg
            ${
              isLight
                ? "bg-text-primary text-background hover:bg-text-tertiary hover:shadow-black/20"
                : "bg-accent text-black hover:bg-[#FACC15] shadow-[0_0_15px_rgba(255,209,102,0.2)] hover:shadow-[0_0_25px_rgba(255,209,102,0.3)]"
            }
          `}
        >
          <span>View Project</span>
          <ArrowUpRight
            size={18}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
          />
        </a>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-3.5 rounded-full border transition-all duration-300 transform hover:scale-110
              ${
                isLight
                  ? "border-border text-text-secondary hover:border-text-primary hover:text-text-primary hover:shadow-md"
                  : "border-border bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-highlight hover:border-border-hover hover:shadow-lg hover:shadow-border/50"
              }
            `}
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

// Helper function to get project-specific features
const getProjectFeatures = (project: Project): string[] => {
  switch (project.id) {
    case "1": // BarqPix
      return [
        "QR code-based photo sharing system",
        "AI-powered smart captions and summaries",
        "Real-time event photo aggregation",
        "Cross-platform mobile and web support",
      ];
    case "2": // FoodNeural
      return [
        "Machine learning environmental impact analysis",
        "Comprehensive food database integration",
        "Interactive sustainability recommendations",
        "Real-time carbon footprint calculations",
      ];
    case "3": // EduPulse
      return [
        "Personalized microlearning algorithms",
        "Adaptive content based on user behavior",
        "Gamified progress tracking system",
        "Multi-device synchronization",
      ];
    default:
      return [
        "Modern responsive design",
        "Real-time data processing",
        "Intuitive user interface",
        "Scalable architecture",
      ];
  }
};

export default Projects;
