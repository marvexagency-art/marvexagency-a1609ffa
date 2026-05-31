import React, { useState } from "react";
import { z } from "zod";
import { Calendar, MessageCircle, Mail, Phone, Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  business: z.string().trim().min(1, "Business required").max(120),
  message: z.string().trim().min(1, "Tell us briefly").max(1000),
});

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-hero" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="glass inline-block rounded-full px-3 py-1 text-xs text-muted-foreground">
            What to do next
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready To Grow Your <span className="text-gradient">Business Smarter?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stop losing leads and wasting ad spend. Let&rsquo;s build a system that brings you more
            customers consistently.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Booking CTA */}
          <div className="glass-strong relative overflow-hidden rounded-3xl p-7 md:p-9">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
            <h3 className="text-2xl font-semibold">Book a Free Strategy Call</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              30 minutes. We audit your current ads & funnel, then map the system that will
              consistently book you more jobs.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href="https://calendly.com/marvexagency"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                <Calendar className="h-4 w-4" /> Book Free Strategy Call
              </a>
              <a
                href="https://wa.me/19082671457"
                target="_blank" rel="noopener noreferrer"
                className="glass inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-4 w-4 text-accent" /> Chat On WhatsApp
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm">
              <a href="tel:+13152772465" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <Phone className="h-4 w-4 text-accent" /> +1 315 277 2465
              </a>
              <a href="mailto:marvexagency@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4 text-accent" /> marvexagency@gmail.com
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-7 md:p-9">
            <h3 className="text-2xl font-semibold">Get Your Free Audit</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your business — we&rsquo;ll reply within one business day.
            </p>

            {sent ? (
              <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/50 p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-accent" />
                <p className="text-base font-semibold">Thanks — we got it.</p>
                <p className="text-sm text-muted-foreground">
                  We&rsquo;ll reach out shortly with your free audit.
                </p>
              </div>
            ) : (
              <div className="mt-6 grid gap-3">
                <Field name="name" label="Your name" error={errors.name} />
                <Field name="email" type="email" label="Email" error={errors.email} />
                <Field name="business" label="Business name" error={errors.business} />
                <Field name="message" label="What do you need help with?" textarea error={errors.message} />
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" /> Get Free Audit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, type = "text", textarea, error,
}: { name: string; label: string; type?: string; textarea?: boolean; error?: string }) {
  const id = React.useId();
  const cls =
    "w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea id={id} name={name} rows={4} className={cls} placeholder="Briefly describe your goals…" />
      ) : (
        <input id={id} name={name} type={type} className={cls} placeholder={label} />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
