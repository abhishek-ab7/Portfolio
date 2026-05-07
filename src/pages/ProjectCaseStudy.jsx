import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export const ProjectCaseStudy = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Navbar />
      <main className="px-4 pb-20 pt-32">
        <article className="container text-left">
          <Link to="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft className="h-4 w-4" /> Back to projects</Link>

          <header className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.05em] md:text-7xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="cosmic-button inline-flex items-center gap-2">Live demo <ExternalLink className="h-4 w-4" /></a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="secondary-button inline-flex items-center gap-2">Source code <Github className="h-4 w-4" /></a>
              </div>
            </div>
            <img src={project.image} alt={`${project.title} screenshot`} className="rounded-[2rem] border border-border shadow-2xl" />
          </header>

          <section className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="premium-card p-6"><p className="eyebrow">Role</p><p className="mt-3 text-xl font-bold">{project.role}</p></div>
            <div className="premium-card p-6"><p className="eyebrow">Problem</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{project.problem}</p></div>
            <div className="premium-card p-6"><p className="eyebrow">Impact</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{project.impact}</p></div>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="premium-card p-7">
              <h2 className="text-3xl font-bold">Tech stack and why</h2>
              <div className="mt-6 space-y-4">
                {project.stackWhy.map(([tech, why]) => (
                  <div key={tech} className="rounded-2xl border border-border bg-background/60 p-4">
                    <h3 className="font-semibold text-primary">{tech}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{why}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card p-7">
              <h2 className="text-3xl font-bold">Architecture decisions</h2>
              <ol className="mt-6 space-y-4">
                {project.architecture.map((item, index) => (
                  <li key={item} className="flex gap-4 rounded-2xl border border-border bg-background/60 p-4">
                    <span className="font-mono text-primary">0{index + 1}</span>
                    <span className="text-sm leading-6 text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mt-14 premium-card p-7">
            <h2 className="text-3xl font-bold">Challenges and solutions</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              {project.challenges.map(([challenge, solution]) => (
                <div key={challenge} className="grid gap-4 border-b border-border p-5 last:border-b-0 md:grid-cols-2">
                  <div><p className="text-xs uppercase tracking-[0.22em] text-primary">Challenge</p><p className="mt-2 font-semibold">{challenge}</p></div>
                  <div><p className="text-xs uppercase tracking-[0.22em] text-primary">Solution</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{solution}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="premium-card p-7">
              <h2 className="text-3xl font-bold">API structure</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.endpoints.map((endpoint) => <code key={endpoint} className="rounded-full border border-border bg-background px-3 py-2 text-sm">{endpoint}</code>)}
              </div>
            </div>
            <div className="premium-card p-7">
              <h2 className="text-3xl font-bold">Data model</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.schema.map((model) => <span key={model} className="rounded-full bg-primary/10 px-3 py-2 text-sm text-primary">{model}</span>)}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};
