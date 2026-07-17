"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", budget: 5000 },
  { month: "Feb", budget: 6500 },
  { month: "Mar", budget: 8200 },
  { month: "Apr", budget: 9800 },
  { month: "May", budget: 12000 },
  { month: "Jun", budget: 18500 },
];

export default function BudgetChart() {
  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-xl font-semibold mb-6">
        AI Budget Growth
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="budget"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}