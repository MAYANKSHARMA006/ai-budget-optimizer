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



async function seedEmployees(){


const employees=[


{
name:"Rahul Sharma",
email:"rahul@company.com",
role:"Software Developer",
department:"IT",
salary:80000,
aiSkillLevel:"Intermediate",
productivityScore:78
},


{
name:"Priya Singh",
email:"priya@company.com",
role:"Marketing Executive",
department:"Marketing",
salary:60000,
aiSkillLevel:"Beginner",
productivityScore:65
},


{
name:"Amit Verma",
email:"amit@company.com",
role:"HR Manager",
department:"HR",
salary:70000,
aiSkillLevel:"Intermediate",
productivityScore:75
},


{
name:"Sneha Patel",
email:"sneha@company.com",
role:"Data Analyst",
department:"Analytics",
salary:90000,
aiSkillLevel:"Advanced",
productivityScore:88
}


];



for(const employee of employees){


await db
.collection("employees")
.add(employee);


console.log(
employee.name,
"added"
);


}



console.log(
"Employees seeded successfully"
);


process.exit(0);


}



seedEmployees();