interface Props {
  analysis: any;
}

export default function ExecutiveSummary({
  analysis,
}: Props) {
  if (!analysis) {
    return (
      <div className="rounded-xl bg-white shadow p-6">
        <h2 className="text-2xl font-bold">
          Executive Summary
        </h2>

        <p className="mt-4 text-gray-500">
          No AI analysis available.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white shadow p-6">
      <h2 className="text-2xl font-bold mb-6">
        Executive Summary
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
        <div>
          <p className="text-gray-500">Monthly Budget</p>
          <h3 className="text-3xl font-bold">
            ₹{analysis?.budgetPlan?.monthlyBudget ?? 0}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Annual Budget</p>
          <h3 className="text-3xl font-bold">
            ₹{analysis?.budgetPlan?.annualBudget ?? 0}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Expected ROI</p>
          <h3 className="text-3xl font-bold text-green-600">
            {analysis?.roi?.expectedROI ?? 0}%
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Productivity Gain</p>
          <h3 className="text-3xl font-bold text-blue-600">
            {analysis?.roi?.productivityGain ?? 0}%
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Recommended Tools</p>

          <h3 className="text-lg font-semibold">
            {analysis?.recommendedTools?.length ?? 0}
          </h3>
        </div>
      </div>
    </div>
  );
}