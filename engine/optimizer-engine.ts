export function optimizeBudget(
  recommendations: any[],
  budget: number
) {
  recommendations.sort(
    (a, b) => b.score - a.score
  );

  let total = 0;

  const selected = [];

  for (const tool of recommendations) {
    if (
      total + tool.monthlyCost <= budget
    ) {
      selected.push(tool);

      total += tool.monthlyCost;
    }
  }

  return {
    selected,

    total,
  };
}