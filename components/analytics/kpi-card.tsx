import React from "react";

interface Props {
  title: string;
  value: string | number;
}

export default function KPICard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>

    </div>
  );
}