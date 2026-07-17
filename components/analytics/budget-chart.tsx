"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", budget: 1500 },
  { month: "Feb", budget: 1800 },
  { month: "Mar", budget: 2500 },
  { month: "Apr", budget: 3200 },
  { month: "May", budget: 4200 },
  { month: "Jun", budget: 5100 },
];

export default function BudgetChart() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="font-bold text-xl mb-5">
        Monthly AI Budget
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            dataKey="budget"
            strokeWidth={3}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}