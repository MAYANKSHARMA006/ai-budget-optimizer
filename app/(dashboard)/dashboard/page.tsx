import Link from "next/link";

import {
  Users,
  Wallet,
  Building2,
  Sparkles,
  TrendingUp,
  DollarSign,
} from "lucide-react";

import StatCard from "@/components/dashboard/stat-card";
import BudgetChart from "@/components/charts/budget-chart";
import DepartmentChart from "@/components/charts/department-chart";
import { getLatestAnalysis } from "@/lib/dashboard";

export default async function DashboardPage() {
  const analysis = await getLatestAnalysis();

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back 👋 Here's your AI budget overview.
          </p>
        </div>

        <div className="flex gap-3">

          <Link
            href="/analyze"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            ✨ Analyze Company
          </Link>

          <button
            className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            + Add Company
          </button>

        </div>

      </div>

      {/* Statistics Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Employees"
          value={String(analysis?.employees ?? 0)}
          icon={<Users size={26} />}
        />

        <StatCard
          title="Departments"
          value={String(analysis?.departments ?? "N/A")}
          icon={<Building2 size={26} />}
        />

        <StatCard
          title="AI Budget"
          value={analysis?.budget || "N/A"}
          icon={<Wallet size={26} />}
        />

        <StatCard
          title="AI Tools"
          value={String(analysis?.recommendedTools?.length ?? 0)}
          icon={<Sparkles size={26} />}
        />

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-6">

        <BudgetChart />

        <DepartmentChart />

      </div>

      {/* Bottom Analytics Cards */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Productivity */}

        <div className="bg-white rounded-xl shadow p-6 border">

          <div className="flex items-center gap-3 mb-4">

            <TrendingUp className="text-green-600" />

            <h2 className="font-semibold text-lg">
              Expected Productivity
            </h2>

          </div>

          <h1 className="text-5xl font-bold text-green-600">
            {analysis?.productivity || "N/A"}
          </h1>

          <p className="text-gray-500 mt-3">
            AI adoption is expected to increase productivity by approximately
            37% across all departments.
          </p>

        </div>

        {/* ROI */}

        <div className="bg-white rounded-xl shadow p-6 border">

          <div className="flex items-center gap-3 mb-4">

            <DollarSign className="text-blue-600" />

            <h2 className="font-semibold text-lg">
              Estimated ROI
            </h2>

          </div>

          <h1 className="text-5xl font-bold text-blue-600">
            {analysis?.roi || "N/A"}
          </h1>

          <p className="text-gray-500 mt-3">
            Estimated return on investment after deploying AI tools within one
            year.
          </p>

        </div>

        {/* AI Score */}

        <div className="bg-white rounded-xl shadow p-6 border">

          <div className="flex items-center gap-3 mb-4">

            <Sparkles className="text-purple-600" />

            <h2 className="font-semibold text-lg">
              AI Adoption Score
            </h2>

          </div>

          <h1 className="text-5xl font-bold text-purple-600">
            {analysis?.aiScore || "N/A"}
          </h1>

          <p className="text-gray-500 mt-3">
            Your organization is ready for AI adoption based on the current
            infrastructure and workforce.
          </p>

        </div>

      </div>

    </div>
  );
}