"use client";

import { useEffect, useState } from "react";

import {
  createEmployee,
  getEmployees,
} from "@/lib/firestore/employees";

export function useEmployees() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadEmployees() {
    const data = await getEmployees();

    setEmployees(data);

    setLoading(false);
  }

  async function addEmployee(data: any) {
    await createEmployee(data);

    loadEmployees();
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  return {
    employees,
    addEmployee,
    loading,
  };
}