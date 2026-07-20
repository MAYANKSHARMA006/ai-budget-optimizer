"use client";


import {useState} from "react";

import toast from "react-hot-toast";



export default function GenerateBudgetButton(){


const [loading,setLoading]=useState(false);



async function generate(){


setLoading(true);



const toastId =
toast.loading(
"Optimizing Budget..."
);



const res =
await fetch(
"/api/budget",
{
method:"POST"
}
);



toast.dismiss(toastId);



if(res.ok){


toast.success(
"Budget Optimized"
);


window.location.reload();


}

else{


toast.error(
"Failed"
);


}



setLoading(false);



}





return(

<button

onClick={generate}

disabled={loading}

className="bg-slate-900 text-white px-5 py-3 rounded-lg"

>


{
loading
?
"Optimizing..."
:
"Generate Budget Optimization"
}


</button>

);


}