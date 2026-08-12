import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePage } from "@/components/site/ServicePage";
import { BASE_URL } from "@/lib/site-content";

const TITLE = "AI Lead Follow-Up & Automation for Local Businesses | Marvex";
const DESC = "Automate lead responses, qualification, follow-up and appointment booking with practical AI-powered workflows for local businesses.";

export const Route = createFileRoute("/ai-lead-automation")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/ai-lead-automation` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/ai-lead-automation` }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ServicePage
        eyebrow={"AI lead follow-up"}
        h1={"Turn More Enquiries Into Conversations and Bookings"}
        intro={"When a potential customer contacts your business, speed matters. We connect lead capture, automated responses, qualification, follow-up and booking into one workflow."}
        breadcrumb={"AI Lead Automation"}
        cta={"Explore AI Automation"}
        why={{ title: "The cost of slow follow-up", body: ["A lead that waits an hour for a reply has usually contacted somebody else. Most local businesses lose jobs to response time, not to price.", "Automation isn't about replacing conversations. It's about making sure nobody is left waiting and nothing is forgotten while your team is working.", "Your people still handle the important conversations \u2014 they just start them warmer and sooner."] }}
        features={{ title: "What we set up", items: ["Lead capture", "Automated responses", "WhatsApp workflows", "Email/SMS follow-up", "Lead qualification", "Appointment booking", "Missed-lead follow-up", "Lead reactivation", "CRM workflows"] }}
        flow={{ label: "Workflow", steps: ["Lead arrives", "Instant response", "Qualification", "Follow-up", "Appointment", "Human handoff"] }}
        note={"Automation should reduce repetitive work while allowing your team to handle important customer conversations."}
        process={[{"title": "Understand", "body": "We review your current setup, customers and the enquiries you're already getting."}, {"title": "Plan", "body": "We agree the scope, priorities and what success looks like in plain terms."}, {"title": "Build", "body": "We implement the work and review it with you before it goes live."}, {"title": "Improve", "body": "We monitor performance and refine the parts that aren't working well."}]}
        faqs={[{"q": "Does this replace my staff?", "a": "No. It handles the repetitive first response and follow-up so your team can focus on real conversations."}, {"q": "Does it work with WhatsApp?", "a": "Yes \u2014 WhatsApp is usually the main channel for local enquiries."}, {"q": "Do I need a CRM?", "a": "Not necessarily. We can start simple and add a CRM when volume justifies it."}, {"q": "Will replies sound robotic?", "a": "Messages are written in your tone and reviewed with you before going live."}]}
        related={[{"to": "/website-design", "label": "Website Design"}, {"to": "/reputation-management", "label": "Reputation Management"}, {"to": "/google-business-profile-management", "label": "Google Business Profile"}, {"to": "/industries", "label": "Industry pages"}]}
      />
    </SiteLayout>
  );
}
