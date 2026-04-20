import React from "react";
import { EXPERIENCE } from "../constants";

const WorkExperience: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* No SectionLabel here based on design, just the list */}

      <div className="border-t border-white/10">
        {EXPERIENCE.map((job, index) => (
          <div
            key={index}
            className="group py-10 border-b border-white/10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl"
          >
            {/* Year */}
            <div className="w-32 flex-shrink-0">
              <span className="font-mono text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                {job.year}
              </span>
            </div>

            {/* Company */}
            <div className="flex-1">
              <span className="text-2xl md:text-3xl font-medium text-text-primary block mb-1">
                {job.company}
              </span>
            </div>

            {/* Role */}
            <div className="md:text-right">
              <span className="font-mono text-sm text-text-secondary border border-border rounded-full px-3 py-1 bg-surface">
                {job.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
