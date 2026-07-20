import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";


// GET ALL AI TOOLS

export async function GET(){


try{


const snapshot =
await adminDb
.collection("aiTools")
.orderBy(
"createdAt",
"desc"
)
.get();



const tools =
snapshot.docs.map(
(doc)=>({

id:doc.id,
...doc.data()

})
);



return NextResponse.json(
tools
);



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





// ADD AI TOOL

export async function POST(
request:Request
){


try{


const body =
await request.json();



const doc =
await adminDb
.collection("aiTools")
.add({

name:body.name,

category:body.category,

description:body.description,

monthlyCost:Number(
body.monthlyCost
),

departments:
body.departments,

createdAt:
new Date()

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
