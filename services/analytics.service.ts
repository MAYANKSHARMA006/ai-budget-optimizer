import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function getAnalytics() {
  const employees = await getDocs(
    collection(db, "employees")
  );

  const departments = await getDocs(
    collection(db, "departments")
  );

  const recommendations = await getDocs(
    collection(db, "recommendations")
  );

  let monthlyBudget = 0;

  recommendations.docs.forEach((doc) => {
    monthlyBudget += doc.data().monthlyCost || 0;
  });

  return {
    totalEmployees: employees.size,
    totalDepartments: departments.size,
    totalMonthlyBudget: monthlyBudget,
    totalYearlyBudget: monthlyBudget * 12,
  };
}