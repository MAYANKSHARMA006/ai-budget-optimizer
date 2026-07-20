"use client";


import {useState} from "react";

import toast from "react-hot-toast";



export default function EmployeeForm(){


const [loading,setLoading]=useState(false);



async function submit(e:any){


e.preventDefault();


setLoading(true);



const form =
new FormData(e.target);



const data={


name:
form.get("name"),


email:
form.get("email"),


department:
form.get("department"),


role:
form.get("role")


};



const res =
await fetch(
"/api/employees",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:
JSON.stringify(data)

}

);



if(res.ok){

toast.success(
"Employee Added"
);


e.target.reset();


}

else{


toast.error(
"Failed"
);


}



setLoading(false);



}





return(

<form

onSubmit={submit}

className="bg-white rounded-xl shadow p-6 space-y-4"

>


<h2 className="text-xl font-bold">
Add Employee
</h2>



<input

name="name"

placeholder="Employee Name"

className="border p-3 rounded w-full"

/>



<input

name="email"

placeholder="Email"

className="border p-3 rounded w-full"

/>



<input

name="department"

placeholder="Department"

className="border p-3 rounded w-full"

/>



<input

name="role"

placeholder="Role"

className="border p-3 rounded w-full"

/>



<button

disabled={loading}

className="bg-slate-900 text-white px-5 py-3 rounded-lg"

>

{
loading
?
"Adding..."
:
"Add Employee"
}

</button>


</form>

);


}