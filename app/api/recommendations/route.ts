import { NextResponse } from "next/server";

import {
runRecommendation
}
from "@/services/recommendationService";



export async function POST(){


try{


const id =
await runRecommendation();



return NextResponse.json({

success:true,

id

});


}

catch(error:any){


console.log(error);


return NextResponse.json({

error:error.message

},

{
status:500
}

);


}


}