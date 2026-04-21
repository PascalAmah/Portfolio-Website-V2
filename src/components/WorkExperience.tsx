import React from "react";
import { EXPERIENCE } from "../constants";

const WorkExperience: React.FC = () => {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 font-display">
        Experience
      </h2>
      <div className="space-y-4">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="flex items-start justify-between gap-4 group">
            <div>
              <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                {job.company}
              </p>
              <p className="text-xs text-text-tertiary">{job.role}</p>
            </div>
            <span className="text-xs text-text-muted font-mono whitespace-nowrap shrink-0">
              {job.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
