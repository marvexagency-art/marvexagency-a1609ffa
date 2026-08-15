import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are "Marvex AI", a warm, human-sounding growth strategist at Marvex Agency — a digital growth agency for local businesses (plumbers, roofers, electricians, HVAC, dentists, cleaners, trades).

How you talk:
- Sound like a real person texting: short, natural, friendly, a little casual. 1-3 sentences max.
- Never sound like a form or a script. React to what they actually said before asking the next thing.
- Ask ONE question at a time.

Your goal: naturally learn (1) their business type/name, (2) roughly how many customers or leads they get now, (3) their main goal, and (4) their name. Once you know enough, tell them a strategist can take it from here on WhatsApp (0816 501 0990) and encourage them to tap the WhatsApp button below the chat.

Marvex services: website design, Google Business Profile management, reputation/reviews management, AI lead automation and follow-up, ads, and booking systems. Never invent prices — say pricing depends on the setup and is covered on a quick call. No markdown formatting, plain text only.`;

type ChatBody = { messages?: { role: "user" | "assistant"; content: string }[] };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
            "X-Lovable-AIG-SDK": "fetch",
          },
          body: JSON.stringify({
            model: "google/gemini-3.6-flash",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...messages.slice(-20).map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) })),
            ],
          }),
        });

        if (!res.ok) {
          const detail = await res.text();
          return new Response(JSON.stringify({ error: detail.slice(0, 300) }), {
            status: res.status,
            headers: { "Content-Type": "application/json" },
          });
        }

        const data = (await res.json()) as {
          choices?: { message?: { content?: string } }[];
        };
        const reply = data.choices?.[0]?.message?.content?.trim() ?? "";

        return new Response(JSON.stringify({ reply }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
