import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";


dotenv.config({
  path: ".env.local",
});


const firebaseServiceAccount =
process.env.FIREBASE_SERVICE_ACCOUNT;


if(!firebaseServiceAccount){

throw new Error(
"FIREBASE_SERVICE_ACCOUNT missing"
);

}



const serviceAccount =
JSON.parse(firebaseServiceAccount);



if(!getApps().length){

initializeApp({

credential:
cert(serviceAccount)

});

}



const db=getFirestore();



async function seedRecommendations(){


const recommendations=[


{

department:"Marketing",

employees:25,

recommendedTool:
"ChatGPT Enterprise",

licenses:15,

monthlyCost:900,

productivityGain:35,

roi:42,

reason:
"Marketing team handles content creation, campaigns and customer analysis."

},



{

department:"IT",

employees:15,

recommendedTool:
"GitHub Copilot",

licenses:10,

monthlyCost:190,

productivityGain:45,

roi:55,

reason:
"Developers can reduce coding and debugging time."

},



{

department:"HR",

employees:8,

recommendedTool:
"Gemini Advanced",

licenses:5,

monthlyCost:100,

productivityGain:25,

roi:30,

reason:
"HR can automate documentation and employee analysis."

}


];



for(const recommendation of recommendations){


await db
.collection("recommendations")
.add({

...recommendation,

createdAt:
new Date()

});


console.log(
`${recommendation.department} recommendation added`
);


}



console.log(
"Recommendations seeded successfully"
);



process.exit(0);


}



seedRecommendations();