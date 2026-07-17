export function calculateROI(
  monthlyBudget: number,
  productivity: number
) {
  const yearlyInvestment =
    monthlyBudget * 12;

  const estimatedSavings =
    yearlyInvestment *
    (productivity / 100) *
    3;

  const roi =
    ((estimatedSavings -
      yearlyInvestment) /
      yearlyInvestment) *
    100;

  return {
    roi: roi.toFixed(1),

    estimatedSavings:
      estimatedSavings.toFixed(0),
  };
}