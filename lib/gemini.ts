import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});



export async function generateAIAnalysis(
  companyData: any
) {

  try {


    const prompt = `

You are an AI Budget Optimization Consultant.

Analyze this company:

Company Name:
${companyData.company}

Industry:
${companyData.industry}

Employees:
${companyData.employees}

Departments:
${JSON.stringify(companyData.departments)}

Current AI Tools:
${JSON.stringify(companyData.currentAI)}


Create an AI adoption strategy.

Return ONLY JSON.

Format:

{
"summary":"",
"recommendedTools":[
 {
  "name":"",
  "reason":"",
  "estimatedCost":0
 }
],
"departmentAllocation":[
 {
  "department":"",
  "tool":"",
  "licenses":0
 }
],
"budgetPlan":{
 "monthlyBudget":0,
 "annualBudget":0,
 "savings":0
},
"roi":{
 "productivityGain":0,
 "expectedROI":0
},
"timeline":[
 ""
]
}

`;



    const result =
      await ai.models.generateContent({

        model:
        "gemini-2.0-flash-lite",

        contents:
        prompt,

      });



    let response =
      result.text;



    if (!response) {

      throw new Error(
        "Gemini returned empty response"
      );

    }



    response =
      response
      .replace(/```json/g,"")
      .replace(/```/g,"")
      .trim();



    const jsonStart =
      response.indexOf("{");


    const jsonEnd =
      response.lastIndexOf("}");



    if(
      jsonStart === -1 ||
      jsonEnd === -1
    ){

      throw new Error(
        "Invalid Gemini JSON response"
      );

    }



    response =
      response.substring(
        jsonStart,
        jsonEnd + 1
      );



    return JSON.parse(response);



  } catch(error:any){


    console.log(
      "Gemini Error:",
      error
    );



    if(
      error?.status === 429 ||
      error?.message?.includes(
        "RESOURCE_EXHAUSTED"
      )
    ){

      return {

        summary:
        "Gemini quota exceeded",

        recommendedTools:[],

        departmentAllocation:[],

        budgetPlan:{
          monthlyBudget:0,
          annualBudget:0,
          savings:0
        },

        roi:{
          productivityGain:0,
          expectedROI:0
        },

        timeline:[]

      };

    }



    throw error;

  }

}