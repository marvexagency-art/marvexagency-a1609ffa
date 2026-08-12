import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePage } from "@/components/site/ServicePage";
import { BASE_URL } from "@/lib/site-content";

const TITLE = "Online Reputation Management for Local Businesses | Marvex";
const DESC = "Build a stronger online reputation with genuine review requests, review monitoring, professional responses and customer feedback systems.";

export const Route = createFileRoute("/reputation-management")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/reputation-management` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/reputation-management` }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ServicePage
        eyebrow={"Reputation"}
        h1={"Build a Reputation Customers Can Trust"}
        intro={"Customers often compare reviews before contacting a local business. We help create a structured process for monitoring, requesting and responding to genuine customer feedback."}
        breadcrumb={"Reputation Management"}
        cta={"Explore Reputation Management"}
        why={{ title: "Why reviews decide the shortlist", body: ["Most people don't read every review. They look at the recent ones, the response to the bad ones, and how many there are in total.", "A steady stream of genuine, recent feedback signals an active, confident business. Silence after a complaint signals the opposite.", "We build the routine: ask at the right moment, monitor what appears, respond professionally, and escalate problems internally before they become public."] }}
        features={{ title: "What's included", items: ["Review monitoring", "Review response management", "Genuine review-request systems", "Customer feedback workflows", "Negative-feedback escalation", "Reputation reporting", "Review trend tracking"] }}
        flow={{ label: "Feedback loop", steps: ["Job completed", "Review request sent", "Feedback received", "Response published", "Issues escalated internally"] }}
        note={"We never recommend fake reviews or fabricated customer experiences."}
        process={[{"title": "Understand", "body": "We review your current setup, customers and the enquiries you're already getting."}, {"title": "Plan", "body": "We agree the scope, priorities and what success looks like in plain terms."}, {"title": "Build", "body": "We implement the work and review it with you before it goes live."}, {"title": "Improve", "body": "We monitor performance and refine the parts that aren't working well."}]}
        faqs={[{"q": "Do you write fake reviews?", "a": "No. We only build genuine customer feedback processes."}, {"q": "How do you handle negative reviews?", "a": "With a professional public response and an internal escalation process so the underlying issue gets addressed."}, {"q": "When should reviews be requested?", "a": "Shortly after a completed job or visit, while the experience is fresh."}, {"q": "Which platforms do you monitor?", "a": "Google primarily, plus the platforms that matter in your industry."}]}
        related={[{"to": "/google-business-profile-management", "label": "Google Business Profile"}, {"to": "/website-design", "label": "Website Design"}, {"to": "/ai-lead-automation", "label": "AI Automation"}, {"to": "/blog", "label": "Review articles"}]}
      />
    </SiteLayout>
  );
}
