"use client";

interface Department {
  id: string;
  name: string;
  manager: string;
  employees: number;
  monthlyBudget?: number;
}

interface Props {
  departments: Department[];
}

export default function DepartmentTable({
  departments,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow mt-8 overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">
              Department
            </th>

            <th className="p-4 text-center">
              Manager
            </th>

            <th className="p-4 text-center">
              Employees
            </th>

            <th className="p-4 text-center">
              Monthly Budget
            </th>

            <th className="p-4 text-center">
              Status
            </th>
          </tr>
        </thead>


        <tbody>

          {departments.length === 0 ? (

            <tr>
              <td
                colSpan={5}
                className="p-6 text-center text-gray-500"
              >
                No departments found
              </td>
            </tr>

          ) : (

            departments.map((department) => (

              <tr
                key={department.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4 font-medium">
                  {department.name || "Unknown"}
                </td>


                <td className="p-4 text-center">
                  {department.manager || "Not Assigned"}
                </td>


                <td className="p-4 text-center">
                  {department.employees ?? 0}
                </td>


                <td className="p-4 text-center">
                  $
                  {(department.monthlyBudget ?? 0).toLocaleString()}
                </td>


                <td className="p-4 text-center">

                  <span className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-green-100
                    text-green-700
                  ">
                    Active
                  </span>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}