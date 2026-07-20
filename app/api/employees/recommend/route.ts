import {NextResponse} from "next/server";

import {adminDb} from "@/lib/firebaseAdmin";

import {
recommendAITools
}
from "@/engine/employeeRecommendation";



export async function POST(){


try{


const snapshot =
await adminDb
.collection("employees")
.get();



const batch =
adminDb.batch();



snapshot.docs.forEach(
(doc)=>{


const employee =
doc.data();



const recommendation =
recommendAITools(

employee.department,

employee.role

);



const ref =
adminDb
.collection("employees")
.doc(doc.id);



batch.update(

ref,

{

recommendedTools:
recommendation.tools,


monthlyCost:
recommendation.monthlyCost,


reason:
recommendation.reason

}

);


}

);



await batch.commit();



return NextResponse.json({

success:true

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
