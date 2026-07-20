import EmployeeForm from "@/components/employees/employee-form";
import GenerateEmployeeAI from "@/components/employees/generate-employee-ai";
import EmployeeTable from "@/components/employees/employee-table";
import EmployeeKPICards from "@/components/employees/employee-kpi-cards";
import { adminDb } from "@/lib/firebaseAdmin";



async function getEmployees(){


try{


const snapshot =
await adminDb
.collection("employees")
.orderBy(
"createdAt",
"desc"
)
.get();



return snapshot.docs.map(
(doc)=>({

id:doc.id,

...doc.data()

})

);



}
catch(error){


console.log(
"Employee Fetch Error:",
error
);


return [];


}


}





export default async function EmployeesPage(){


const employees =
await getEmployees();



return(

<div className="space-y-8">



{/* Header */}

<div>


<h1 className="text-4xl font-bold">
Employee AI Mapping
</h1>

<EmployeeKPICards

employees={employees}

/>


<p className="text-gray-500 mt-2">
Assign AI tools based on employee roles and optimize productivity.
</p>


</div>





{/* Add Employee */}

<EmployeeForm />





{/* Generate AI Mapping */}

<GenerateEmployeeAI />





{/* Employee List */}

<EmployeeTable

employees={
employees
}

/>



</div>

);


}