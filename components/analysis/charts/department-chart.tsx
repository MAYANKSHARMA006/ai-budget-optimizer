"use client";

import {
 BarChart,
 Bar,
 XAxis,
 YAxis,
 Tooltip,
 ResponsiveContainer
} from "recharts";


interface Props{
 allocation:any[];
}



export default function DepartmentChart({
 allocation
}:Props){


return (

<div className="bg-white rounded-xl shadow p-6">


<h2 className="text-xl font-bold mb-5">
Department AI Allocation
</h2>


<ResponsiveContainer
width="100%"
height={300}
>


<BarChart
data={allocation || []}
>


<XAxis
dataKey="department"
/>


<YAxis/>


<Tooltip/>


<Bar
dataKey="licenses"
/>


</BarChart>


</ResponsiveContainer>


</div>

);

}