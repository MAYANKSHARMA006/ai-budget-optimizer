"use client";


interface Props {

employees:number;

departments:number;

aiTools:number;

productivity:number;

}



export default function AIReadinessCard({

employees,

departments,

aiTools,

productivity

}:Props){



const score =
Math.min(
100,
(
(employees * 0.2)
+
(departments * 10)
+
(aiTools * 15)
+
(productivity)
)
);



let level="Beginner";


if(score > 75){

level="Advanced";

}
else if(score > 45){

level="Intermediate";

}



return(


<div className="bg-white rounded-xl shadow p-6">


<h2 className="text-xl font-bold">

AI Readiness Score

</h2>



<div className="mt-6 flex items-center gap-8">


<div className="h-32 w-32 rounded-full border-8 flex items-center justify-center">


<span className="text-3xl font-bold">

{Math.round(score)}

</span>


</div>




<div>


<p className="text-gray-500">
AI Maturity Level
</p>


<h3 className="text-2xl font-bold">

{level}

</h3>



<p className="mt-4 text-gray-500">

Expected Productivity Gain

</p>


<h3 className="text-xl font-bold text-green-600">

{productivity}%

</h3>


</div>


</div>


</div>


);


}