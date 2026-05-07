import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "@/data/portfolio";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      toast({
        title: "Opening email client",
        description: "EmailJS is not configured, so I prepared a direct email instead.",
      });
      setIsSubmitting(false);
      form.reset();
      return;
    }

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        toast({ title: "Message sent!", description: "Thanks for reaching out. I will respond soon." });
        form.reset();
      })
      .catch(() => {
        toast({ title: "Message not sent", description: "Please email me directly using the contact link." });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="section-padding relative px-4">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Ready for recruiter outreach and engineering conversations.</h2>
          <p>Fast contact options, resume access, and social proof are available without forcing visitors through a form.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="premium-card p-7 text-left">
            <h3 className="text-2xl font-bold">Contact information</h3>
            <div className="mt-6 space-y-5">
              <a href={`mailto:${profile.email}`} className="flex items-start gap-4 rounded-2xl border border-border bg-background/60 p-4 hover:border-primary/60">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <span><span className="block font-semibold">Email</span><span className="text-sm text-muted-foreground">{profile.email}</span></span>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-start gap-4 rounded-2xl border border-border bg-background/60 p-4 hover:border-primary/60">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <span><span className="block font-semibold">Phone</span><span className="text-sm text-muted-foreground">{profile.phone}</span></span>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-background/60 p-4">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <span><span className="block font-semibold">Location</span><span className="text-sm text-muted-foreground">{profile.location}</span></span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="secondary-button inline-flex items-center gap-2 px-4 py-2 text-sm"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="secondary-button inline-flex items-center gap-2 px-4 py-2 text-sm"><Github className="h-4 w-4" /> GitHub</a>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="premium-card p-7 text-left">
            <h3 className="text-2xl font-bold">Send a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">For best response speed, include role, company, location/remote preference, and interview timeline.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Your name
                <input type="text" name="name" required className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 outline-hidden transition focus:ring-2 focus:ring-primary" placeholder="Your name" />
              </label>
              <label className="text-sm font-medium">
                Your email
                <input type="email" name="email" required className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 outline-hidden transition focus:ring-2 focus:ring-primary" placeholder="you@company.com" />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium">
              Message
              <textarea name="message" required rows="6" className="mt-2 w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 outline-hidden transition focus:ring-2 focus:ring-primary" placeholder="Hello Abhishek, I would like to discuss..." />
            </label>
            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button mt-6 inline-flex w-full items-center justify-center gap-2", isSubmitting && "cursor-not-allowed opacity-70")}>
              {isSubmitting ? "Preparing..." : "Send message"} <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
