import React, { useId, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { CheckCircle2, Mail, MessageCircle, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/ui";
import { BASE_URL, CONTACT, SERVICES } from "@/lib/site-content";

const TITLE = "Contact Marvex Agency | Local Business Growth";
const DESC =
  "Request a free local growth assessment. Tell us about your business and we'll review your website, Google presence, reviews and lead follow-up.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/contact` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/contact` }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  business: z.string().trim().min(1, "Business name required").max(120),
  website: z.string().trim().max(200).optional(),
  industry: z.string().trim().max(120).optional(),
  location: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(1, "WhatsApp or phone required").max(40),
  challenge: z.string().trim().min(1, "Tell us briefly").max(1000),
  service: z.string().trim().min(1),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        h1={
          <>
            Let&rsquo;s Look at Your <span className="text-gradient">Customer Journey</span>
          </>
        }
        sub="Tell us what your business does and where enquiries are being lost. We'll review it and come back with what to fix first."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="glass-strong shadow-card rounded-3xl p-7 md:p-9">
            {sent ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <h2 className="mt-5 text-2xl font-semibold">Request received</h2>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks — we'll review your customer journey and get back to you. For anything
                  urgent, message us on WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h2 className="text-2xl font-semibold">Request My Free Assessment</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" error={errors.name} />
                  <Field label="Business name" name="business" error={errors.business} />
                  <Field label="Website (optional)" name="website" error={errors.website} />
                  <Field label="Industry" name="industry" error={errors.industry} />
                  <Field label="Location" name="location" error={errors.location} />
                  <Field label="Email" name="email" type="email" error={errors.email} />
                  <Field label="WhatsApp / phone" name="phone" error={errors.phone} />
                  <SelectField
                    label="Which service are you interested in?"
                    name="service"
                    options={[...SERVICES.map((s) => s.short), "Not sure yet"]}
                  />
                  <div className="sm:col-span-2">
                    <Field label="Main challenge" name="challenge" textarea error={errors.challenge} />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                >
                  Request My Free Assessment
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="glass rounded-3xl p-7">
              <h2 className="text-lg font-semibold">Prefer to talk first?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Message us and we'll ask a few quick questions about your current customer journey.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp Marvex —{" "}
                  {CONTACT.whatsappLabel}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="glass inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Mail className="h-4 w-4 text-accent" /> {CONTACT.email}
                </a>
              </div>
            </div>
            <div className="glass rounded-3xl p-7 text-sm text-muted-foreground">
              We don't promise overnight rankings, guaranteed sales or unrealistic results. The
              assessment is a straight review of what's working and what isn't.
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const id = useId();
  const cls =
    "mt-1.5 w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      {textarea ? (
        <textarea id={id} name={name} rows={4} className={cls} />
      ) : (
        <input id={id} name={name} type={type} className={cls} />
      )}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={options[0]}
        className="mt-1.5 w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-accent"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-card">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
