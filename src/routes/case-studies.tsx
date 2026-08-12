import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section, SectionHead, CtaBand } from "@/components/site/ui";
import { BASE_URL } from "@/lib/site-content";

const TITLE = "Marvex Agency Case Studies | Local Business Growth";
const DESC =
  "Concept and demo projects showing how Marvex Agency structures websites, Google Business Profiles, reputation systems and lead follow-up for local businesses.";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/case-studies` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/case-studies` }],
  }),
  component: CaseStudies,
});

const DEMOS = [
  {
    t: "Independent car dealership",
    problem: "Stock listings were hard to browse on mobile and enquiries arrived with no reply until the next morning.",
    built: "Mobile-first stock pages, finance and part-exchange enquiry forms, instant acknowledgement and a follow-up sequence for test-drive requests.",
  },
  {
    t: "Neighbourhood restaurant",
    problem: "Menu locked inside a PDF, incorrect holiday hours on Google and customer photos dominating the profile.",
    built: "Fast mobile menu pages, a maintained Google Business Profile with owner photos and posts, plus a post-visit review routine.",
  },
  {
    t: "Emergency plumbing business",
    problem: "Call-outs were missed while the team was on site and quotes were never chased.",
    built: "Emergency-first layout with tap-to-call and WhatsApp, automated first response and a two-step quote follow-up.",
  },
  {
    t: "Barbershop group",
    problem: "Bookings only through direct messages and quiet mid-week slots.",
    built: "Booking-first pages, stylist profiles and gallery, appointment reminders and rebooking nudges for past clients.",
  },
];

function CaseStudies() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Case studies"
        h1={
          <>
            What We&rsquo;ve <span className="text-gradient">Built</span>
          </>
        }
        sub="We publish demo projects while our client work is under way. Every example below is clearly labelled — we don't manufacture results."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Case Studies" }]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {DEMOS.map((d) => (
            <article key={d.t} className="glass rounded-2xl p-7">
              <span className="glass inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Concept / demo project — not a client result
              </span>
              <h2 className="mt-5 text-xl font-semibold">{d.t}</h2>
              <p className="mt-4 text-sm">
                <span className="font-semibold">Problem: </span>
                <span className="text-muted-foreground">{d.problem}</span>
              </p>
              <p className="mt-3 text-sm">
                <span className="font-semibold">What we'd build: </span>
                <span className="text-muted-foreground">{d.built}</span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Our standard"
          title="Real results only"
          sub="Once client work is live and measured, case studies will show the business type, what wasn't working, what we changed, what was implemented and the measurable outcome — with evidence."
        />
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}
