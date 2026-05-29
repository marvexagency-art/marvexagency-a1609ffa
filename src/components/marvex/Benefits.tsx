import {
  UserPlus, Timer, CalendarClock, TrendingUp, ShieldOff,
  Bot, Coins, PhoneCall, MessageSquare, BarChart3,
} from "lucide-react";

const items = [
  { icon: UserPlus, t: "More Qualified Leads", m: "+247%" },
  { icon: Timer, t: "Faster Lead Follow-Up", m: "<2 min" },
  { icon: CalendarClock, t: "Automated Booking", m: "24/7" },
  { icon: TrendingUp, t: "Better Conversion Rates", m: "+68%" },
  { icon: ShieldOff, t: "Lower Ad Waste", m: "-42%" },
  { icon: Bot, t: "AI Customer Follow-Up", m: "Always on" },
  { icon: Coins, t: "Better ROI", m: "4.8x" },
  { icon: PhoneCall, t: "More Booked Calls", m: "+3x" },
  { icon: MessageSquare, t: "WhatsApp Auto-Replies", m: "Instant" },
  { icon: BarChart3, t: "Smarter Lead Tracking", m: "Live" },
];

export function Benefits() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="glass inline-block rounded-full px-3 py-1 text-xs text-muted-foreground">
            What you get
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What You&rsquo;ll <span className="text-gradient">Actually Receive</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((b) => (
            <div
              key={b.t}
              className="glass group rounded-2xl p-5 transition-all hover:-translate-y-1 hover:ring-brand"
            >
              <div className="flex items-center justify-between">
                <div className="bg-gradient-card grid h-10 w-10 place-items-center rounded-xl border border-border">
                  <b.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-semibold text-gradient">{b.m}</span>
              </div>
              <p className="mt-4 text-sm font-medium">{b.t}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-xl font-semibold md:text-2xl">
            Your business should run <span className="text-gradient">smarter</span>, not harder.
          </p>
        </div>
      </div>
    </section>
  );
}
