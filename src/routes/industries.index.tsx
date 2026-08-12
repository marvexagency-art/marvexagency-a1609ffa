import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section, CtaBand } from "@/components/site/ui";
import { INDUSTRIES, BASE_URL } from "@/lib/site-content";

const TITLE = "Industries We Help | Local Business Growth | Marvex Agency";
const DESC =
  "Websites, Google Business Profile management, reputation systems and lead follow-up built around specific local industries.";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries` }],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        h1={
          <>
            Built for Businesses That Depend on{" "}
            <span className="text-gradient">Local Customers</span>
          </>
        }
        sub="Every local industry has a different customer journey. Pick yours to see what we'd focus on first."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <Link
              key={i.slug}
              to="/industries/$slug"
              params={{ slug: i.slug }}
              className="glass group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <h2 className="text-lg font-semibold">{i.name}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{i.intro}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                View {i.name}
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
