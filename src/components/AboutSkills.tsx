import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "./ui/SectionLabel";
import ProfessionalPhoto from "./ProfessionalPhoto";
import { SKILL_CATEGORIES } from "../constants";
import useReducedMotion from "../hooks/useReducedMotion";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSkills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bentoGridRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Helper to convert skill name to Simple Icons slug
  const getIconUrl = (skill: string, color: string = "888888") => {
    const slugMap: Record<string, string> = {
      "React.js": "react",
      "Next.js": "nextdotjs",
      "Vue.js": "vuedotjs",
      "Nuxt.js": "nuxtdotjs",
      "React Native": "react",
      "Node.js": "nodedotjs",
      "Express.js": "express",
      NestJS: "nestjs",
      "Tailwind CSS": "tailwindcss",
      JavaScript: "javascript",
      TypeScript: "typescript",
      Python: "python",
      Flask: "flask",
      Django: "django",
      PHP: "php",
      FastAPI: "fastapi",
      MongoDB: "mongodb",
      MySQL: "mysql",
      Firebase: "firebase",
      Docker: "docker",
      Git: "git",
      GitHub: "github",
      HTML: "html5",
      CSS: "css3",
      Redux: "redux",
      pandas: "pandas",
      "scikit-learn": "scikitlearn",
      Transformers: "huggingface",
      "REST APIs": "fastapi",
      "CI/CD": "githubactions",
      Agile: "jira",
    };

    let slug = slugMap[skill] || skill.toLowerCase().replace(/[^a-z0-9]/g, "");
    return `https://cdn.simpleicons.org/${slug}/${color}`;
  };

  const SkillItem: React.FC<{ skill: string }> = ({ skill }) => (
    <div className="flex items-center gap-2 group/skill hover:bg-white/5 rounded-lg px-2 py-1 transition-all duration-300 cursor-default">
      <img
        src={getIconUrl(skill, "737373")}
        alt=""
        className="w-4 h-4 opacity-70 grayscale group-hover/skill:grayscale-0 group-hover/skill:opacity-100 transition-all duration-300 group-hover/skill:scale-110"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="font-mono text-sm text-text-tertiary group-hover/skill:text-text-primary transition-colors duration-300">
        {skill}
      </span>
    </div>
  );

  // Scroll-based animations
  useEffect(() => {
    if (prefersReducedMotion || !bentoGridRef.current) return;

    const cards = bentoGridRef.current.querySelectorAll(".bento-card");

    // Animate each card with stagger effect
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          amount: 0.6,
          from: "start",
        },
        scrollTrigger: {
          trigger: bentoGridRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate skill items within each card
    cards.forEach((card) => {
      const skillItems = card.querySelectorAll(".skill-item");
      if (skillItems.length > 0) {
        gsap.fromTo(
          skillItems,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <SectionLabel label="About me" />

      {/* Top Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          {/* Empty left column for alignment if needed, or could be used for illustration */}
        </div>
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl leading-relaxed text-text-secondary font-light mb-4">
            Hello! I'm Pascal, a{" "}
            <span className="text-text-primary font-medium">
              Software Engineer
            </span>{" "}
            I’m a software engineer focused on building scalable backend systems
            and production-ready applications. I’ve worked on real-time
            platforms, AI-powered tools, and offline-first architectures,
            solving problems around data synchronization, performance, and
            system design.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div
        ref={bentoGridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
      >
        {/* 1. Photo Card (Tall) */}
        <div className="bento-card row-span-2 col-span-1 sm:col-span-1 md:col-span-1 order-1 md:order-1">
          <ProfessionalPhoto
            src="/assets/images/pascal-professional.jpg"
            alt="Pascal Amaliri - Professional headshot"
            size="medium"
            showStatus={true}
            className="h-full"
          />
        </div>

        {/* 2. Frontend (Wide) */}
        <div className="bento-card col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 bg-surface border border-border rounded-3xl p-6 md:p-8 hover:border-borderHover hover:bg-surfaceHighlight transition-all duration-300 group flex flex-col order-2 md:order-2">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-text-primary">
                Frontend
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3">
            {SKILL_CATEGORIES.find((c) => c.title === "Frontend")?.skills.map(
              (skill) => (
                <div key={skill} className="skill-item">
                  <SkillItem skill={skill} />
                </div>
              ),
            )}
          </div>
        </div>

        {/* 3. Backend (Square-ish) */}
        <div className="bento-card col-span-1 sm:col-span-1 bg-surface border border-border rounded-3xl p-6 md:p-8 hover:border-borderHover hover:bg-surfaceHighlight transition-all duration-300 group flex flex-col justify-between order-3 md:order-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
              <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-medium text-text-primary">Backend</h3>
          </div>
          <ul className="space-y-3 flex-1">
            {SKILL_CATEGORIES.find((c) => c.title === "Backend")
              ?.skills.slice(0, 4)
              .map((skill) => (
                <li
                  key={skill}
                  className="skill-item border-b border-border pb-2 last:border-0 group-hover:border-borderHover transition-colors duration-300"
                >
                  <SkillItem skill={skill} />
                </li>
              ))}
          </ul>
        </div>

        {/* 4. Databases (Square-ish) */}
        <div className="bento-card col-span-1 sm:col-span-1 bg-surface border border-border rounded-3xl p-6 md:p-8 hover:border-borderHover hover:bg-surfaceHighlight transition-all duration-300 group flex flex-col justify-between order-4 md:order-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
              <div className="w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-medium text-text-primary">Databases</h3>
          </div>
          <ul className="space-y-3 flex-1">
            {SKILL_CATEGORIES.find((c) => c.title === "Databases")?.skills.map(
              (skill) => (
                <li
                  key={skill}
                  className="skill-item border-b border-border pb-2 last:border-0 group-hover:border-borderHover transition-colors duration-300"
                >
                  <SkillItem skill={skill} />
                </li>
              ),
            )}
          </ul>
        </div>

        {/* 5. Tools & AI/ML (Wide) */}
        <div className="bento-card col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 bg-surface border border-border rounded-3xl p-6 md:p-8 hover:border-borderHover hover:bg-surfaceHighlight transition-all duration-300 group order-5 md:order-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center">
              <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-medium text-text-primary">
              Tools & AI/ML
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES.find(
              (c) => c.title === "Tools & AI/ML",
            )?.skills.map((skill) => (
              <div key={skill} className="skill-item">
                <SkillItem skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
