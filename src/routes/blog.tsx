import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section, CtaBand } from "@/components/site/ui";
import { BLOG_CLUSTERS, BASE_URL } from "@/lib/site-content";

const TITLE = "Local Business Growth Resources | Marvex Agency";
const DESC =
  "Guides on Google Business Profile, local business website design, review management and automated lead follow-up.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/blog` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/blog` }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Resources"
        h1={
          <>
            Practical Guides for <span className="text-gradient">Local Business Growth</span>
          </>
        }
        sub="Plain-language articles on visibility, trust, conversion and follow-up. New guides are published as they're written."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Resources" }]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {BLOG_CLUSTERS.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-7">
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <ul className="mt-5 space-y-3">
                {c.posts.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>
                      {p} <span className="text-xs opacity-70">— coming soon</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}
