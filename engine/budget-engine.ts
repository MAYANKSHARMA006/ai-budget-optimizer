export function calculateBudget(
  recommendations: any[]
) {
  let monthly = 0;

  recommendations.forEach((department) => {
    department.tools.forEach((tool: any) => {
      monthly +=
        tool.monthlyPrice *
        department.employees;
    });
  });

  return {
    monthly,

    yearly: monthly * 12,
  };
}