"use client";

import { useState } from "react";
import { createCompany } from "@/services/company.service";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function CompanyForm() {
  const { user } = useUser();
  const router = useRouter();

  const [form, setForm] = useState({
    companyName: "",
    industry: "",
    website: "",
    country: "",
    companySize: "",
    employeeCount: "",
    departmentCount: "",
    annualRevenue: "",
    currentAIBudget: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    await createCompany({
      companyName: form.companyName,
      industry: form.industry,
      website: form.website,
      country: form.country,
      companySize: form.companySize,
      employeeCount: Number(form.employeeCount),
      departmentCount: Number(form.departmentCount),
      annualRevenue: Number(form.annualRevenue),
      currentAIBudget: Number(form.currentAIBudget),
      currentAITools: [],
      goals: [],
      createdBy: user?.id || "",
    });

    setLoading(false);

    router.push("/dashboard");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow space-y-5"
    >
      <h1 className="text-3xl font-bold">
        Company Information
      </h1>

      <input
        name="companyName"
        placeholder="Company Name"
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="industry"
        placeholder="Industry"
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="website"
        placeholder="Website"
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="country"
        placeholder="Country"
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <select
        name="companySize"
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      >
        <option value="">Select Company Size</option>
        <option>Startup</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Enterprise</option>
      </select>

      <input
        name="employeeCount"
        type="number"
        placeholder="Employees"
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="departmentCount"
        type="number"
        placeholder="Departments"
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="annualRevenue"
        type="number"
        placeholder="Annual Revenue"
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="currentAIBudget"
        type="number"
        placeholder="Current AI Budget"
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <button
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        {loading ? "Saving..." : "Save Company"}
      </button>
    </form>
  );
}