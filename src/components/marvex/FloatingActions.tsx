import { useEffect, useMemo, useState } from "react";
import { MessageCircle, X, Sparkles, Calendar, Send, Bot } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const QUESTIONS = [
  "Hey 👋 I'm Marvex AI. What type of business do you run? (e.g. Plumber, Roofer, Dentist)",
  "Nice! Roughly how many new customers do you get per month right now?",
  "What's your #1 goal — more leads, more booked jobs, or better follow-up?",
  "Last one — what's your name so I can connect you with our team?",
];

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: QUESTIONS[0] },
  ]);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const finished = step >= QUESTIONS.length;

  const waHref = useMemo(() => {
    const answers = messages.filter((m) => m.from === "user").map((m) => m.text);
    const summary =
      answers.length > 0
        ? `Hi Marvex! I'd love to chat.\n\n• Business: ${answers[0] ?? ""}\n• Monthly customers: ${answers[1] ?? ""}\n• Goal: ${answers[2] ?? ""}\n• Name: ${answers[3] ?? ""}`
        : "Hi Marvex! I'd love to chat.";
    return `https://wa.me/2348165010990?text=${encodeURIComponent(summary)}`;
  }, [messages]);

  const send = () => {
    const value = input.trim();
    if (!value || finished) return;
    const nextStep = step + 1;
    const next: Msg[] = [...messages, { from: "user", text: value }];
    if (nextStep < QUESTIONS.length) {
      next.push({ from: "bot", text: QUESTIONS[nextStep] });
    } else {
      next.push({
        from: "bot",
        text: "Amazing 🚀 Based on your answers, we can help. Tap below to continue on WhatsApp — 0816 501 0990 — and a strategist will reply within minutes.",
      });
    }
    setMessages(next);
    setStep(nextStep);
    setInput("");
  };

  return (
    <>
      {/* AI Chat widget */}
      {chatOpen && (
        <div className="glass-strong shadow-card animate-fade-up fixed bottom-24 right-4 z-50 flex w-[min(92vw,360px)] flex-col rounded-2xl p-4">
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
            <button
              onClick={() => setChatOpen(false)}
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 max-h-72 space-y-2 overflow-y-auto pr-1 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "bot"
                    ? "rounded-xl rounded-tl-sm bg-secondary/60 p-3"
                    : "ml-8 rounded-xl rounded-tr-sm bg-gradient-brand p-3 text-primary-foreground"
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          {!finished ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="mt-3 flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your answer…"
                aria-label="Your answer"
                className="flex-1 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <button
                type="submit"
                aria-label="Send"
                className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Continue on WhatsApp · 0816 501 0990
            </a>
          )}
        </div>
      )}

      {/* Single floating chat button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setChatOpen((v) => !v)}
          aria-label="Chat with Marvex AI"
          className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-brand shadow-glow transition-transform hover:scale-105"
        >
          {chatOpen ? (
            <X className="h-6 w-6 text-primary-foreground" />
          ) : (
            <Bot className="h-7 w-7 text-primary-foreground" />
          )}
          {!chatOpen && (
            <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
          )}
        </button>
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
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl border border-border px-4 py-3 text-xs font-semibold"
          >
            <MessageCircle className="h-4 w-4 text-accent" /> Chat
          </a>
        </div>
      </div>
    </>
  );
}
