import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


export async function generateAIAnalysis(companyData:any){

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

Current AI Usage:
${companyData.currentAI}


Provide a detailed AI adoption plan.

Include:

1. Recommended AI tools
2. Department wise allocation
3. Estimated monthly budget
4. Expected productivity improvement
5. Expected ROI
6. Implementation timeline


Return in clear structured format.

`;


const result = await ai.models.generateContent({

model: "gemini-2.0-flash-lite",

contents:prompt

});


return result.text;

} catch (error: any) {
  if (error?.status === 429 || error?.message?.includes('RESOURCE_EXHAUSTED')) {
    return "API quota reached. Please try again in a few moments or upgrade your plan.";
  }
  throw error;
}

}