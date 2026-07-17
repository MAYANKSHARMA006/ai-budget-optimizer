interface Department {
  id: string;
  name: string;
  manager: string;
  employees: number;
  budget: number;
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

            <th className="p-4 text-left">Department</th>

            <th className="p-4 text-left">Manager</th>

            <th className="p-4 text-left">Employees</th>

            <th className="p-4 text-left">Budget</th>

          </tr>

        </thead>

        <tbody>

          {departments.map((department) => (
            <tr key={department.id} className="border-t">

              <td className="p-4">{department.name}</td>

              <td className="p-4">{department.manager}</td>

              <td className="p-4">{department.employees}</td>

              <td className="p-4">${department.budget}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}