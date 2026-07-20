import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getDashboardStats() {
  const employeeSnapshot = await getDocs(collection(db, "employees"));
  const companySnapshot = await getDocs(collection(db, "companies"));

  const employees = employeeSnapshot.docs.map((doc) => doc.data());
  const companies = companySnapshot.docs.map((doc) => doc.data());

  const employeeCount = employees.length;

  const departments = new Set(
    employees.map((e: any) => e.department)
  ).size;

  const totalBudget = companies.reduce(
    (sum: number, company: any) =>
      sum + (company.aiBudget || 0),
    0
  );

  const aiUsers = employees.filter(
    (e: any) => e.usesAI
  ).length;

  return {
    employeeCount,
    departments,
    totalBudget,
    aiUsers,
  };
}