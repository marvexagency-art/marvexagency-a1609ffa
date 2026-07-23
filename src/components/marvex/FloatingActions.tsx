import { useEffect, useState } from "react";
import { MessageCircle, X, Sparkles, Calendar } from "lucide-react";

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* AI Chat widget */}
      {chatOpen && (
        <div className="glass-strong shadow-card animate-fade-up fixed bottom-24 right-4 z-50 w-[min(92vw,340px)] rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-brand grid h-8 w-8 place-items-center rounded-lg">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold">Marvex AI</p>
                <p className="text-[10px] text-accent">● Online now</p>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} aria-label="Close" className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 space-y-2 text-sm">
            <div className="rounded-xl rounded-tl-sm bg-secondary/60 p-3">
              Hey 👋 — looking for more booked jobs? Tell me your business type and I&rsquo;ll suggest the fastest fix.
            </div>
          </div>

          <a
            href="https://wa.me/2348165010990"
            target="_blank" rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Continue on WhatsApp
          </a>
        </div>
      )}

      {/* Floating WhatsApp + chat */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
        <button
          onClick={() => setChatOpen((v) => !v)}
          aria-label="Open AI chat"
          className="glass-strong grid h-12 w-12 place-items-center rounded-full transition-transform hover:scale-105"
        >
          <Sparkles className="h-5 w-5 text-accent" />
        </button>
        <a
          href="https://wa.me/2348165010990"
          target="_blank" rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand shadow-glow transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
          <span className="absolute h-14 w-14 rounded-full bg-accent/50 animate-ping" />
        </a>
      </div>

      {/* Sticky mobile CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 md:hidden ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="glass-strong m-3 flex items-center gap-2 rounded-2xl p-2 shadow-card">
          <a
            href="#contact"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-brand px-4 py-3 text-xs font-semibold text-primary-foreground"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </a>
          <a
            href="https://wa.me/2348165010990"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl border border-border px-4 py-3 text-xs font-semibold"
          >
            <MessageCircle className="h-4 w-4 text-accent" /> Chat
          </a>
        </div>
      </div>
    </>
  );
}
