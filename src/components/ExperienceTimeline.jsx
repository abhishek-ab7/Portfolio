import { BriefcaseBusiness, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";

export const ExperienceTimeline = () => (
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
        <div key={`${item.company}-${item.period}`} className="relative md:pl-12">
          <div className="absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_24px_rgba(124,58,237,0.25)] md:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          </div>

          <article className="premium-card card-hover overflow-hidden p-0 text-left">
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
          </article>
        </div>
      ))}
    </div>
  </div>
);
