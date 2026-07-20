"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";


interface Props {
  data:any[];
}


export default function BudgetDistributionChart({
data
}:Props){


return(

<div className="bg-white rounded-xl shadow p-6">


<h2 className="text-xl font-bold mb-5">
AI Budget Distribution
</h2>


<div className="h-72">


<ResponsiveContainer
width="100%"
height="100%"
>


<PieChart>


<Pie

data={data}

dataKey="budget"

nameKey="department"

outerRadius={100}

>

{
data.map(
(_,index)=>(
<Cell key={index}/>
)
)
}


</Pie>


<Tooltip/>


</PieChart>


</ResponsiveContainer>


</div>


</div>

);

}
