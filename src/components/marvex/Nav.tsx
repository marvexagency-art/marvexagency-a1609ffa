import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/marvex-logo.jpg";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#trust", label: "Trust" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${
            scrolled ? "glass-strong shadow-card" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Marvex Agency logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-cover"
            />
            <span className="text-base font-semibold tracking-tight">
              Marvex<span className="text-gradient"> Agency</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Book Appointment
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-4 md:hidden animate-fade-up">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-brand px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
