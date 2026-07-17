import {
  LayoutDashboard,
  Building2,
  Users,
  UserCog,
  Bot,
  DollarSign,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

export const dashboardMenu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Company",
    href: "/company",
    icon: Building2,
  },
  {
    title: "Departments",
    href: "/departments",
    icon: Users,
  },
  {
    title: "Employees",
    href: "/employees",
    icon: UserCog,
  },
  {
    title: "AI Tools",
    href: "/ai-tools",
    icon: Bot,
  },
  {
    title: "Budget Planner",
    href: "/budget",
    icon: DollarSign,
  },
  {
    title: "Recommendations",
    href: "/recommendations",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];