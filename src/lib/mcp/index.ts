import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getProcessTool from "./tools/get-process";
import getContactInfoTool from "./tools/get-contact-info";

export default defineMcp({
  name: "marvex-growth-engine",
  title: "Marvex Growth Engine",
  version: "0.1.0",
  instructions:
    "Public tools for Marvex Agency, an AI marketing agency for local service businesses. Use `list_services` to see what the agency offers, `get_process` for the 3-step growth process, and `get_contact_info` for booking and contact details. All data is public marketing content.",
  tools: [listServicesTool, getProcessTool, getContactInfoTool],
});
