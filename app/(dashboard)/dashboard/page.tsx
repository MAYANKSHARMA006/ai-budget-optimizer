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
import AIReadinessCard from "@/components/dashboard/ai-readiness-card";

import BudgetChart from "@/components/charts/budget-chart";
import DepartmentChart from "@/components/charts/department-chart";

import BudgetDistributionChart from "@/components/dashboard/charts/budget-distribution-chart";
import ToolUsageChart from "@/components/dashboard/charts/tool-usage-chart";
import ProductivityChart from "@/components/dashboard/charts/productivity-chart";

import { getDashboardData } from "@/lib/dashboard";
import RecentActivity from "@/components/dashboard/recent-activity";
import ExecutiveSummary from "@/components/dashboard/executive-summary";
import AdminProfile from "@/components/dashboard/admin-profile";

export default async function DashboardPage() {
  const dashboard = await getDashboardData();

  const analysis = dashboard?.analysis || {};

  const employees = dashboard?.employeeCount ?? 0;

  const departments = dashboard?.departments ?? 0;

  const aiTools = analysis?.recommendedTools?.length ?? 0;

  const productivity =
    analysis?.roi?.productivityGain ??
    analysis?.productivity ??
    0;

  // ------------------------
  // Budget Chart Data
  // ------------------------

  const budgetDistribution =
    dashboard?.departmentList?.map((dept: any) => ({
      department: dept.name,
      budget: Number(dept.budget || 0),
    })) || [];

  // ------------------------
  // Tool Usage
  // ------------------------

  const toolCounter: Record<string, number> = {};

  dashboard?.employeesList?.forEach((employee: any) => {
    (employee.recommendedTools || []).forEach((tool: string) => {
      toolCounter[tool] = (toolCounter[tool] || 0) + 1;
    });
  });

  const toolUsage = Object.entries(toolCounter).map(
    ([tool, users]) => ({
      tool,
      users,
    })
  );

  // ------------------------
  // Productivity Chart
  // ------------------------

  const productivityData = [
    {
      name: "Before AI",
      value: 100,
    },
    {
      name: "After AI",
      value: 100 + Number(productivity),
    },
  ];

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
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            ✨ Analyze Company
          </Link>

          <Link
            href="/company"
            className="rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-800"
          >
            + Add Company
          </Link>
        </div>
      </div>

      {/* Company */}

      <div className="rounded-xl border bg-white p-6 shadow">
        <h2 className="text-2xl font-bold">
          {dashboard?.company?.companyName || "No Company Added"}
        </h2>

        <p className="mt-2 text-gray-500">
          Industry: {dashboard?.company?.industry || "N/A"}
        </p>

        <p className="text-gray-500">
          Monthly AI Budget: ₹{dashboard?.company?.aiBudget ?? 0}
        </p>
      </div>

      <ExecutiveSummary
  analysis={analysis}
/>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Employees"
          value={String(employees)}
          icon={<Users size={26} />}
        />

        <StatCard
          title="Departments"
          value={String(departments)}
          icon={<Building2 size={26} />}
        />

        <StatCard
          title="AI Budget"
          value={`₹${dashboard?.company?.aiBudget ?? 0}`}
          icon={<Wallet size={26} />}
        />

        <StatCard
          title="AI Tools"
          value={String(aiTools)}
          icon={<Sparkles size={26} />}
        />
      </div>

      {/* AI Score */}

      <AIReadinessCard
        employees={employees}
        departments={departments}
        aiTools={aiTools}
        productivity={Number(productivity)}
      />

      {/* Charts */}

      <div className="grid gap-6 lg:grid-cols-2">
        <BudgetDistributionChart
          data={budgetDistribution}
        />

        <ToolUsageChart
          data={toolUsage}
        />
      </div>

      <ProductivityChart
        data={productivityData}
      />

      {/* Existing Charts */}

      <div className="grid gap-6 lg:grid-cols-2">
        <BudgetChart />

        <DepartmentChart />
      </div>

      {/* Analytics */}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow">
          <div className="mb-4 flex items-center gap-3">
            <TrendingUp className="text-green-600" />
            <h2 className="text-lg font-semibold">
              Expected Productivity
            </h2>
          </div>

          <h1 className="text-5xl font-bold text-green-600">
            {productivity ? `${productivity}%` : "N/A"}
          </h1>

          <p className="mt-3 text-gray-500">
            Expected productivity improvement after AI adoption.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow">
          <div className="mb-4 flex items-center gap-3">
            <DollarSign className="text-blue-600" />
            <h2 className="text-lg font-semibold">
              Estimated ROI
            </h2>
          </div>

          <h1 className="text-5xl font-bold text-blue-600">
            {analysis?.roi?.expectedROI
              ? `${analysis.roi.expectedROI}%`
              : "N/A"}
          </h1>

          <p className="mt-3 text-gray-500">
            Estimated return after implementing AI solutions.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow">
          <div className="mb-4 flex items-center gap-3">
            <Sparkles className="text-purple-600" />
            <h2 className="text-lg font-semibold">
              AI Adoption Score
            </h2>
          </div>

          <h1 className="text-5xl font-bold text-purple-600">
            {analysis?.aiScore
              ? `${analysis.aiScore}/100`
              : "N/A"}
          </h1>

          <p className="mt-3 text-gray-500">
            AI readiness based on company infrastructure and workforce.
          </p>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentActivity
          activities={dashboard.activities}
        />

        <AdminProfile />
      </div>
    </div>

    
  );
  <RecentActivity
  activities={dashboard?.activities || []}
/>
}

