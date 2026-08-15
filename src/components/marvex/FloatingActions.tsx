import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, Sparkles, Calendar, Send, Bot } from "lucide-react";

type Msg = { role: "assistant" | "user"; content: string };

const GREETING =
  "Hey 👋 I'm Marvex AI. Quick one — what kind of business are you running?";

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: GREETING },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const answers = useMemo(
    () => messages.filter((m) => m.role === "user").map((m) => m.content),
    [messages],
  );
  const finished = answers.length >= 3;

  const waHref = useMemo(() => {
    const summary =
      answers.length > 0
        ? `Hi Marvex! I chatted with your AI assistant.\n\n${answers.map((a, i) => `${i + 1}. ${a}`).join("\n")}`
        : "Hi Marvex! I'd love to chat.";
    return `https://wa.me/2348165010990?text=${encodeURIComponent(summary)}`;
  }, [answers]);

  const send = async () => {
    const value = input.trim();
    if (!value || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: value }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            data.reply ||
            "Sorry, I glitched for a second there. Mind saying that again?",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now — you can reach us straight on WhatsApp at 0816 501 0990.",
        },
      ]);
    } finally {
      setLoading(false);
    }
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

          <div ref={scrollRef} className="mt-3 max-h-72 space-y-2 overflow-y-auto pr-1 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "assistant"
                    ? "whitespace-pre-wrap rounded-xl rounded-tl-sm bg-secondary/60 p-3"
                    : "ml-8 whitespace-pre-wrap rounded-xl rounded-tr-sm bg-gradient-brand p-3 text-primary-foreground"
                }
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-1 rounded-xl rounded-tl-sm bg-secondary/60 p-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.2s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.1s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
            className="mt-3 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              aria-label="Your message"
              className="flex-1 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={loading}
              aria-label="Send"
              className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          {finished && (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground"
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
