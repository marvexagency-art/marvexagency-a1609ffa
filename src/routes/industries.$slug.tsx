import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import {
  PageHero,
  Section,
  SectionHead,
  FeatureList,
  PrimaryLink,
  CtaBand,
  RelatedLinks,
} from "@/components/site/ui";
import { INDUSTRIES, SERVICES, BASE_URL } from "@/lib/site-content";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = INDUSTRIES.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Industry not found | Marvex Agency" }, { name: "robots", content: "noindex" }] };
    }
    const { industry } = loaderData;
    const url = `${BASE_URL}/industries/${params.slug}`;
    return {
      meta: [
        { title: industry.title },
        { name: "description", content: industry.description },
        { property: "og:title", content: industry.title },
        { property: "og:description", content: industry.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={industry.name}
        h1={industry.h1}
        sub={industry.intro}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: industry.name },
        ]}
      >
        <PrimaryLink to="/contact">Get a Free Local Growth Assessment</PrimaryLink>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead center={false} eyebrow="What usually goes wrong" title="Where enquiries get lost" />
            <div className="mt-6">
              <FeatureList items={industry.challenges} columns={1} />
            </div>
          </div>
          <div>
            <SectionHead center={false} eyebrow="Our focus" title="What we'd build first" />
            <div className="mt-6">
              <FeatureList items={industry.focus} columns={1} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead center={false} eyebrow="Services" title="The four areas we connect" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.key} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
            </div>
          ))}
        </div>
      </Section>

      <RelatedLinks
        links={[
          ...SERVICES.map((s) => ({ to: s.path, label: s.short })),
          { to: "/case-studies", label: "Case Studies" },
          { to: "/blog", label: "Resources" },
          { to: "/contact", label: "Contact" },
        ]}
      />
      <CtaBand />
    </SiteLayout>
  );
}
