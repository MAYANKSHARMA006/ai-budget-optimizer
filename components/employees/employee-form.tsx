"use client";

import { useState } from "react";

export default function EmployeeForm({
  onSubmit,
}: {
  onSubmit: (employee: any) => void;
}) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
    salary: "",
  });

  function handleChange(e: any) {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5">
        Add Employee
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="name"
          placeholder="Employee Name"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          name="department"
          placeholder="Department"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          name="designation"
          placeholder="Designation"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          name="salary"
          type="number"
          placeholder="Salary"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />

      </div>

      <button
        onClick={() => onSubmit(employee)}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Save Employee
      </button>

    </div>
  );
}