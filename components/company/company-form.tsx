"use client";

import { useState } from "react";
import { createCompany } from "@/services/company.service";
import toast from "react-hot-toast";

export default function CompanyForm() {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [employeeCount, setEmployeeCount] = useState<number | "">("");
  const [budget, setBudget] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.clear();

    console.log("========== COMPANY SAVE START ==========");

    // Validation
    if (!companyName.trim()) {
      toast.error("Company Name is required");
      return;
    }

    if (!industry.trim()) {
      toast.error("Industry is required");
      return;
    }

    console.log("✅ Validation Passed");

    setLoading(true);

    try {
      console.log("📤 Sending data to Firestore...");

      const docRef = await createCompany({
        companyName: companyName.trim(),
        industry: industry.trim(),
        employeeCount: Number(employeeCount),
        aiBudget: Number(budget),
      });

      console.log("✅ Firestore Success");
      console.log("Document ID:", docRef.id);

      toast.success("Company saved successfully!");

      // Reset form
      setCompanyName("");
      setIndustry("");
      setEmployeeCount("");
      setBudget("");

      console.log("✅ Form Reset Complete");
    } catch (error: any) {
      console.error("❌ Firebase Error");
      console.error(error);

      toast.error(
        error?.message || "Failed to save company."
      );

      alert(
        error?.message ||
          "Something went wrong while saving."
      );
    } finally {
      setLoading(false);

      console.log("========== COMPANY SAVE END ==========");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
    >
      {/* Company Name */}
      <div>
        <label className="block mb-2 font-semibold">
          Company Name
        </label>

        <input
          type="text"
          value={companyName}
          onChange={(e) =>
            setCompanyName(e.target.value)
          }
          placeholder="OpenAI Pvt Ltd"
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
        />
      </div>

      {/* Industry */}
      <div>
        <label className="block mb-2 font-semibold">
          Industry
        </label>

        <input
          type="text"
          value={industry}
          onChange={(e) =>
            setIndustry(e.target.value)
          }
          placeholder="Technology"
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
        />
      </div>

      {/* Employees */}
      <div>
        <label className="block mb-2 font-semibold">
          Number of Employees
        </label>

        <input
          type="number"
          value={employeeCount}
          onChange={(e) =>
            setEmployeeCount(
              e.target.value === ""
                ? ""
                : Number(e.target.value)
            )
          }
          placeholder="250"
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
        />
      </div>

      {/* Budget */}
      <div>
        <label className="block mb-2 font-semibold">
          Monthly AI Budget ($)
        </label>

        <input
          type="number"
          value={budget}
          onChange={(e) =>
            setBudget(
              e.target.value === ""
                ? ""
                : Number(e.target.value)
            )
          }
          placeholder="10000"
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full rounded-lg py-3 font-semibold text-white transition-all ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Saving..." : "Save Company"}
      </button>
    </form>
  );
}