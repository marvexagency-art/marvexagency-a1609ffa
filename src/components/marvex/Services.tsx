import {
  Brain, Bot, Magnet, Send, Filter, Facebook, Search,
  Database, CalendarCheck, MessageCircle, Mail, LayoutTemplate,
  Target, RotateCcw, ArrowRight,
} from "lucide-react";

const services = [
  { icon: Brain, title: "AI Marketing", desc: "Smart campaigns powered by AI to reach the right local customers." },
  { icon: Bot, title: "AI Automation", desc: "Replace manual work with intelligent workflows that run 24/7." },
  { icon: Magnet, title: "AI Lead Generation", desc: "Predictable inbound leads from people ready to book." },
  { icon: Send, title: "AI Follow-Up Systems", desc: "Auto-reply within seconds and nurture leads to booked jobs." },
  { icon: Filter, title: "Funnel Optimization", desc: "Plug the leaks in your funnel and convert more clicks to calls." },
  { icon: Facebook, title: "Facebook Ads", desc: "Conversion-focused Meta ads tuned for local service businesses." },
  { icon: Search, title: "Google Ads", desc: "High-intent search ads that bring customers ready to buy." },
  { icon: Database, title: "CRM Automation", desc: "Organize leads, tag, score and route them automatically." },
  { icon: CalendarCheck, title: "Appointment Booking", desc: "Let customers self-book — synced to your calendar 24/7." },
  { icon: MessageCircle, title: "WhatsApp Automation", desc: "Instant WhatsApp replies and follow-ups that close jobs." },
  { icon: Mail, title: "Email & SMS Automation", desc: "Multi-channel sequences that re-engage and convert." },
  { icon: LayoutTemplate, title: "Landing Pages", desc: "High-converting pages built for local service offers." },
  { icon: Target, title: "Conversion Optimization", desc: "Data-driven tweaks that lift booked-job rates fast." },
  { icon: RotateCcw, title: "Lead Reactivation", desc: "Wake up your old leads and turn them into new revenue." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-hero" />
      <div className="mx-auto max-w-7xl px-4">
        <Header />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>

        <div className="glass mt-14 rounded-2xl p-6 text-center md:p-8">
          <p className="text-lg font-medium md:text-xl">
            We don&rsquo;t just run ads. <br className="sm:hidden" />
            <span className="text-gradient">We build systems that turn leads into booked customers.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="glass inline-block rounded-full px-3 py-1 text-xs text-muted-foreground">
        What we do
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        What We Actually <span className="text-gradient">Help You Fix</span>
      </h2>
      <p className="mt-4 text-muted-foreground">
        Full-stack AI growth systems — ads, funnels, automation and follow-up — engineered to book more jobs.
      </p>
    </div>
  );
}

function ServiceCard({
  icon: Icon, title, desc, index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string; desc: string; index: number;
}) {
  return (
    <div
      className="group glass relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:ring-brand"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
      <div className="bg-gradient-card grid h-11 w-11 place-items-center rounded-xl border border-border">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <h3 className="mt-4 text-base font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
      <a
        href="#contact"
        className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-foreground/80 transition-colors hover:text-accent"
        aria-label={`Learn more about ${title}`}
      >
        Learn more about {title} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
