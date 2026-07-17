"use client";

import EmployeeForm from "@/components/employees/employee-form";
import EmployeeTable from "@/components/employees/employee-table";
import { useEmployees } from "@/hooks/useEmployees";

export default function EmployeesPage() {
  const {
    employees,
    addEmployee,
    loading,
  } = useEmployees();

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Employees
        </h1>

        <p className="text-gray-500">
          Manage your workforce.
        </p>

      </div>

      <EmployeeForm onSubmit={addEmployee} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <EmployeeTable employees={employees} />
      )}

    </div>
  );
}