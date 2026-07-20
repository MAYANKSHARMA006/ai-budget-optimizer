"use client";


import toast from "react-hot-toast";



export default function GenerateEmployeeAI(){


async function generate(){


const toastId =
toast.loading(
"Assigning AI Tools..."
);



const res =
await fetch(
"/api/employees/recommend",
{
method:"POST"
}
);



toast.dismiss(toastId);



if(res.ok){


toast.success(
"AI Tools Assigned"
);


window.location.reload();


}

else{


toast.error(
"Failed"
);


}


}



return(

<button

onClick={generate}

className="bg-blue-600 text-white px-5 py-3 rounded-lg"

>

Generate AI Mapping

</button>

);


}