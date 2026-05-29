import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/marvex/Nav";
import { Hero } from "@/components/marvex/Hero";
import { Services } from "@/components/marvex/Services";
import { Process } from "@/components/marvex/Process";
import { Benefits } from "@/components/marvex/Benefits";
import { Trust } from "@/components/marvex/Trust";
import { Contact } from "@/components/marvex/Contact";
import { Footer } from "@/components/marvex/Footer";
import { FloatingActions } from "@/components/marvex/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marvex Agency — AI Marketing & Lead Systems For Local Businesses" },
      {
        name: "description",
        content:
          "Marvex Agency builds AI-powered ads, funnels and automation that book more jobs for plumbers, roofers, HVAC, dentists, contractors and home services.",
      },
      { property: "og:title", content: "Marvex Agency — AI Growth Systems For Local Businesses" },
      { property: "og:description", content: "Generate more leads, automate follow-ups, and book more jobs with AI." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
