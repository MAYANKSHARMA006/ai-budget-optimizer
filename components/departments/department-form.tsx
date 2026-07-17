"use client";

import { useState } from "react";

interface Props {
  onSubmit: (department: any) => void;
}

export default function DepartmentForm({ onSubmit }: Props) {
  const [department, setDepartment] = useState({
    name: "",
    manager: "",
    employees: "",
    budget: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDepartment({
      ...department,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-6">
        Add Department
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="name"
          placeholder="Department Name"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          name="manager"
          placeholder="Manager"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          type="number"
          name="employees"
          placeholder="Employees"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          type="number"
          name="budget"
          placeholder="Monthly Budget"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />

      </div>

      <button
        onClick={() => onSubmit(department)}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Save Department
      </button>

    </div>
  );
}