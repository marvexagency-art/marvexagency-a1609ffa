import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section, SectionHead, CtaBand, RelatedLinks } from "@/components/site/ui";
import { BASE_URL } from "@/lib/site-content";

const TITLE = "About Marvex Agency | Local Business Growth";
const DESC =
  "Marvex Agency builds practical digital systems that help local businesses get found, build trust, capture enquiries and follow up properly.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/about` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/about` }],
  }),
  component: About,
});

const BLOCKS = [
  {
    t: "Who we are",
    b: "Marvex Agency is a small, focused team building digital growth systems for businesses that depend on local customers — the kind of business where an unanswered enquiry is a lost job.",
  },
  {
    t: "The problem we solve",
    b: "Most local businesses don't have a marketing problem in isolation. They have disconnected parts: a website nobody contacts, a Google profile nobody maintains, reviews nobody asks for and enquiries nobody follows up.",
  },
  {
    t: "Why we started",
    b: "We kept seeing good businesses lose customers to competitors who were simply easier to find and quicker to reply. That is a systems problem, not a talent problem.",
  },
  {
    t: "Our philosophy",
    b: "Fix the weakest link first. A better website won't help if nobody can find you, and better visibility won't help if enquiries go unanswered.",
  },
  {
    t: "Our approach",
    b: "Understand your current journey, identify the gaps, build only what is needed, launch it, then measure and improve it.",
  },
  {
    t: "What we don't promise",
    b: "No guaranteed rankings, no fake reviews, no invented results, no bloated software you'll never use.",
  },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Marvex"
        h1={
          <>
            We Build Systems That Help Local Businesses{" "}
            <span className="text-gradient">Grow Online</span>
          </>
        }
        sub="Practical digital growth work for businesses that live on enquiries, calls, bookings and visits."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.map((b) => (
            <div key={b.t} className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold">{b.t}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{b.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <SectionHead center={false} eyebrow="Our commitment" title="What clients can expect" />
          <p className="mt-5 max-w-3xl text-sm text-muted-foreground">
            We don't promise overnight rankings, guaranteed sales or unrealistic results. We focus
            on building systems that can be measured, improved and connected to real business
            goals — with clear scope, clear reporting and honest answers about what is and isn't
            working.
          </p>
        </div>
      </Section>

      <RelatedLinks
        links={[
          { to: "/how-it-works", label: "How It Works" },
          { to: "/services", label: "Services" },
          { to: "/case-studies", label: "Case Studies" },
          { to: "/contact", label: "Contact" },
        ]}
      />
      <CtaBand />
    </SiteLayout>
  );
}
