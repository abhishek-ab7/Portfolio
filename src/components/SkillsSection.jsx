import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "C++", level: 90, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "Python", level: 70, category: "languages" },

  // Technologies
  { name: "HTML/CSS", level: 95, category: "technologies" },
  { name: "Bootstrap", level: 85, category: "technologies" },
  { name: "Tailwind CSS", level: 90, category: "technologies" },
  { name: "React.js", level: 90, category: "technologies" },
  { name: "Node.js", level: 85, category: "technologies" },
  { name: "Express.js", level: 80, category: "technologies" },
  { name: "Redux", level: 80, category: "technologies" },
  { name: "Web Sockets", level: 75, category: "technologies" },
  { name: "MongoDB", level: 80, category: "technologies" },
  { name: "MySQL", level: 70, category: "technologies" },
  { name: "PostgreSQL", level: 65, category: "technologies" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "RESTful APIs/JWT", level: 85, category: "tools" },
  
  { name: "Google OAuth", level: 70, category: "tools" },
  { name: "Razorpay API", level: 70, category: "tools" },
];

const categories = ["all", "languages", "technologies", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
