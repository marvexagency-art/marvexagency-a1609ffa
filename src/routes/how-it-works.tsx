import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section, PrimaryLink, CtaBand, RelatedLinks } from "@/components/site/ui";
import { BASE_URL } from "@/lib/site-content";

const TITLE = "How Marvex Works | Local Business Growth Systems";
const DESC =
  "See how Marvex analyzes your current customer journey, builds the right digital systems and helps improve your local business growth process.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/how-it-works` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/how-it-works` }],
  }),
  component: HowItWorks,
});

const STEPS = [
  { t: "Understand", b: "We learn about your business, customers, current marketing and existing systems." },
  { t: "Identify", b: "We identify gaps in visibility, trust, conversion or follow-up." },
  { t: "Build", b: "We create or improve the systems your business actually needs." },
  { t: "Launch", b: "We put the system into operation." },
  { t: "Improve", b: "We monitor performance and improve the parts that aren't working well." },
];

function HowItWorks() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="How it works"
        h1={
          <>
            A Simple Process. <span className="text-gradient">No Marketing Jargon.</span>
          </>
        }
        sub="We start by looking at how customers currently find, judge and contact your business — then fix the weakest link first."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "How It Works" }]}
      >
        <PrimaryLink to="/contact">Start With a Free Assessment</PrimaryLink>
      </PageHero>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <div key={s.t} className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <span className="text-3xl font-bold text-gradient">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 text-lg font-semibold">{s.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <RelatedLinks
        links={[
          { to: "/website-design", label: "Website Design" },
          { to: "/google-business-profile-management", label: "Google Business Profile" },
          { to: "/reputation-management", label: "Reputation Management" },
          { to: "/ai-lead-automation", label: "AI Lead Automation" },
        ]}
      />
      <CtaBand />
    </SiteLayout>
  );
}
