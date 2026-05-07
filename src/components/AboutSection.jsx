import { BriefcaseBusiness, CalendarDays, CheckCircle2, Code2, Database, MapPin, RadioTower } from "lucide-react";
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
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
            <aside className="premium-card sticky top-24 overflow-hidden p-7 text-left">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-cyan-400 to-emerald-400" />
              <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">Work experience</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                A focused timeline covering full-stack delivery, internal platform architecture, CI/CD, caching, RBAC, and internship execution.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-2xl border border-border bg-background/70 p-4">
                  <p className="text-2xl font-black text-primary">{experience.length}</p>
                  <p className="mt-1 text-xs text-muted-foreground">roles</p>
                </div>
                <div className="rounded-2xl border border-border bg-background/70 p-4">
                  <p className="text-2xl font-black text-primary">10K+</p>
                  <p className="mt-1 text-xs text-muted-foreground">API reads/day</p>
                </div>
              </div>
            </aside>

            <div className="relative space-y-6 before:absolute before:left-4 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-border md:before:block">
              {experience.map((item, index) => (
                <article key={`${item.company}-${item.period}`} className="relative md:pl-12">
                  <div className="absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_24px_rgba(124,58,237,0.25)] md:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>

                  <div className="premium-card card-hover overflow-hidden p-0 text-left">
                    <div className="flex flex-col gap-5 border-b border-border bg-secondary/30 p-6 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="mb-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          {index === 0 ? "Current role" : `Experience 0${index + 1}`}
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">{item.role}</h3>
                        <p className="mt-1 text-lg font-semibold text-primary">{item.company}</p>
                      </div>
                      <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 lg:min-w-64 lg:grid-cols-1 lg:text-right">
                        <span className="inline-flex items-center gap-2 lg:justify-end"><CalendarDays className="h-4 w-4 text-primary" />{item.period}</span>
                        <span className="inline-flex items-center gap-2 lg:justify-end"><MapPin className="h-4 w-4 text-primary" />{item.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 p-6 text-sm leading-6 text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
