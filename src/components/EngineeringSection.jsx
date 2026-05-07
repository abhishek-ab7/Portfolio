import { Activity, BookOpen, CheckCircle2, GitBranch, Github, Network } from "lucide-react";
import { engineeringNotes, profile, repoQuality } from "@/data/portfolio";

const codeSnippet = `const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Missing token" });
  req.user = verifyJwt(token);
  return next();
};`;

export const EngineeringSection = () => {
  return (
    <section id="engineering" className="section-padding relative px-4 bg-secondary/30">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Technical proof</p>
          <h2>Engineering artifacts that increase trust.</h2>
          <p>Architecture, code patterns, documentation quality, and GitHub context are surfaced directly instead of hidden behind screenshots.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="premium-card p-7 text-left">
            <div className="mb-5 flex items-center gap-3">
              <Network className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">System architecture pattern</h3>
            </div>
            <div className="grid gap-3 text-sm md:grid-cols-4">
              {["React UI", "REST API", "Auth + Realtime", "MongoDB"].map((node, index) => (
                <div key={node} className="rounded-2xl border border-border bg-background/70 p-4 text-center">
                  <p className="font-mono text-xs text-primary">0{index + 1}</p>
                  <p className="mt-2 font-semibold">{node}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 leading-7 text-muted-foreground">
              Case studies document how data moves through the frontend, API layer, middleware, realtime gateway, and database models. This makes implementation judgment visible to hiring engineers.
            </p>
          </article>

          <article className="premium-card overflow-hidden text-left">
            <div className="border-b border-border p-5 font-mono text-xs text-muted-foreground">auth-middleware.js</div>
            <pre className="overflow-x-auto p-6 text-sm leading-7 text-foreground/90"><code>{codeSnippet}</code></pre>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <article className="premium-card p-6 text-left">
            <Github className="mb-4 h-7 w-7 text-primary" />
            <h3 className="text-xl font-bold">GitHub credibility checklist</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              {repoQuality.map((item) => (
                <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />{item}</li>
              ))}
            </ul>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View GitHub profile <GitBranch className="h-4 w-4" />
            </a>
          </article>

          <article className="premium-card p-6 text-left lg:col-span-2">
            <BookOpen className="mb-4 h-7 w-7 text-primary" />
            <h3 className="text-xl font-bold">Engineering notes for visitor retention</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {engineeringNotes.map((note) => (
                <a key={note.slug} href={note.slug} className="rounded-2xl border border-border bg-background/60 p-4 transition hover:border-primary/60 hover:-translate-y-1">
                  <p className="text-xs text-primary">{note.readTime}</p>
                  <h4 className="mt-2 font-semibold leading-6">{note.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{note.summary}</p>
                </a>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 premium-card p-6 text-left">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-primary"><Activity className="h-5 w-5" /> Live demo readiness</div>
              <p className="mt-2 text-sm text-muted-foreground">Add uptime checks or analytics later to track demo clicks, resume downloads, and case-study retention.</p>
            </div>
            <div className="grid gap-2 text-sm sm:grid-cols-3">
              <span className="rounded-full bg-emerald-500/10 px-3 py-2 text-emerald-300">Build gate</span>
              <span className="rounded-full bg-cyan-500/10 px-3 py-2 text-cyan-300">SEO schema</span>
              <span className="rounded-full bg-violet-500/10 px-3 py-2 text-violet-300">Case studies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
