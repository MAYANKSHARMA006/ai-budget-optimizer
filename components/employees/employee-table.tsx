interface Props {

employees:any[];

}


export default function EmployeeTable({
employees
}:Props){


return (

<div className="bg-white rounded-xl shadow overflow-hidden">


<table className="w-full">


<thead className="bg-gray-100">


<tr>


<th className="p-4 text-left">
Name
</th>


<th className="p-4 text-left">
Department
</th>


<th className="p-4 text-left">
Role
</th>


<th className="p-4 text-left">
AI Tools
</th>


<th className="p-4 text-left">
Monthly Cost
</th>


</tr>


</thead>



<tbody>


{

employees.length === 0 ? (


<tr>

<td
colSpan={5}
className="p-6 text-center text-gray-500"
>

No employees added yet.

</td>

</tr>


)

:

employees.map(
(employee)=>(


<tr
key={employee.id}
className="border-t"
>


<td className="p-4">

{employee.name || "Unknown"}

</td>



<td className="p-4">

{employee.department || "-"}

</td>



<td className="p-4">

{employee.role || "-"}

</td>



<td className="p-4">

{

employee.recommendedTools?.length > 0

?

employee.recommendedTools.join(", ")

:

"No AI Assigned"

}

</td>



<td className="p-4">

₹
{
Number(employee.monthlyCost || 0)
.toLocaleString()
}

</td>



</tr>


)

)


}


</tbody>


</table>


</div>

);


}