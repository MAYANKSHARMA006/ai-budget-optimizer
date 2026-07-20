import {NextResponse} from "next/server";

import {adminDb} from "@/lib/firebaseAdmin";

import {
optimizeBudget
}
from "@/engine/budgetOptimizer";



export async function POST(){


try{


const departmentsSnapshot =
await adminDb
.collection("departments")
.get();



const toolsSnapshot =
await adminDb
.collection("aiTools")
.get();



const employeesSnapshot =
await adminDb
.collection("employees")
.get();





const departments =
departmentsSnapshot.docs.map(
doc=>doc.data()
);



const aiTools =
toolsSnapshot.docs.map(
doc=>doc.data()
);



const employees =
employeesSnapshot.docs.map(
doc=>doc.data()
);





const result =
optimizeBudget({

departments,

aiTools,

employees

});





const saved =
await adminDb
.collection("budgets")
.add({

...result,

createdAt:
new Date()

});





return NextResponse.json({

success:true,

data:result,

id:saved.id

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