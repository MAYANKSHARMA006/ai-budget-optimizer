interface Budget {

  currentBudget:number;
  optimizedBudget:number;
  monthlySavings:number;
  annualSavings:number;
  expectedROI:number;
  productivityIncrease:number;

}


interface Props {

  budget: Budget | null;

}



export default function BudgetCard({
  budget,
}: Props) {


if(!budget){

return (

<div className="bg-white rounded-xl shadow p-6 text-gray-500">

No budget analysis available

</div>

);

}



return (

<div className="grid gap-6 md:grid-cols-3">


{/* Current Budget */}

<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500 text-sm">
Current AI Budget
</p>


<h2 className="text-3xl font-bold mt-2">

₹{budget.currentBudget.toLocaleString()}

</h2>


<p className="text-sm text-gray-400 mt-2">
Monthly spending
</p>


</div>



{/* Optimized Budget */}

<div className="bg-white rounded-xl shadow p-6">


<p className="text-gray-500 text-sm">
Optimized Budget
</p>


<h2 className="text-3xl font-bold mt-2 text-green-600">

₹{budget.optimizedBudget.toLocaleString()}

</h2>


<p className="text-sm text-gray-400 mt-2">
AI recommended allocation
</p>


</div>




{/* Savings */}

<div className="bg-white rounded-xl shadow p-6">


<p className="text-gray-500 text-sm">
Monthly Savings
</p>


<h2 className="text-3xl font-bold mt-2">

₹{budget.monthlySavings.toLocaleString()}

</h2>


<p className="text-sm text-gray-400 mt-2">
Cost optimization

</p>


</div>



{/* Annual Savings */}

<div className="bg-white rounded-xl shadow p-6">


<p className="text-gray-500 text-sm">
Annual Savings
</p>


<h2 className="text-3xl font-bold mt-2">

₹{budget.annualSavings.toLocaleString()}

</h2>


</div>



{/* ROI */}

<div className="bg-white rounded-xl shadow p-6">


<p className="text-gray-500 text-sm">
Expected ROI
</p>


<h2 className="text-3xl font-bold mt-2">

{budget.expectedROI}%

</h2>


</div>




{/* Productivity */}

<div className="bg-white rounded-xl shadow p-6">


<p className="text-gray-500 text-sm">
Productivity Increase
</p>


<h2 className="text-3xl font-bold mt-2">

{budget.productivityIncrease}%

</h2>


</div>



</div>

);

}