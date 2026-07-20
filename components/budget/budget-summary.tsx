interface Props {

budget:any;

}


export default function BudgetSummary({
budget
}:Props){


return (

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">


<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Current Budget
</p>

<h2 className="text-3xl font-bold mt-2">
₹{budget.currentBudget?.toLocaleString()}
</h2>

</div>



<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Optimized Budget
</p>

<h2 className="text-3xl font-bold mt-2">
₹{budget.optimizedBudget?.toLocaleString()}
</h2>

</div>



<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Monthly Savings
</p>

<h2 className="text-3xl font-bold mt-2 text-green-600">
₹{budget.monthlySavings?.toLocaleString()}
</h2>

</div>



<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Annual Savings
</p>

<h2 className="text-3xl font-bold mt-2 text-blue-600">
₹{budget.annualSavings?.toLocaleString()}
</h2>

</div>


</div>

);


}