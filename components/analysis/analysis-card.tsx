interface Props {
  analysis: any;
}


export default function AnalysisCard({
  analysis,
}: Props) {


return (

<div className="space-y-6">


{/* Summary */}

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-2xl font-bold">
AI Strategy Summary
</h2>


<p className="mt-3 text-gray-600 leading-7">
{analysis.summary}
</p>

</div>




{/* Recommended Tools */}

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-2xl font-bold">
Recommended AI Tools
</h2>


<div className="mt-4 space-y-3">


{
analysis.recommendedTools?.map(
(tool:any,index:number)=>(

<div
key={index}
className="border rounded-lg p-4"
>

<h3 className="font-semibold text-lg">
{tool.name}
</h3>


<p className="text-gray-600">
{tool.reason}
</p>


<p className="mt-2 text-sm">
Estimated Cost:
₹{tool.estimatedCost}
</p>


</div>

))
}


</div>

</div>





{/* Department Allocation */}

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-2xl font-bold">
Department Allocation
</h2>


<div className="mt-4 space-y-3">


{
analysis.departmentAllocation?.map(
(item:any,index:number)=>(

<div
key={index}
className="border rounded-lg p-4"
>

<p>
<b>Department:</b> {item.department}
</p>

<p>
<b>Tool:</b> {item.tool}
</p>

<p>
<b>Licenses:</b> {item.licenses}
</p>


</div>

))
}


</div>

</div>





{/* Budget */}

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-2xl font-bold">
Budget Plan
</h2>


<p className="mt-3">
Monthly Budget:
₹{analysis.budgetPlan?.monthlyBudget}
</p>


<p>
Annual Budget:
₹{analysis.budgetPlan?.annualBudget}
</p>


<p>
Savings:
₹{analysis.budgetPlan?.savings}
</p>


</div>





{/* ROI */}

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-2xl font-bold">
ROI Prediction
</h2>


<p className="mt-3">
Productivity Gain:
{analysis.roi?.productivityGain}%
</p>


<p>
Expected ROI:
{analysis.roi?.expectedROI}%
</p>


</div>





{/* Timeline */}

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-2xl font-bold">
Implementation Timeline
</h2>


<ul className="mt-4 list-disc ml-6">

{
analysis.timeline?.map(
(step:string,index:number)=>(

<li key={index}>
{step}
</li>

))
}

</ul>


</div>


</div>

);

}