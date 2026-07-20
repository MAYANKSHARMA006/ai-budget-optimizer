interface Props {

analysis:any;

}


export default function RecommendationCard({
analysis
}:Props){


if(!analysis){

return null;

}



return(

<div className="bg-white rounded-xl shadow p-6 space-y-6">


<h2 className="text-2xl font-bold">
AI Recommendation
</h2>



<p className="text-gray-600">
{analysis.summary}
</p>




<div>

<h3 className="text-lg font-semibold mb-3">
Recommended AI Tools
</h3>


<div className="grid md:grid-cols-2 gap-4">


{
analysis.recommendedTools?.map(
(tool:any,index:number)=>(


<div

key={index}

className="border rounded-lg p-4"

>


<h4 className="font-bold">
{tool.name}
</h4>


<p className="text-sm text-gray-500 mt-1">
{tool.reason}
</p>


<p className="mt-3 font-semibold">
₹{tool.estimatedCost}/month
</p>


</div>


)

)

}



</div>


</div>





<div>


<h3 className="text-lg font-semibold mb-3">
Department Allocation
</h3>



<div className="space-y-3">


{

analysis.departmentAllocation?.map(

(item:any,index:number)=>(


<div

key={index}

className="border rounded-lg p-4 flex justify-between"

>


<div>

<p className="font-semibold">
{item.department}
</p>


<p className="text-gray-500">
{item.tool}
</p>

</div>



<p>

{item.licenses} Licenses

</p>


</div>


)

)

}


</div>


</div>





</div>

);


}