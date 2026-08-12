import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="glass inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function PrimaryLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to as never}
      className={`group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function GhostLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to as never}
      className={`glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary ${className}`}
    >
      {children}
    </Link>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.to ? (
              <Link to={item.to as never} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="h-3 w-3" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  h1,
  sub,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  h1: ReactNode;
  sub?: ReactNode;
  breadcrumbs?: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
            {h1}
          </h1>
          {sub && <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{sub}</p>}
          {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function FeatureList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 | 3 }) {
  const cols = columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "";
  return (
    <ul className={`grid gap-3 ${cols}`}>
      {items.map((f) => (
        <li key={f} className="glass flex items-start gap-3 rounded-xl px-4 py-3 text-sm">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <span className="text-muted-foreground">{f}</span>
        </li>
      ))}
    </ul>
  );
}

export function StepFlow({ steps, label }: { steps: string[]; label?: string }) {
  return (
    <div className="glass-strong shadow-card rounded-3xl p-6 md:p-8">
      {label && (
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      )}
      <ol className="mt-5 space-y-2">
        {steps.map((s, i) => (
          <li key={s}>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-brand text-[11px] font-bold text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-auto h-4 w-px bg-gradient-to-b from-accent/60 to-transparent" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-3">
      {items.map((f) => (
        <details key={f.q} className="glass group rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold">
            {f.q}
            <ChevronRight className="h-4 w-4 shrink-0 text-accent transition-transform group-open:rotate-90" />
          </summary>
          <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Ready to Improve Your Local Customer Journey?",
  sub = "We'll review your website, Google presence, reviews and follow-up process, then tell you what actually needs fixing first.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <Section>
      <div className="glass-strong shadow-card relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-12">
        <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">{sub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryLink to="/contact">Get a Free Local Growth Assessment</PrimaryLink>
          <a
            href="https://wa.me/2348165010990"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            WhatsApp Marvex
          </a>
        </div>
      </div>
    </Section>
  );
}

export function RelatedLinks({
  title = "Related pages",
  links,
}: {
  title?: string;
  links: { to: string; label: string }[];
}) {
  return (
    <Section>
      <p className="text-sm font-semibold">{title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map((l) => (
          <Link
            key={l.to + l.label}
            to={l.to as never}
            className="glass inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {l.label}
            <ArrowRight className="h-3.5 w-3.5 text-accent" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
