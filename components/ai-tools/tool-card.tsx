import { AITool } from "@/types/ai-tool";

export default function ToolCard({
  tool,
}: {
  tool: AITool;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold">
        {tool.name}
      </h2>

      <p className="text-gray-500">
        {tool.vendor}
      </p>

      <div className="mt-4 space-y-2">

        <p>
          Category: {tool.category}
        </p>

        <p>
          Monthly: ${tool.monthlyPrice}
        </p>

        <p>
          ROI: {tool.roi}%
        </p>

        <p>
          Productivity:
          {tool.productivityGain}%
        </p>

      </div>

    </div>
  );
}