import { generateAIAnalysis } from "@/lib/gemini";


interface RecommendationInput {

company:any;

departments:any[];

employees:any[];

aiTools:any[];

}




export async function generateRecommendation(
data:RecommendationInput
){


const promptData = {


company:data.company,


departments:
data.departments.map(
(dept)=>({

name:dept.name,

employees:dept.employees,

budget:dept.budget

})
),



employees:
data.employees.map(
(emp)=>({

name:emp.name,

department:emp.department,

role:emp.role

})
),



availableAITools:

data.aiTools.map(
(tool)=>({

name:tool.name,

provider:tool.provider,

category:tool.category,

cost:tool.monthlyCost,

departments:tool.departments

})
)


};



const result =
await generateAIAnalysis(
promptData
);



return result;


}