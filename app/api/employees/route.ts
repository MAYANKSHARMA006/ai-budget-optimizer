import {NextResponse} from "next/server";

import {adminDb} from "@/lib/firebaseAdmin";



export async function POST(
req:Request
){


try{


const body =
await req.json();



const doc =
await adminDb
.collection("employees")
.add({


...body,


recommendedTools:[],


monthlyCost:0,


createdAt:new Date()


});



return NextResponse.json({

success:true,

id:doc.id

});


}


catch(error:any){


return NextResponse.json(

{
error:error.message
},

{
status:500
}

);


}


}
