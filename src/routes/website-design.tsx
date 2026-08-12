import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePage } from "@/components/site/ServicePage";
import { BASE_URL } from "@/lib/site-content";

const TITLE = "Local Business Website Design Services | Marvex Agency";
const DESC = "Professional website design for local businesses focused on trust, enquiries, mobile usability and conversions.";

export const Route = createFileRoute("/website-design")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/website-design` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/website-design` }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ServicePage
        eyebrow={"Website design"}
        h1={"Website Design That Turns Visitors Into Enquiries"}
        intro={"A local business website should make it easy for potential customers to understand what you offer, trust your business and take the next step."}
        breadcrumb={"Website Design"}
        cta={"Request a Website Assessment"}
        why={{ title: "Why local businesses need a conversion-focused website", body: ["Most local visitors arrive on a phone, with a specific question and very little patience. If the answer isn't obvious within a few seconds, they go back to the search results.", "We design around the decision, not the decoration: what you do, where you work, why you can be trusted, and how to contact you right now.", "Every page is built to lead somewhere \u2014 a call, a WhatsApp message, a form or a booking."] }}
        features={{ title: "What we build", items: ["Mobile-first design", "Conversion-focused layouts", "WhatsApp integration", "Lead forms", "Appointment booking", "Google Maps integration", "Review sections", "Service pages", "Local SEO structure", "Fast-loading pages", "Clear calls-to-action", "Portfolio and demo work"] }}
        flow={{ label: "Visitor path", steps: ["Lands on the page", "Understands the offer", "Sees proof and reviews", "Contacts you", "Gets an instant reply"] }}
        note={undefined}
        process={[{"title": "Understand", "body": "We review your current setup, customers and the enquiries you're already getting."}, {"title": "Plan", "body": "We agree the scope, priorities and what success looks like in plain terms."}, {"title": "Build", "body": "We implement the work and review it with you before it goes live."}, {"title": "Improve", "body": "We monitor performance and refine the parts that aren't working well."}]}
        faqs={[{"q": "How long does a website take?", "a": "Most local business sites take two to four weeks depending on content, pages and how quickly we get photos and information."}, {"q": "Can you improve my existing website?", "a": "Yes. If the foundation is sound we improve structure, speed and conversion rather than rebuilding from scratch."}, {"q": "Do you write the content?", "a": "We draft it with you. You know your customers; we shape it so it answers their questions."}, {"q": "Will it work on mobile?", "a": "Mobile is the primary design target, not an afterthought."}]}
        related={[{"to": "/google-business-profile-management", "label": "Google Business Profile"}, {"to": "/blog", "label": "Local SEO articles"}, {"to": "/industries", "label": "Industry pages"}, {"to": "/contact", "label": "Contact"}]}
      />
    </SiteLayout>
  );
}
