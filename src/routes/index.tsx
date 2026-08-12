import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  MapPin,
  Globe,
  MessageSquare,
  Zap,
  CalendarCheck,
  UserCheck,
  ArrowRight,
  EyeOff,
  Frown,
  ShieldAlert,
  PhoneOff,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import {
  Section,
  SectionHead,
  Eyebrow,
  PrimaryLink,
  GhostLink,
  FeatureList,
  FaqList,
  CtaBand,
} from "@/components/site/ui";
import { SERVICES, INDUSTRIES, FAQS, BASE_URL } from "@/lib/site-content";
import heroBg from "@/assets/hero-bg.jpg";

const TITLE = "Marvex Agency | Website Design, Google Maps & Local Growth";
const DESC =
  "Marvex Agency helps local businesses improve their websites, Google Business Profile visibility, online reputation and lead follow-up.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${BASE_URL}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Marvex Agency",
          url: `${BASE_URL}/`,
          description: DESC,
          sameAs: [
            "https://www.facebook.com/share/18iGZchMPC/",
            "https://www.instagram.com/mar.vexagen_cy/",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const JOURNEY = [
  { icon: Search, label: "Google Search" },
  { icon: MapPin, label: "Business Profile" },
  { icon: Globe, label: "Website" },
  { icon: MessageSquare, label: "Enquiry" },
  { icon: Zap, label: "Instant Follow-Up" },
  { icon: CalendarCheck, label: "Appointment" },
  { icon: UserCheck, label: "Customer" },
];

const PROBLEMS = [
  {
    icon: EyeOff,
    title: "Hard to Find",
    body: "Your business isn't appearing where local customers are searching.",
  },
  {
    icon: Frown,
    title: "Weak First Impression",
    body: "Your website doesn't immediately communicate why someone should choose you.",
  },
  {
    icon: ShieldAlert,
    title: "Lack of Trust",
    body: "Customers see too few reviews or unanswered feedback.",
  },
  {
    icon: PhoneOff,
    title: "Lost Enquiries",
    body: "Potential customers contact you but don't receive a fast or consistent follow-up.",
  },
];

const SYSTEM = [
  { n: "01", title: "Get Found", body: "Google Business Profile + local visibility" },
  { n: "02", title: "Get Trusted", body: "Reviews + reputation + professional website" },
  { n: "03", title: "Get Contacted", body: "Website + WhatsApp + forms + calls" },
  { n: "04", title: "Follow Up", body: "Automated responses + lead nurturing" },
  { n: "05", title: "Get Booked", body: "Appointment scheduling + qualification" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/75 to-background" />
          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-25 blur-3xl animate-pulse-slow" />
        </div>

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <Eyebrow>Digital growth for local businesses</Eyebrow>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Get Found. Build Trust.{" "}
                <span className="text-gradient">Turn More Visitors Into Customers.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Marvex Agency helps local businesses build better websites, improve their Google
                Business Profile presence, strengthen their online reputation and follow up with
                leads using practical automation.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PrimaryLink to="/contact">Get a Free Local Growth Assessment</PrimaryLink>
                <GhostLink to="/how-it-works">See How It Works</GhostLink>
              </div>
              <p className="mt-6 max-w-lg text-sm text-muted-foreground">
                No complicated jargon. No unnecessary software. Just practical systems designed
                around your business.
              </p>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
              <JourneyVisual />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section>
        <SectionHead
          eyebrow="The gap"
          title={
            <>
              Your Business May Be Losing Customers{" "}
              <span className="text-gradient">Before They Contact You</span>
            </>
          }
          sub="A potential customer can discover your business and still never become a customer."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/60">
                <p.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <GhostLink to="/services">See How Marvex Fixes the Gaps</GhostLink>
        </div>
      </Section>

      {/* SOLUTION */}
      <Section id="services">
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              One System. <span className="text-gradient">Four Growth Areas.</span>
            </>
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.key}
              to={s.path as never}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-15 blur-3xl transition-opacity group-hover:opacity-30" />
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.blurb}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {s.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* THE MARVEX SYSTEM */}
      <Section>
        <SectionHead
          eyebrow="The Marvex system"
          title={
            <>
              From Google Search to <span className="text-gradient">Paying Customer</span>
            </>
          }
          sub="Marvex connects the important parts of your customer journey instead of treating marketing as separate pieces."
        />
        <div className="relative mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          {SYSTEM.map((s) => (
            <div key={s.n} className="glass rounded-2xl p-6">
              <span className="text-3xl font-bold text-gradient">{s.n}</span>
              <h3 className="mt-4 text-base font-semibold uppercase tracking-wide">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WEBSITE DESIGN */}
      <HomeServiceBlock
        eyebrow="Website design"
        title="Your Website Should Do More Than Look Good"
        copy="A local business website should make it easy for potential customers to understand what you offer, trust your business and take the next step."
        items={[
          "Mobile-first design",
          "Conversion-focused layouts",
          "WhatsApp integration",
          "Lead forms",
          "Appointment booking",
          "Google Maps integration",
          "Review sections",
          "Service pages",
          "Local SEO structure",
          "Fast-loading pages",
          "Clear calls-to-action",
        ]}
        to="/website-design"
        cta="Explore Website Design"
      />

      {/* GOOGLE BUSINESS PROFILE */}
      <HomeServiceBlock
        eyebrow="Google Business Profile"
        title="Be Easier to Find When Local Customers Search"
        copy="Your Google Business Profile is often one of the first places potential customers encounter your business. Marvex helps businesses maintain a complete, accurate and customer-focused profile."
        items={[
          "Business Profile optimization",
          "Category review",
          "Services setup",
          "Business information optimization",
          "Photos and media strategy",
          "Google Posts",
          "Q&A management",
          "Review monitoring",
          "Local search optimization",
          "Performance tracking",
        ]}
        to="/google-business-profile-management"
        cta="Explore Google Maps Management"
        reverse
      />

      {/* REPUTATION */}
      <HomeServiceBlock
        eyebrow="Reputation"
        title="Turn Customer Experiences Into Trust"
        copy="Customers often compare reviews before contacting a local business. Marvex helps create a structured process for monitoring, requesting and responding to genuine customer feedback."
        items={[
          "Review monitoring",
          "Review response management",
          "Genuine review-request systems",
          "Customer feedback workflows",
          "Negative-feedback escalation",
          "Reputation reporting",
          "Review trend tracking",
        ]}
        note="We never recommend fake reviews or fabricated customer experiences."
        to="/reputation-management"
        cta="Explore Reputation Management"
      />

      {/* AI AUTOMATION */}
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHead
              center={false}
              eyebrow="AI lead follow-up"
              title="Stop Letting Good Leads Go Cold"
              sub="When a potential customer contacts your business, speed matters. Marvex can connect lead capture, automated responses, qualification, follow-up and booking into one workflow."
            />
            <div className="mt-8">
              <FeatureList
                items={[
                  "Lead capture",
                  "Automated responses",
                  "WhatsApp workflows",
                  "Email/SMS follow-up",
                  "Lead qualification",
                  "Appointment booking",
                  "Missed-lead follow-up",
                  "Lead reactivation",
                  "CRM workflows",
                ]}
                columns={2}
              />
            </div>
            <div className="mt-8">
              <GhostLink to="/ai-lead-automation">Explore AI Automation</GhostLink>
            </div>
          </div>
          <div className="glass-strong shadow-card rounded-3xl p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Follow-up workflow
            </p>
            <ol className="mt-5 space-y-2">
              {[
                "Lead arrives",
                "Instant response",
                "Qualification",
                "Follow-up",
                "Appointment",
                "Human handoff",
              ].map((s, i) => (
                <li key={s}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-brand text-[11px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium">{s}</span>
                  </div>
                  {i < 5 && (
                    <div className="mx-auto h-4 w-px bg-gradient-to-b from-accent/60 to-transparent" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* WHO WE HELP */}
      <Section id="industries">
        <SectionHead
          eyebrow="Who we help"
          title={
            <>
              Built for Businesses That Depend on{" "}
              <span className="text-gradient">Local Customers</span>
            </>
          }
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {INDUSTRIES.map((i) => (
            <Link
              key={i.slug}
              to="/industries/$slug"
              params={{ slug: i.slug }}
              className="glass rounded-2xl px-5 py-4 text-sm font-medium transition-transform hover:-translate-y-1"
            >
              {i.name}
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <GhostLink to="/industries">Find Your Industry</GhostLink>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHead eyebrow="FAQ" title="Questions local businesses ask us" />
        <FaqList items={FAQS} />
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}

function HomeServiceBlock({
  eyebrow,
  title,
  copy,
  items,
  note,
  to,
  cta,
  reverse,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  items: string[];
  note?: string;
  to: string;
  cta: string;
  reverse?: boolean;
}) {
  return (
    <Section>
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
        <div className={reverse ? "lg:order-2" : ""}>
          <SectionHead center={false} eyebrow={eyebrow} title={title} sub={copy} />
          {note && <p className="glass mt-6 rounded-2xl p-4 text-sm text-muted-foreground">{note}</p>}
          <div className="mt-8">
            <GhostLink to={to}>{cta}</GhostLink>
          </div>
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <FeatureList items={items} columns={2} />
        </div>
      </div>
    </Section>
  );
}

function JourneyVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-brand opacity-25 blur-3xl" />
      <div className="glass-strong shadow-card rounded-3xl p-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          One connected customer journey
        </p>
        <ol className="mt-5 space-y-1.5">
          {JOURNEY.map((j, i) => (
            <li key={j.label}>
              <div className="group flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3 transition-colors hover:bg-secondary">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-brand">
                  <j.icon className="h-4 w-4 text-primary-foreground" />
                </span>
                <span className="text-sm font-medium">{j.label}</span>
              </div>
              {i < JOURNEY.length - 1 && (
                <div className="ml-8 h-3 w-px bg-gradient-to-b from-accent/70 to-transparent" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
