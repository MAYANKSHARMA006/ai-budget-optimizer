import DepartmentForm from "@/components/departments/department-form";
import DepartmentTable from "@/components/departments/department-table";
import { adminDb } from "@/lib/firebaseAdmin";

async function getDepartments() {
  try {
    const snapshot = await adminDb
      .collection("departments")
      .get();

    return snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        name: data.name || "Unknown",
        manager: data.manager || "Not Assigned",
        employees: data.employees || 0,
        monthlyBudget: data.monthlyBudget || 0,
      };
    });

  } catch (error) {
    console.log("Department fetch error:", error);
    return [];
  }
}


export default async function DepartmentsPage() {

  const departments = await getDepartments();

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Department Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage departments and AI readiness.
        </p>
      </div>


      <DepartmentForm />


      <DepartmentTable
        departments={departments}
      />


    </div>
  );
}