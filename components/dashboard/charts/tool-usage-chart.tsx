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
data:any[];
}



export default function ToolUsageChart({
data
}:Props){


return(

<div className="bg-white rounded-xl shadow p-6">


<h2 className="text-xl font-bold mb-5">
AI Tool Usage
</h2>



<div className="h-72">


<ResponsiveContainer
width="100%"
height="100%"
>


<BarChart
data={data}
>


<XAxis
dataKey="tool"
/>


<YAxis/>


<Tooltip/>


<Bar
dataKey="users"
/>


</BarChart>


</ResponsiveContainer>


</div>


</div>


);


}