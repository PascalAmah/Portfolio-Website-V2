import React from "react";
import { SKILL_CATEGORIES } from "../constants";

const slugMap: Record<string, string> = {
  "React.js": "react", "Next.js": "nextdotjs", "Node.js": "nodedotjs",
  "Express.js": "express", NestJS: "nestjs", "Tailwind CSS": "tailwindcss",
  JavaScript: "javascript", TypeScript: "typescript", Python: "python",
  Flask: "flask", Django: "django", PHP: "php", FastAPI: "fastapi",
  MongoDB: "mongodb", MySQL: "mysql", Firebase: "firebase", Postgresql: "postgresql",
  Docker: "docker", Git: "git", GitHub: "github", HTML: "html5", CSS: "css3",
  Redux: "redux", pandas: "pandas", "scikit-learn": "scikitlearn",
  Transformers: "huggingface", Graphql: "graphql", "CI/CD": "githubactions",
};

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => {
  const slug = slugMap[skill];
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface border border-border rounded-md text-xs text-text-tertiary hover:border-accent/40 hover:text-text-primary transition-colors">
      {slug && (
        <img
          src={`https://cdn.simpleicons.org/${slug}/888888`}
          alt=""
          className="w-3.5 h-3.5"
          onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
        />
      )}
      {skill}
    </span>
  );
};

const AboutSkills: React.FC = () => {
  return (
    <section>
      <p className="text-sm text-text-tertiary leading-relaxed mb-4">
        Fullstack engineer with a strong backend focus — I design and build
        scalable APIs, real-time systems, and AI-powered applications. I can
        own the full stack when needed, but backend architecture and
        performance is where I do my best work.
      </p>

      <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3 font-display">
        Skills
      </h2>

      <div className="space-y-3">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.title}>
            <p className="text-xs text-accent/60 font-mono mb-1.5">{cat.title}</p>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSkills;
