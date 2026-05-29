import { Star, TrendingUp, Quote } from "lucide-react";
import avatarJames from "@/assets/avatar-james.jpg";
import avatarSophia from "@/assets/avatar-sophia.jpg";
import avatarDaniel from "@/assets/avatar-daniel.jpg";
import avatarMia from "@/assets/avatar-mia.jpg";

const metrics = [
  { v: "+247%", l: "More Leads" },
  { v: "42%", l: "Lower Cost Per Lead" },
  { v: "3x", l: "Faster Follow-Up" },
  { v: "+68%", l: "More Booked Jobs" },
];

const testimonials = [
  {
    name: "James W.", role: "Owner • Plumbing Co.",
    text: "Marvex helped us stop wasting money on ads and finally created a system that consistently brings booked jobs.",
    avatar: avatarJames,
  },
  {
    name: "Sophia R.", role: "Founder • HVAC Pros",
    text: "Our calendar went from quiet weeks to fully booked in under 60 days. The follow-up automation is unreal.",
    avatar: avatarSophia,
  },
  {
    name: "Daniel K.", role: "Director • Roofing Group",
    text: "Cost per lead dropped by half and our team finally has qualified jobs to quote every single day.",
    avatar: avatarDaniel,
  },
  {
    name: "Mia L.", role: "Manager • Dental Clinic",
    text: "Patients now book themselves through the AI system. We freed up the front desk and doubled new visits.",
    avatar: avatarMia,
  },
];

export function Trust() {
  return (
    <section id="trust" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-1/3 -z-10 h-96 bg-gradient-hero opacity-60" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="glass inline-block rounded-full px-3 py-1 text-xs text-muted-foreground">
            Why us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Businesses Choose <span className="text-gradient">Marvex Agency</span>
          </h2>
        </div>

        {/* Metrics */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.l} className="glass rounded-2xl p-6 text-center">
              <div className="mx-auto inline-flex items-center gap-1.5 text-xs text-accent">
                <TrendingUp className="h-3.5 w-3.5" /> Verified result
              </div>
              <p className="mt-3 text-4xl font-bold text-gradient">{m.v}</p>
              <p className="mt-1 text-sm text-muted-foreground">{m.l}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glass relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <Quote className="absolute right-4 top-4 h-6 w-6 text-accent/40" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-foreground/90">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Trust strip */}
        <div className="glass mt-12 overflow-hidden rounded-2xl p-4">
          <div className="flex animate-marquee gap-12 whitespace-nowrap text-sm text-muted-foreground [animation-duration:30s]">
            {[
              "Plumbers", "Roofers", "HVAC", "Electricians", "Dentists", "Solar",
              "Realtors", "Contractors", "Clinics", "Home Services",
              "Plumbers", "Roofers", "HVAC", "Electricians", "Dentists", "Solar",
              "Realtors", "Contractors", "Clinics", "Home Services",
            ].map((n, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" /> {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
