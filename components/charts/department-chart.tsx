"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "HR", value: 15 },
  { name: "IT", value: 40 },
  { name: "Finance", value: 18 },
  { name: "Marketing", value: 27 },
];

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

export default function DepartmentChart() {
  return (
    <div className="bg-white rounded-xl shadow border p-6">

      <h2 className="text-xl font-semibold mb-6">
        AI Usage by Department
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}