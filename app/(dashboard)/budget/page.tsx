import { adminDb } from "@/lib/firebaseAdmin";

import GenerateBudgetButton from "@/components/budget/generate-budget-button";

import BudgetSummary from "@/components/budget/budget-summary";

import DepartmentBudgetChart from "@/components/budget/department-budget-chart";



async function getLatestBudget(){


const snapshot =
await adminDb
.collection("budgets")
.orderBy(
"createdAt",
"desc"
)
.limit(1)
.get();



if(snapshot.empty){

return null;

}



return snapshot.docs[0].data();


}




export default async function BudgetPage(){


const budget =
await getLatestBudget();



return (

<div className="space-y-8">


<div>


<h1 className="text-4xl font-bold">
AI Budget Optimization
</h1>


<p className="text-gray-500 mt-2">
Optimize AI spending across departments.
</p>


</div>



<GenerateBudgetButton />



{

budget ?


<>


<BudgetSummary

budget={budget}

/>



<DepartmentBudgetChart

employeeAnalysis={
budget.employeeAnalysis || []
}

/>





</>


:


<div className="bg-white rounded-xl shadow p-6 text-gray-500">

No budget analysis generated yet.

</div>


}



</div>

);


}