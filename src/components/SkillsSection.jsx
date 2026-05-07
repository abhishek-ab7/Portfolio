import { useState } from "react";
import { cn } from "@/lib/utils";
import { skillGroups } from "@/data/portfolio";

const categories = ["All", "Frontend", "Backend", "Realtime", "Data", "Workflow", "Problem"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredGroups = skillGroups.filter((group) => activeCategory === "All" || group.title.includes(activeCategory));

  return (
    <section id="skills" className="section-padding relative px-4 bg-secondary/30">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills with evidence</p>
          <h2>No vague progress bars. Every capability points to proof.</h2>
          <p>Recruiters scan tools; engineering interviewers look for context. This matrix connects both.</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_0_24px_rgba(124,58,237,0.25)]"
                  : "border-border bg-card/70 text-foreground/75 hover:border-primary/60 hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group) => (
            <article key={group.title} className="premium-card card-hover p-6 text-left">
              <h3 className="text-xl font-bold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border bg-background/70 px-3 py-1 text-sm text-foreground/80">{skill}</span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">{group.evidence}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
