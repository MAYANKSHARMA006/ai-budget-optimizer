import { aiTools } from "@/data/ai-tools";

export function filterTools(
  department: string
) {
  return aiTools.filter((tool) =>
    tool.departments.includes(department)
  );
}