"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


interface Props {
  budget: any;
}


export default function BudgetChart({
  budget,
}: Props) {


const data = [
  {
    name:"Monthly",
    value:budget?.monthlyBudget || 0
  },
  {
    name:"Annual",
    value:budget?.annualBudget || 0
  },
  {
    name:"Savings",
    value:budget?.savings || 0
  }
];



return (

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-xl font-bold mb-5">
Budget Overview
</h2>


<ResponsiveContainer
width="100%"
height={300}
>

<BarChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="value"
/>

</BarChart>

</ResponsiveContainer>


</div>

);

}