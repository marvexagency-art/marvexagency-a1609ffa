import { useEffect, useRef, type ReactNode } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  Globe,
  MessageSquare,
  Monitor,
  MousePointerClick,
  ShoppingBag,
  Smartphone,
  Sparkles,
  User,
} from "lucide-react";
import { BASE_URL } from "@/lib/site-content";
import heroDevices from "@/assets/portfolio/hero-devices.jpg";
import workDealership from "@/assets/portfolio/work-dealership.jpg";
import workRealestate from "@/assets/portfolio/work-realestate.jpg";
import workRestaurant from "@/assets/portfolio/work-restaurant.jpg";
import workPersonal from "@/assets/portfolio/work-personal-brand.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Festus Porcius — Website Designer | I Build Websites" },
      {
        name: "description",
        content:
          "Portfolio of Festus Porcius, website designer. Modern, responsive websites that help businesses look professional, build trust and generate enquiries.",
      },
      { property: "og:title", content: "Festus Porcius — Website Designer | I Build Websites" },
      {
        property: "og:description",
        content: "I build websites that make businesses look professional online.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/portfolio` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/portfolio` }],
  }),
  component: PortfolioPage,
});

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------------- Data ---------------- */

const projects = [
  {
    img: workDealership,
    title: "Car Dealership Website",
    desc: "Showroom-style homepage with inventory search, featured vehicles and trust signals.",
    tags: ["Vehicle Listings", "Finance Enquiries", "Dark Luxury"],
    alt: "Demo website design for a car dealership",
  },
  {
    img: workRealestate,
    title: "Real Estate Agency Website",
    desc: "Editorial property listings with search, agent profiles and enquiry paths.",
    tags: ["Property Search", "Agent Profiles", "Editorial Style"],
    alt: "Demo website design for a real estate agency",
  },
  {
    img: workRestaurant,
    title: "Restaurant Website",
    desc: "Reservation-first layout with menu highlights, photo gallery and opening hours.",
    tags: ["Reservations", "Menu Pages", "Photo Gallery"],
    alt: "Demo website design for a restaurant",
  },
  {
    img: workPersonal,
    title: "Personal Brand Website",
    desc: "Coaching and speaking brand with services, booking paths and newsletter signup.",
    tags: ["Personal Brand", "Services", "Newsletter"],
    alt: "Demo website design for a personal brand",
  },
];

const buildTypes = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "A complete home online for your business: services, credibility and clear ways to contact you.",
  },
  {
    icon: User,
    title: "Portfolio Websites",
    desc: "Show your work properly with galleries, case pages and a site that feels like you.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    desc: "Focused single pages built around one goal — enquiries, sign-ups or sales.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Websites",
    desc: "Let customers see availability and book without back-and-forth messages.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Websites",
    desc: "Clean product pages, simple checkout and a store that's easy to manage.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Discover",
    desc: "We talk about your business, your customers and what the website needs to do.",
  },
  {
    n: "02",
    title: "Plan",
    desc: "I map the pages, structure and content so every section has a clear job.",
  },
  {
    n: "03",
    title: "Design",
    desc: "You see the design take shape and give feedback before anything is built.",
  },
  {
    n: "04",
    title: "Build",
    desc: "The approved design becomes a fast, responsive website that works on every device.",
  },
  {
    n: "05",
    title: "Launch",
    desc: "We test, publish and make sure you know how to request changes going forward.",
  },
];

const whyMe = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    desc: "Plain-language updates at every stage. You always know what's happening and what's next.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    desc: "Your website adapts to any screen, so it looks right on laptops, tablets and phones.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Layouts",
    desc: "Most visitors arrive on a phone. Your site is designed for them first, not as an afterthought.",
  },
  {
    icon: Sparkles,
    title: "Custom Design",
    desc: "No recycled templates. Your website is designed around your business and your customers.",
  },
];

/* ---------------- Page ---------------- */

function PortfolioPage() {
  return (
    <div>
      <Hero />
      <SelectedWork />
      <WhatIBuild />
      <Process />
      <WhyMe />
      <AboutMe />
      <FinalCta />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-24 right-[-10%] h-96 w-96 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Festus Porcius · Website Designer
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
              I Build Websites That Make Businesses Look{" "}
              <span className="text-gradient">Professional Online.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Modern, responsive websites designed to help businesses showcase their services,
              build trust, and generate enquiries.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Start a Project
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
            <img
              src={heroDevices}
              alt="Laptop and smartphone displaying a professionally designed website on desktop and mobile"
              width={1600}
              height={1104}
              className="ring-brand shadow-card w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="relative bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="max-w-3xl">
          <span className="inline-block rounded-full border border-ink/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Selected Work
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            Websites Designed to Look Professional
          </h2>
          <p className="mt-4 text-ink-muted">
            Four demo projects that show how I approach layout, typography and hierarchy for
            different kinds of businesses.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100}>
              <article className="group shadow-paper overflow-hidden rounded-2xl border border-ink/10 bg-paper-card transition-transform duration-300 hover:-translate-y-1.5">
                <img
                  src={p.img}
                  alt={p.alt}
                  width={1440}
                  height={912}
                  loading="lazy"
                  className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <span className="rounded-full border border-ink/15 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                      Demo project
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-ink-muted">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-lg bg-paper-soft px-2.5 py-1 text-xs font-medium text-ink"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-xs text-ink-muted">
            These are concept projects created to demonstrate my design style and capability —
            they are not client work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function WhatIBuild() {
  return (
    <section id="what-i-build" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="glass inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            What I Build
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            The Right Website <span className="text-gradient">For Your Goal</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {buildTypes.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 80}>
              <div className="glass h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="bg-gradient-brand grid h-11 w-11 place-items-center rounded-xl shadow-glow">
                  <t.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={160}>
            <div className="glass-strong shadow-card flex h-full flex-col justify-center rounded-2xl p-6">
              <p className="text-lg font-semibold">Not sure which one you need?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell me about your business and I'll recommend the simplest website that gets the
                job done.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
              >
                Ask me directly
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-ink/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            My Process
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            From First Call to Launch Day
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute top-7 right-8 left-8 hidden h-px bg-ink/10 lg:block" />
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="relative text-center lg:text-left">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-ink text-sm font-bold text-paper shadow-paper lg:mx-0">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section id="why-me" className="relative bg-paper-soft py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="max-w-3xl">
          <span className="inline-block rounded-full border border-ink/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Why Work With Me
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            A Designer Who Makes It Easy
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {whyMe.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 90}>
              <div className="shadow-paper flex h-full items-start gap-4 rounded-2xl border border-ink/10 bg-paper-card p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink">
                  <w.icon className="h-5 w-5 text-paper" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="about" className="relative bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="shadow-paper grid items-center gap-10 rounded-3xl border border-ink/10 bg-paper-card p-8 md:grid-cols-[auto_1fr] md:p-12">
            <div className="bg-gradient-brand grid h-24 w-24 place-items-center rounded-3xl text-3xl font-bold text-primary-foreground shadow-glow md:h-28 md:w-28">
              FP
            </div>
            <div>
              <span className="inline-block rounded-full border border-ink/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                About Me
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Hi, I'm Festus Porcius.
              </h2>
              <p className="mt-4 max-w-2xl text-ink-muted">
                I'm a website designer who helps businesses establish a professional online
                presence. I care about the details that make a website feel trustworthy — clean
                layouts, strong typography, fast load times and pages that guide visitors towards
                contacting you.
              </p>
              <p className="mt-3 max-w-2xl text-ink-muted">
                Whether you need your first website or a rebuild of one that isn't working, my job
                is to make your business look as professional online as it is in person.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-25 blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Need a Website? <span className="text-gradient">Let's Build It.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell me about your business and what you need your website to do — I'll come back
            with a clear plan and a quote.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
