import AnalysisCard from "@/components/analysis/analysis-card";
import BudgetChart from "@/components/analysis/charts/budget-chart";
import ROIChart from "@/components/analysis/charts/roi-chart";
import DepartmentChart from "@/components/analysis/charts/department-chart";
import AIKPICards from "@/components/analysis/ai-kpi-cards";

import { adminDb } from "@/lib/firebaseAdmin";



async function getLatestAnalysis() {


  const snapshot =
    await adminDb
      .collection("analyses")
      .orderBy(
        "createdAt",
        "desc"
      )
      .limit(1)
      .get();



  if (snapshot.empty) {

    return null;

  }



  return snapshot.docs[0].data();

}





export default async function AnalysisPage() {


  const data =
    await getLatestAnalysis();



  const analysis =
    data?.analysis;



  return (

    <div className="space-y-8">



      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">
          AI Generated Strategy
        </h1>


        <p className="text-gray-500 mt-2">
          Gemini powered budget optimization report.
        </p>


      </div>





      {

        analysis ? (

          <>



            {/* KPI Cards */}

            <AIKPICards

              analysis={
                analysis
              }

            />





            {/* Full AI Report */}

            <AnalysisCard

              analysis={
                analysis
              }

            />





            {/* Charts */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


              <BudgetChart

                budget={
                  analysis?.budgetPlan
                }

              />



              <ROIChart

                roi={
                  analysis?.roi
                }

              />


            </div>





            {/* Department Allocation Chart */}

            <DepartmentChart

              allocation={
                analysis?.departmentAllocation || []
              }

            />



          </>


        ) : (


          <div className="bg-white rounded-xl shadow p-6 text-gray-500">

            No AI analysis generated yet.

          </div>


        )


      }



    </div>

  );

}