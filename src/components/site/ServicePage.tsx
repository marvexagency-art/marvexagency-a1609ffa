import {
  PageHero,
  Section,
  SectionHead,
  FeatureList,
  FaqList,
  CtaBand,
  RelatedLinks,
  PrimaryLink,
  StepFlow,
} from "@/components/site/ui";

export type ServicePageProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  breadcrumb: string;
  why: { title: string; body: string[] };
  features: { title: string; items: string[] };
  flow?: { label: string; steps: string[] };
  process: { title: string; body: string }[];
  note?: string;
  faqs: { q: string; a: string }[];
  related: { to: string; label: string }[];
  cta: string;
};

export function ServicePage(p: ServicePageProps) {
  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        h1={p.h1}
        sub={p.intro}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: p.breadcrumb }]}
      >
        <PrimaryLink to="/contact">{p.cta}</PrimaryLink>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHead center={false} title={p.why.title} />
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              {p.why.body.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
            {p.note && (
              <p className="glass mt-6 rounded-2xl p-4 text-sm text-muted-foreground">{p.note}</p>
            )}
          </div>
          {p.flow && <StepFlow label={p.flow.label} steps={p.flow.steps} />}
        </div>
      </Section>

      <Section>
        <SectionHead center={false} eyebrow="What's included" title={p.features.title} />
        <div className="mt-8">
          <FeatureList items={p.features.items} columns={3} />
        </div>
      </Section>

      <Section>
        <SectionHead center={false} eyebrow="Process" title="How we deliver it" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {p.process.map((s, i) => (
            <div key={s.title} className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <span className="text-3xl font-bold text-gradient">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="FAQ" title="Common questions" />
        <FaqList items={p.faqs} />
      </Section>

      <RelatedLinks links={p.related} />
      <CtaBand />
    </>
  );
}
