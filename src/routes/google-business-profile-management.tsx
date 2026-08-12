import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePage } from "@/components/site/ServicePage";
import { BASE_URL } from "@/lib/site-content";

const TITLE = "Google Business Profile Management | Google Maps | Marvex";
const DESC = "Improve your Google Business Profile with profile optimization, review management, content, local SEO and ongoing performance monitoring.";

export const Route = createFileRoute("/google-business-profile-management")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/google-business-profile-management` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/google-business-profile-management` }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ServicePage
        eyebrow={"Google Business Profile"}
        h1={"Improve Your Google Business Profile Presence"}
        intro={"Your Google Business Profile is often one of the first places potential customers encounter your business. We help you keep it complete, accurate and customer-focused."}
        breadcrumb={"Google Business Profile"}
        cta={"Explore Google Maps Management"}
        why={{ title: "Why your Google Business Profile matters", body: ["For most local searches, the map results appear before anything else. Your profile is effectively a second homepage that you don't control the layout of.", "Categories, services, business information, photos, posts, questions and reviews all shape what a potential customer thinks before they ever reach your website.", "We improve the factors that can strengthen your local search presence and keep the profile maintained rather than set up once and forgotten."] }}
        features={{ title: "What we manage", items: ["Profile optimization", "Category review", "Services setup", "Business information", "Photos and media", "Google Posts", "Q&A management", "Review monitoring", "Local search optimization", "Performance reporting"] }}
        flow={{ label: "Local discovery", steps: ["Customer searches", "Map results appear", "Profile is compared", "Website or call", "Enquiry"] }}
        note={"We do not guarantee #1 Google Maps rankings. No legitimate agency can. We improve the factors that can strengthen your local search presence."}
        process={[{"title": "Understand", "body": "We review your current setup, customers and the enquiries you're already getting."}, {"title": "Plan", "body": "We agree the scope, priorities and what success looks like in plain terms."}, {"title": "Build", "body": "We implement the work and review it with you before it goes live."}, {"title": "Improve", "body": "We monitor performance and refine the parts that aren't working well."}]}
        faqs={[{"q": "Do you need access to my profile?", "a": "Yes, manager access to the profile. You keep ownership at all times."}, {"q": "Can you guarantee top map rankings?", "a": "No. We improve the controllable factors and report on what changes."}, {"q": "How often is the profile updated?", "a": "Posts, photos and Q&A are maintained on an agreed schedule, with reviews monitored continuously."}, {"q": "What if my listing is suspended?", "a": "We review the likely cause and help you work through the reinstatement process."}]}
        related={[{"to": "/reputation-management", "label": "Reputation Management"}, {"to": "/website-design", "label": "Website Design"}, {"to": "/blog", "label": "Local SEO articles"}, {"to": "/industries", "label": "Industry pages"}]}
      />
    </SiteLayout>
  );
}
