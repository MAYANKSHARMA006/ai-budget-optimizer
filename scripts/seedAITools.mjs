import dotenv from "dotenv";

dotenv.config({
  path: ".env.local"
});
import { cert, initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";


const serviceAccount =
JSON.parse(
process.env.FIREBASE_SERVICE_ACCOUNT
);



if(!getApps().length){

initializeApp({

credential:
cert(serviceAccount)

});

}



const db =
getFirestore();



const aiTools = [


{
name:"ChatGPT Enterprise",

provider:"OpenAI",

category:"Productivity AI",

description:
"Enterprise AI assistant for writing, analysis, automation and knowledge work.",

monthlyCost:2500,

departments:[
"Marketing",
"Finance",
"HR",
"Management"
]

},



{
name:"Microsoft Copilot",

provider:"Microsoft",

category:"Office AI",

description:
"AI assistant integrated with Microsoft 365 applications.",

monthlyCost:2200,

departments:[
"Finance",
"HR",
"Operations"
]

},



{
name:"Gemini Enterprise",

provider:"Google",

category:"Generative AI",

description:
"Google AI assistant for productivity and business workflows.",

monthlyCost:2000,

departments:[
"Marketing",
"Research",
"Analytics"
]

},



{
name:"Claude Team",

provider:"Anthropic",

category:"AI Assistant",

description:
"Advanced AI assistant for reasoning and document analysis.",

monthlyCost:1800,

departments:[
"Research",
"Legal",
"Management"
]

},



{
name:"GitHub Copilot",

provider:"GitHub",

category:"Developer AI",

description:
"AI coding assistant for software development teams.",

monthlyCost:1200,

departments:[
"IT",
"Development"
]

},



{
name:"Midjourney",

provider:"Midjourney",

category:"Design AI",

description:
"AI image generation tool for creative teams.",

monthlyCost:1000,

departments:[
"Design",
"Marketing"
]

}



];





async function seed(){


console.log(
"Adding AI tools..."
);



for(const tool of aiTools){


await db
.collection("aiTools")
.add({

...tool,

createdAt:
new Date()

});


console.log(
"Added:",
tool.name
);


}



console.log(
"AI Tools Seed Completed"
);



process.exit(0);


}



seed();