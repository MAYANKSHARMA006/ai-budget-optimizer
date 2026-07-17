"use client";

import { useEffect, useState } from "react";

import {
  createDepartment,
  getDepartments,
} from "@/lib/firestore/departments";

export function useDepartments() {
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadDepartments() {
    const data = await getDepartments();

    setDepartments(data);

    setLoading(false);
  }

  async function addDepartment(data: any) {
    await createDepartment(data);

    loadDepartments();
  }

  useEffect(() => {
    loadDepartments();
  }, []);

  return {
    departments,
    addDepartment,
    loading,
  };
}