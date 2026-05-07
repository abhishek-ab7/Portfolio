import { BriefcaseBusiness, Code2, Database, RadioTower } from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { capabilities, experience, profile } from "@/data/portfolio";

const icons = [Code2, RadioTower, Database, BriefcaseBusiness];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative px-4">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Positioning</p>
          <h2>Engineer first. Product-aware. Recruiter-friendly.</h2>
          <p>
            I present every project as a system: the user problem, architecture, tradeoffs, implementation proof, and business impact.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="premium-card p-8 text-left">
            <p className="text-sm uppercase tracking-[0.28em] text-primary">About</p>
            <h3 className="mt-4 text-3xl font-bold tracking-tight">Full-stack developer focused on credible execution.</h3>
            <p className="mt-5 leading-8 text-muted-foreground">
              I build full-stack web applications with Next.js, React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Supabase, Socket.IO, and REST APIs. My strongest work combines secure authentication, RBAC, real-time features, caching, database-backed workflows, and polished interfaces that recruiters and engineers can evaluate quickly.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              This portfolio is structured to make technical judgment visible: why each stack was chosen, how the system is organized, where tradeoffs appeared, and what measurable outcomes the work supports.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="cosmic-button text-center">Explore case studies</a>
              <a href={profile.resume} download className="secondary-button text-center">Download CV</a>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => {
              const Icon = icons[index];
              return (
                <article key={capability.title} className="premium-card card-hover p-6 text-left">
                  <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-semibold">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{capability.summary}</p>
                  <p className="mt-4 text-sm font-medium text-foreground">{capability.proof}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {capability.tools.map((tool) => (
                      <span key={tool} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{tool}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <div className="section-heading mb-10">
            <p className="eyebrow">Experience</p>
            <h2>Professional timeline with measurable engineering impact.</h2>
            <p>Recent work is emphasized first, with each role grouped by context, stack ownership, and the outcomes delivered.</p>
            <h2>Outcome-focused work timeline.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="premium-card p-7 text-left">
                <div className="flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="text-primary">{item.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground sm:text-right">{item.period}<br />{item.location}</p>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
};
