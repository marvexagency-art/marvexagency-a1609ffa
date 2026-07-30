import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SERVICES } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the AI marketing, automation and lead generation services Marvex Agency offers, with a short description of each.",
  inputSchema: {
    search: z
      .string()
      .optional()
      .describe("Optional keyword to filter services by title or description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ search }) => {
    const q = search?.trim().toLowerCase();
    const services = q
      ? SERVICES.filter(
          (s) =>
            s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q),
        )
      : SERVICES;

    return {
      content: [
        {
          type: "text" as const,
          text: services.length
            ? services.map((s) => `- ${s.title}: ${s.description}`).join("\n")
            : `No services matched "${search}".`,
        },
      ],
      structuredContent: { services },
    };
  },
});
