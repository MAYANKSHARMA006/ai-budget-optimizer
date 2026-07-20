interface Props {
  analysis:any;
}


export default function AIKPICards({
  analysis
}:Props){


const cards = [

{
title:"AI Readiness Score",
value:
analysis?.roi?.productivityGain
? `${analysis.roi.productivityGain}%`
: "0%",
description:"Estimated AI adoption readiness"
},


{
title:"Expected ROI",
value:
analysis?.roi?.expectedROI
? `${analysis.roi.expectedROI}%`
: "0%",
description:"Predicted return on investment"
},


{
title:"Monthly AI Budget",
value:
analysis?.budgetPlan?.monthlyBudget
? `₹${analysis.budgetPlan.monthlyBudget.toLocaleString()}`
: "₹0",
description:"Estimated monthly AI spending"
},


{
title:"AI Tools Recommended",
value:
analysis?.recommendedTools?.length || 0,
description:"Suggested AI solutions"
}


];



return (

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">


{
cards.map(
(card,index)=>(


<div
key={index}
className="bg-white rounded-xl shadow p-6"
>


<p className="text-gray-500 text-sm">
{card.title}
</p>


<h2 className="text-3xl font-bold mt-3">
{card.value}
</h2>


<p className="text-xs text-gray-400 mt-2">
{card.description}
</p>


</div>


))
}



</div>

);


}