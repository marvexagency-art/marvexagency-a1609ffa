import { ClipboardCheck, Cpu, CalendarHeart } from "lucide-react";

const steps = [
  {
    n: "01", icon: ClipboardCheck, title: "Audit Your Current Marketing",
    desc: "We identify where your leads, ads, and funnels are leaking money.",
  },
  {
    n: "02", icon: Cpu, title: "Build Your AI Growth System",
    desc: "We create automated systems that attract, follow up, and convert leads.",
  },
  {
    n: "03", icon: CalendarHeart, title: "Book More Jobs Consistently",
    desc: "You get more appointments, faster follow-up, and higher conversion rates.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="glass inline-block rounded-full px-3 py-1 text-xs text-muted-foreground">
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple Growth System <br />
            <span className="text-gradient">For Local Businesses</span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          {/* connecting line on desktop */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="glass relative rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-brand grid h-12 w-12 place-items-center rounded-2xl shadow-glow">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-4xl font-bold text-gradient leading-none">{s.n}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="mt-6 h-px w-full bg-gradient-to-r from-border to-transparent lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
