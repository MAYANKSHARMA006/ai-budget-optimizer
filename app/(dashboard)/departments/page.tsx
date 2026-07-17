"use client";

import DepartmentForm from "@/components/departments/department-form";
import DepartmentTable from "@/components/departments/department-table";
import { useDepartments } from "@/hooks/useDepartments";

export default function DepartmentsPage() {
  const {
    departments,
    addDepartment,
    loading,
  } = useDepartments();

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Departments
          </h1>

          <p className="text-gray-500 mt-2">
            Create and manage all company departments.
          </p>
        </div>

      </div>

      {/* Department Form */}

      <DepartmentForm onSubmit={addDepartment} />

      {/* Department Table */}

      {loading ? (
        <div className="bg-white rounded-xl shadow p-10 text-center">
          <p className="text-gray-500">
            Loading departments...
          </p>
        </div>
      ) : (
        <DepartmentTable
          departments={departments}
        />
      )}

    </div>
  );
}