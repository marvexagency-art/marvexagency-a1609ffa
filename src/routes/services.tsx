import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section, CtaBand } from "@/components/site/ui";
import { SERVICES, BASE_URL } from "@/lib/site-content";

const TITLE = "Local Business Digital Marketing Services | Marvex Agency";
const DESC =
  "Explore Marvex Agency's website design, Google Business Profile, reputation management and AI lead automation services for local businesses.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/services` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/services` }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        h1={
          <>
            Everything Your Local Business Needs to Turn Online Attention Into{" "}
            <span className="text-gradient">Customers</span>
          </>
        }
        sub="Four connected growth areas. Start with the one that is costing you the most enquiries."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.key}
              to={s.path as never}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-15 blur-3xl transition-opacity group-hover:opacity-30" />
              <h2 className="text-xl font-semibold">{s.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{s.blurb}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {s.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}
