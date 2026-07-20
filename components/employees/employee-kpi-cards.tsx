interface Props {

employees:any[];

}


export default function EmployeeKPICards({
employees
}:Props){


const totalEmployees =
employees.length;



const assignedEmployees =
employees.filter(
(employee)=>
employee.recommendedTools?.length > 0
).length;



const totalCost =
employees.reduce(
(sum,employee)=>

sum + Number(employee.monthlyCost || 0)

,0);



return(

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">


<div className="bg-white rounded-xl shadow p-6">


<p className="text-gray-500">
Total Employees
</p>


<h2 className="text-3xl font-bold mt-2">
{totalEmployees}
</h2>


</div>




<div className="bg-white rounded-xl shadow p-6">


<p className="text-gray-500">
AI Enabled Employees
</p>


<h2 className="text-3xl font-bold mt-2 text-green-600">
{assignedEmployees}
</h2>


</div>




<div className="bg-white rounded-xl shadow p-6">


<p className="text-gray-500">
Monthly AI Cost
</p>


<h2 className="text-3xl font-bold mt-2 text-blue-600">

₹{totalCost.toLocaleString()}

</h2>


</div>


</div>

);


}