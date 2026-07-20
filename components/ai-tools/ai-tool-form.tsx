"use client";

import { useState } from "react";
import toast from "react-hot-toast";


export default function AIToolForm(){


const [form,setForm]=useState({

name:"",
category:"",
description:"",
monthlyCost:"",
departments:""

});



async function handleSubmit(
e:React.FormEvent
){

e.preventDefault();


const response =
await fetch(
"/api/ai-tools",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

...form,

departments:
form.departments
.split(",")

})

}

);



if(response.ok){

toast.success(
"AI Tool Added"
);


setForm({

name:"",
category:"",
description:"",
monthlyCost:"",
departments:""

});


window.location.reload();


}
else{

toast.error(
"Failed to add tool"
);

}


}




return(

<form
onSubmit={handleSubmit}
className="bg-white rounded-xl shadow p-6 space-y-4"
>


<h2 className="text-xl font-bold">
Add AI Tool
</h2>



<input

className="border rounded-lg p-3 w-full"

placeholder="Tool Name"

value={form.name}

onChange={
e=>setForm({
...form,
name:e.target.value
})
}

/>



<input

className="border rounded-lg p-3 w-full"

placeholder="Category"

value={form.category}

onChange={
e=>setForm({
...form,
category:e.target.value
})
}

/>



<textarea

className="border rounded-lg p-3 w-full"

placeholder="Description"

value={form.description}

onChange={
e=>setForm({
...form,
description:e.target.value
})
}

/>



<input

className="border rounded-lg p-3 w-full"

placeholder="Monthly Cost"

type="number"

value={form.monthlyCost}

onChange={
e=>setForm({
...form,
monthlyCost:e.target.value
})
}

/>



<input

className="border rounded-lg p-3 w-full"

placeholder="Departments (comma separated)"

value={form.departments}

onChange={
e=>setForm({
...form,
departments:e.target.value
})
}

/>



<button

className="bg-slate-900 text-white px-5 py-3 rounded-lg"

>

Add AI Tool

</button>



</form>

);


}