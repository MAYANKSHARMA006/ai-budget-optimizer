"use client";

import { useState } from "react";


export default function Analyze() {


const [form,setForm] = useState({

company:"",
industry:"",
employees:"",
currentAI:"",
budget:""

});


const [result,setResult] = useState("");

const [loading,setLoading] = useState(false);



function handleChange(e:any){

setForm({

...form,

[e.target.name]:e.target.value

});

}



async function handleAnalyze(){


setLoading(true);


const response = await fetch("/api/analyze",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(form)

});


const data = await response.json();


setResult(data.result);


setLoading(false);


}



return (

<div className="p-10 max-w-3xl">


<h1 className="text-4xl font-bold">
AI Budget Optimizer
</h1>


<p className="mt-2 text-gray-600">
Analyze your company AI requirements
</p>



<div className="mt-8 space-y-4">


<input

name="company"

placeholder="Company Name"

onChange={handleChange}

className="border p-3 w-full rounded"

/>



<input

name="industry"

placeholder="Industry"

onChange={handleChange}

className="border p-3 w-full rounded"

/>



<input

name="employees"

placeholder="Number of Employees"

type="number"

onChange={handleChange}

className="border p-3 w-full rounded"

/>



<input

name="currentAI"

placeholder="Current AI Usage"

onChange={handleChange}

className="border p-3 w-full rounded"

/>



<input

name="budget"

placeholder="Monthly AI Budget (optional)"

onChange={handleChange}

className="border p-3 w-full rounded"

/>



<button

onClick={handleAnalyze}

className="bg-black text-white px-6 py-3 rounded"

>

{
loading 
?
"Generating..."
:
"Generate AI Strategy"
}

</button>


</div>




<div className="mt-10 whitespace-pre-wrap bg-gray-100 p-6 rounded">

{result}

</div>


</div>

)

}