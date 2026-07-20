"use client";

import {
 PieChart,
 Pie,
 Cell,
 Tooltip,
 ResponsiveContainer
} from "recharts";


interface Props {
 roi:any;
}



export default function ROIChart({
 roi
}:Props){


const data=[

{
name:"Productivity Gain",
value:roi?.productivityGain || 0
},

{
name:"Expected ROI",
value:roi?.expectedROI || 0
}

];



return (

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-xl font-bold mb-5">
ROI Prediction
</h2>


<ResponsiveContainer
width="100%"
height={300}
>

<PieChart>

<Pie
data={data}
dataKey="value"
nameKey="name"
outerRadius={100}
label
>

{
data.map(
(_,index)=>(

<Cell
key={index}
/>

))
}

</Pie>


<Tooltip/>

</PieChart>


</ResponsiveContainer>


</div>

);

}