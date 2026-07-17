import { aiTools } from "@/data/ai-tools";

export function recommendAITools(
  departments: any[]
) {
  let recommendations: any[] = [];

  departments.forEach((department) => {
    const tools = aiTools.filter((tool) =>
      tool.departments.includes(department.name)
    );

    recommendations.push({
      department: department.name,
      employees: department.employeeCount,
      tools,
    });
  });

  return recommendations;
}