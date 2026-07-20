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
  employeeAnalysis: any[];
}



export default function DepartmentBudgetChart({
  employeeAnalysis,
}: Props) {


  return (

    <div className="bg-white rounded-xl shadow p-6">


      <h2 className="text-xl font-bold mb-5">
        Employee AI Spending
      </h2>



      {
        employeeAnalysis.length === 0 ? (

          <p className="text-gray-500">
            No employee AI allocation available.
          </p>

        ) : (


          <div className="h-80">


            <ResponsiveContainer
              width="100%"
              height="100%"
            >


              <BarChart
                data={employeeAnalysis}
              >


                <XAxis
                  dataKey="employee"
                />


                <YAxis />


                <Tooltip />


                <Bar
                  dataKey="monthlyCost"
                />


              </BarChart>


            </ResponsiveContainer>


          </div>


        )
      }



    </div>

  );


}