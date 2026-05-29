import { ArrowRight, Sparkles, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-30 blur-3xl animate-pulse-slow" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              AI-powered growth systems for local businesses
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Stop Wasting Money On <br className="hidden sm:inline" />
              <span className="text-gradient">Ads That Don&rsquo;t</span> Bring Customers
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Marvex Agency helps local businesses generate more leads, automate follow-ups,
              and book more jobs using AI-powered marketing systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Get Free Audit
              </a>
            </div>

            <p className="mt-6 max-w-lg text-sm text-muted-foreground">
              Helping local businesses grow smarter with AI automation, lead generation,
              and conversion systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              {["No long contracts", "ROI-focused", "Local business specialists"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* glow */}
      <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />

      <div className="glass-strong shadow-card relative rounded-3xl p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-semibold">Marvex AI Dashboard</p>
              <p className="text-[10px] text-muted-foreground">Live • Lead pipeline</p>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-destructive/70" />
            <span className="h-2 w-2 rounded-full bg-accent/80" />
            <span className="h-2 w-2 rounded-full bg-primary/80" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { l: "Leads", v: "1,284", d: "+247%" },
            { l: "CPL", v: "$8.40", d: "-42%" },
            { l: "Booked", v: "317", d: "+3x" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border bg-secondary/50 p-3">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
              <p className="mt-1 text-lg font-bold">{s.v}</p>
              <p className="text-[10px] font-medium text-accent">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium">Lead growth</p>
            <span className="inline-flex items-center gap-1 text-[10px] text-accent">
              <TrendingUp className="h-3 w-3" /> +247%
            </span>
          </div>
          <svg viewBox="0 0 300 100" className="mt-3 h-24 w-full">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.16 230)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.72 0.16 230)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="g2" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.62 0.20 290)" />
                <stop offset="100%" stopColor="oklch(0.78 0.15 190)" />
              </linearGradient>
            </defs>
            <path
              d="M0,80 C40,70 60,60 90,55 C130,48 150,40 180,28 C220,14 250,18 300,8 L300,100 L0,100 Z"
              fill="url(#g1)"
            />
            <path
              d="M0,80 C40,70 60,60 90,55 C130,48 150,40 180,28 C220,14 250,18 300,8"
              fill="none"
              stroke="url(#g2)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* mini rows */}
        <div className="mt-4 space-y-2">
          {[
            { n: "Plumbing lead — booked", t: "2m ago" },
            { n: "HVAC follow-up sent", t: "5m ago" },
            { n: "Roofing estimate confirmed", t: "12m ago" },
          ].map((r) => (
            <div key={r.n} className="flex items-center justify-between rounded-lg bg-secondary/40 px-3 py-2 text-xs">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {r.n}
              </span>
              <span className="text-muted-foreground">{r.t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating card */}
      <div className="glass shadow-card animate-float absolute -left-6 bottom-10 hidden rounded-2xl p-3 sm:block">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">ROI</p>
        <p className="text-xl font-bold text-gradient">4.8x</p>
      </div>
      <div
        className="glass shadow-card animate-float absolute -right-4 top-12 hidden rounded-2xl p-3 sm:block"
        style={{ animationDelay: "1.5s" }}
      >
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Response</p>
        <p className="text-xl font-bold text-gradient">&lt;2 min</p>
      </div>
    </div>
  );
}
