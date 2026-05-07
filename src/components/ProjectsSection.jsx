import { ArrowRight, ExternalLink, Github, Layers3 } from "lucide-react";
import { projects } from "@/data/portfolio";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative px-4">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Featured case studies</p>
          <h2>Projects presented as engineering decisions, not thumbnails.</h2>
          <p>Each case study explains the problem, stack rationale, architecture, challenges, and measurable impact.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.id} className="premium-card group flex h-full flex-col overflow-hidden text-left lg:first:col-span-2">
              <div className="relative h-56 overflow-hidden border-b border-border lg:first:h-72">
                <img src={project.image} alt={`${project.title} product screenshot`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                  {project.eyebrow}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">0{index + 1} · {project.role}</p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight">{project.title}</h3>
                  </div>
                  <Layers3 className="h-6 w-6 shrink-0 text-primary" />
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>

                <div className="mt-5 rounded-2xl border border-border bg-background/60 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary">Problem</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/85">{project.problem}</p>
                </div>

                <p className="mt-4 text-sm font-medium text-foreground">Impact: {project.impact}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{tag}</span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a href={project.slug} className="cosmic-button inline-flex items-center gap-2 px-4 py-2 text-sm">
                    Read case study <ArrowRight className="h-4 w-4" />
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="ghost-button inline-flex items-center gap-2 px-4 py-2 text-sm" aria-label={`Open live demo for ${project.title}`}>
                      Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="ghost-button inline-flex items-center gap-2 px-4 py-2 text-sm" aria-label={`Open GitHub repository for ${project.title}`}>
                    Code <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
