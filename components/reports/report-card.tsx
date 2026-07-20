interface ReportData {

  totalEmployees:number;
  totalDepartments:number;
  totalAITools:number;
  monthlyBudget:number;
  expectedROI:number;
  savings:number;

}


interface Props {

 report:ReportData;

}



export default function ReportCard({
 report,
}:Props){


return (

<div className="grid gap-6 md:grid-cols-3">


<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Employees
</p>

<h2 className="text-3xl font-bold mt-2">
{report.totalEmployees}
</h2>

</div>



<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Departments
</p>

<h2 className="text-3xl font-bold mt-2">
{report.totalDepartments}
</h2>

</div>



<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
AI Tools
</p>

<h2 className="text-3xl font-bold mt-2">
{report.totalAITools}
</h2>

</div>




<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Monthly AI Budget
</p>

<h2 className="text-3xl font-bold mt-2">
₹{report.monthlyBudget.toLocaleString()}
</h2>

</div>




<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Savings
</p>

<h2 className="text-3xl font-bold mt-2">
₹{report.savings.toLocaleString()}
</h2>

</div>




<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Expected ROI
</p>

<h2 className="text-3xl font-bold mt-2">
{report.expectedROI}%
</h2>

</div>



</div>

);

}