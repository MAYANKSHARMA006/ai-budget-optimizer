import { adminDb } from "@/lib/firebaseAdmin";

import {
generateRecommendation
}
from "@/engine/recommendationEngine";



export async function runRecommendation(){



const companySnapshot =
await adminDb
.collection("companies")
.limit(1)
.get();



const departmentSnapshot =
await adminDb
.collection("departments")
.get();



const employeeSnapshot =
await adminDb
.collection("employees")
.get();



const toolSnapshot =
await adminDb
.collection("aiTools")
.get();




const company =
companySnapshot.docs[0]?.data();




const departments =
departmentSnapshot.docs.map(
doc=>doc.data()
);



const employees =
employeeSnapshot.docs.map(
doc=>doc.data()
);



const aiTools =
toolSnapshot.docs.map(
doc=>doc.data()
);




const result =
await generateRecommendation({

company,

departments,

employees,

aiTools

});




const saved =
await adminDb
.collection("recommendations")
.add({

company,

analysis:
result,

createdAt:
new Date()

});



return saved.id;


}