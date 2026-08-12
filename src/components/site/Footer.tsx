import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/marvex-logo.jpg";
import { CONTACT, SERVICES } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-hero opacity-50" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Marvex Agency" width={40} height={40} className="h-10 w-10 rounded-lg object-cover" />
              <span className="text-lg font-semibold">
                Marvex<span className="text-gradient"> Agency</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Digital growth systems for local businesses — websites, Google Business Profile,
              reputation and lead follow-up connected into one customer journey.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: "https://www.facebook.com/share/18iGZchMPC/", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/mar.vexagen_cy/", icon: Instagram, label: "Instagram" },
                { href: CONTACT.whatsapp, icon: MessageCircle, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass grid h-10 w-10 place-items-center rounded-xl transition-colors hover:bg-secondary"
                >
                  <s.icon className="h-4 w-4 text-accent" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Services"
            links={SERVICES.map((s) => ({ to: s.path, label: s.short }))}
          />

          <FooterCol
            title="Industries"
            links={[
              { to: "/industries/car-dealers", label: "Car Dealers" },
              { to: "/industries/restaurants", label: "Restaurants" },
              { to: "/industries/barbers", label: "Barbers" },
              { to: "/industries/dentists", label: "Dentists" },
              { to: "/industries/home-services", label: "Home Services" },
            ]}
          />

          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About" },
              { to: "/how-it-works", label: "How It Works" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/blog", label: "Resources" },
              { to: "/contact", label: "Contact" },
            ]}
          />

          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="flex items-center gap-2 hover:text-foreground" href={`mailto:${CONTACT.email}`}>
                  <Mail className="h-4 w-4 text-accent" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 hover:text-foreground"
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 text-accent" /> {CONTACT.whatsappLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="glass mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl p-6 sm:flex-row sm:items-center">
          <p className="text-lg font-semibold">Ready to Improve Your Local Customer Journey?</p>
          <Link
            to="/contact"
            className="rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Get a Free Local Growth Assessment
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Marvex Agency. Digital Growth Systems for Local Businesses.</p>
          <p>No guaranteed rankings. No fake reviews. Just measurable systems.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
