import { defineTool } from "@lovable.dev/mcp-js";
import { CONTACT } from "../content";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact and booking info",
  description:
    "Get Marvex Agency's public contact details and how to book an appointment (WhatsApp, email, phone, booking link).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text" as const,
        text: [
          `${CONTACT.agency} — ${CONTACT.website}`,
          `Book an appointment: ${CONTACT.bookingUrl}`,
          `WhatsApp: ${CONTACT.whatsapp} (${CONTACT.whatsappLink})`,
          `Email: ${CONTACT.email}`,
          `Phone: ${CONTACT.phone}`,
          `Who we work with: ${CONTACT.audience}`,
        ].join("\n"),
      },
    ],
    structuredContent: { contact: CONTACT },
  }),
});
