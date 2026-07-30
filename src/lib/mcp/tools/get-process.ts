import { defineTool } from "@lovable.dev/mcp-js";
import { PROCESS_STEPS } from "../content";

export default defineTool({
  name: "get_process",
  title: "Get growth process",
  description:
    "Get Marvex Agency's 3-step growth process for local businesses, from marketing audit to consistently booked jobs.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text" as const,
        text: PROCESS_STEPS.map((s) => `${s.step}. ${s.title} — ${s.description}`).join("\n"),
      },
    ],
    structuredContent: { steps: PROCESS_STEPS },
  }),
});
