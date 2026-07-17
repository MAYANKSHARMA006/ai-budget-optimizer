interface Props {
  employees: any[];
}

export default function EmployeeTable({
  employees,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow mt-8 overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">Name</th>

            <th className="p-4 text-left">Email</th>

            <th className="p-4 text-left">Department</th>

            <th className="p-4 text-left">Designation</th>

            <th className="p-4 text-left">Salary</th>

          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (
            <tr key={employee.id} className="border-t">

              <td className="p-4">{employee.name}</td>

              <td className="p-4">{employee.email}</td>

              <td className="p-4">{employee.department}</td>

              <td className="p-4">{employee.designation}</td>

              <td className="p-4">${employee.salary}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}