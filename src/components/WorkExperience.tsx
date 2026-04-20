import React from "react";
import { EXPERIENCE } from "../constants";

const WorkExperience: React.FC = () => {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 font-display">
        Experience
      </h2>
      <div className="space-y-4">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-white">{job.company}</p>
              <p className="text-xs text-zinc-400">{job.role}</p>
            </div>
            <span className="text-xs text-zinc-500 font-mono whitespace-nowrap shrink-0">
              {job.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
