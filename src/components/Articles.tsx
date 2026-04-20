import React from "react";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "../constants";

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-end mb-12">
        <h2 className="text-4xl md:text-5xl font-mono tracking-tighter">
          Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ARTICLES.map((article) => (
          <a
            key={article.id}
            href={article.link}
            className="group bg-surface border border-border rounded-2xl p-8 hover:bg-surface-highlight transition-colors flex flex-col justify-between h-full"
          >
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 group-hover:text-text-primary text-text-secondary transition-colors">
                {article.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {article.description}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="px-4 py-1.5 rounded-full border border-border text-xs font-mono text-text-secondary group-hover:bg-accent group-hover:text-black transition-all">
                Read more
              </div>
              <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-text-secondary group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles;
