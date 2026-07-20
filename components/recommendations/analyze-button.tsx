"use client";

import { useState } from "react";
import toast from "react-hot-toast";


export default function AnalyzeButton(){


const [loading,setLoading]=useState(false);



async function analyze(){


try{


setLoading(true);



const res =
await fetch(
"/api/analyze",
{
method:"POST"
}
);



const data =
await res.json();



if(data.success){

toast.success(
"AI analysis completed"
);

window.location.reload();

}

else{

toast.error(
data.error || "Analysis failed"
);

}


}
catch(error){

toast.error(
"Something went wrong"
);

}

finally{

setLoading(false);

}


}




return (

<button

onClick={analyze}

disabled={loading}

className="
rounded-lg
bg-purple-600
px-5
py-3
text-white
disabled:opacity-50
"

>

{

loading

?

"Analyzing AI Data..."

:

"Generate AI Analysis"

}


</button>

);


}