interface BudgetInput {

departments:any[];

aiTools:any[];

employees:any[];

}



export function optimizeBudget(
data:BudgetInput
){


let currentBudget = 0;

let employeeAICost = 0;



// Existing department budget

data.departments.forEach(
(dept)=>{

currentBudget +=
Number(
dept.budget || 0
);

}

);



// Employee based AI cost

const employeeAnalysis =
data.employees.map(
(employee)=>{


const cost =
Number(
employee.monthlyCost || 0
);



employeeAICost += cost;



return {


employee:
employee.name,


department:
employee.department,


role:
employee.role,


tools:
employee.recommendedTools || [],


monthlyCost:
cost



};


}

);





const optimizedBudget =
employeeAICost;



const savings =
currentBudget -
optimizedBudget;



return {


currentBudget,


optimizedBudget,


monthlySavings:
savings,


annualSavings:
savings * 12,


productivityGain:
35,



employeeAnalysis


};


}