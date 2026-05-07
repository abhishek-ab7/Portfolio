import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { profile, proofMetrics } from "@/data/portfolio";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden px-4 pt-28 pb-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_32%)]" />
      <div className="container grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary shadow-[0_0_40px_rgba(124,58,237,0.18)]">
            <Sparkles className="h-4 w-4" />
            {profile.availability}
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-[-0.05em] text-balance md:text-7xl lg:text-8xl">
            {profile.name}
            <span className="block text-gradient">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {profile.headline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.stack.map((item) => (
              <span key={item} className="rounded-full border border-border bg-card/70 px-3 py-1 text-sm text-foreground/85 backdrop-blur">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="cosmic-button inline-flex items-center justify-center gap-2">
              View case studies <ArrowRight className="h-4 w-4" />
            </a>
            <a href={profile.resume} download className="secondary-button inline-flex items-center justify-center gap-2">
              Download resume <Download className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="ghost-button inline-flex items-center justify-center gap-2">
              Email me <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {profile.location}</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="premium-card overflow-hidden p-6 text-left">
            <div className="mb-5 flex items-center gap-2 border-b border-border pb-4 font-mono text-xs text-muted-foreground">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-2">candidate-profile.json</span>
            </div>
            <pre className="overflow-x-auto text-sm leading-7 text-foreground/90"><code>{`{
  "focus": "Full-stack engineering",
  "systems": ["commerce", "chat", "location"],
  "backend": ["REST", "JWT", "Socket.IO"],
  "database": ["MongoDB", "SQL fundamentals"],
  "proof": "case studies + live demos + GitHub"
}`}</code></pre>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {proofMetrics.map((metric) => (
              <div key={metric.label} className="premium-card p-5 text-left">
                <div className="font-mono text-3xl font-bold text-primary">{metric.value}</div>
                <div className="mt-1 text-sm font-semibold">{metric.label}</div>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
