"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { createDepartment } from "@/services/department.service";

export default function DepartmentForm() {
  const [loading, setLoading] = useState(false);

  const [department, setDepartment] = useState({
    name: "",
    manager: "",
    employeeCount: "",
    monthlyBudget: "",
    aiReadiness: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDepartment({
      ...department,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    if (!department.name || !department.manager) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      await createDepartment({
        name: department.name,
        manager: department.manager,
        employeeCount: Number(department.employeeCount),
        monthlyBudget: Number(department.monthlyBudget),
        aiReadiness: Number(department.aiReadiness),
      });

      toast.success("Department Added");

      setDepartment({
        name: "",
        manager: "",
        employeeCount: "",
        monthlyBudget: "",
        aiReadiness: "",
      });

    } catch (error) {
      console.error(error);
      toast.error("Failed to save department");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Add Department
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          name="name"
          placeholder="Department Name"
          value={department.name}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          name="manager"
          placeholder="Manager"
          value={department.manager}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          name="employeeCount"
          placeholder="Employees"
          value={department.employeeCount}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          name="monthlyBudget"
          placeholder="Monthly Budget"
          value={department.monthlyBudget}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          name="aiReadiness"
          placeholder="AI Readiness (0-100)"
          value={department.aiReadiness}
          onChange={handleChange}
          className="border rounded-lg p-3 md:col-span-2"
        />

      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Saving..." : "Save Department"}
      </button>

    </div>
  );
}