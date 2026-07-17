import { AITool } from "@/types/ai-tool";

interface CompanyData {
  industry: string;
  companySize: string;
  departments: string[];
  goals: string[];
}

export function calculateToolScore(
  tool: AITool,
  company: CompanyData
) {
  let score = 0;

  if (
    tool.industries.includes(company.industry)
  )
    score += 30;

  company.departments.forEach((dept) => {
    if (tool.departments.includes(dept))
      score += 15;
  });

  if (company.companySize === "Enterprise")
    score += 20;

  score += tool.productivityGain;

  score += tool.roi / 10;

  return score;
}