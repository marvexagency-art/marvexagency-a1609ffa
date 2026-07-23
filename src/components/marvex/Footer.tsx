import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/marvex-logo.jpg";

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-hero opacity-50" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Marvex Agency" width={40} height={40} className="h-10 w-10 rounded-lg object-cover" />
              <span className="text-lg font-semibold">Marvex<span className="text-gradient"> Agency</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              AI-powered marketing systems for local businesses. We help you generate more leads,
              automate follow-ups, and book more jobs.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: "https://www.facebook.com/share/18iGZchMPC/", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/mar.vexagen_cy/", icon: Instagram, label: "Instagram" },
                { href: "https://wa.me/2348165010990", icon: MessageCircle, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass grid h-10 w-10 place-items-center rounded-xl transition-colors hover:bg-secondary"
                >
                  <s.icon className="h-4 w-4 text-accent" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Navigation" links={[
            { href: "#services", label: "Services" },
            { href: "#process", label: "Process" },
            { href: "#trust", label: "Results" },
            { href: "#contact", label: "Contact" },
          ]} />

          <FooterCol title="Services" links={[
            { href: "#services", label: "AI Marketing" },
            { href: "#services", label: "Lead Generation" },
            { href: "#services", label: "Facebook & Google Ads" },
            { href: "#services", label: "CRM Automation" },
          ]} />

          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +1 315 277 2465</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> marvexagency@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Remote — worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Marvex Agency. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
