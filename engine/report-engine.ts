export function generateSummary(
  company: string,
  roi: number,
  savings: number
) {
  return `
Company ${company} can improve productivity while optimizing AI spending.

Estimated ROI:

${roi}%

Estimated Savings:

$${savings}

Recommendation:

Deploy AI gradually across departments beginning with Engineering and Marketing.
`;
}