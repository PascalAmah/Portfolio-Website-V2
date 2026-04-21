import React, { useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";

type Tab = "all" | "fullstack" | "backend" | "frontend" | "ai" | "web3";

const TABS: { label: string; value: Tab }[] = [
  { label: "All", value: "all" },
  { label: "Fullstack", value: "fullstack" },
  { label: "Backend", value: "backend" },
  { label: "Frontend", value: "frontend" },
  { label: "AI", value: "ai" },
  { label: "Web3", value: "web3" },
];

const Projects: React.FC = () => {
  const [active, setActive] = useState<Tab>("all");
  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3 font-display">
        Projects
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              active === tab.value
                ? "bg-accent text-black"
                : "bg-surface text-text-tertiary hover:text-text-primary border border-border hover:border-borderHover"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <p className="text-xs text-text-muted py-4 text-center">
            No projects in this category yet.
          </p>
        ) : (
          filtered.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-surface border border-border rounded-lg hover:border-accent/30 transition-colors group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-sm font-semibold text-text-primary font-display">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-text-primary transition-colors"
                      title="Source code"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                    title="Live project"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
              <p className="text-xs text-text-tertiary mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-surfaceHighlight border border-border rounded text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
