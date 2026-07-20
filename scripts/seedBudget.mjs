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



async function seedBudget(){


const budgetData = {


currentBudget:250000,

optimizedBudget:180000,

monthlySavings:70000,

annualSavings:840000,

expectedROI:45,

productivityIncrease:35,


createdAt:new Date()


};



await db
.collection("budget")
.add(budgetData);



console.log(
"Budget data added successfully"
);



process.exit(0);


}



seedBudget();