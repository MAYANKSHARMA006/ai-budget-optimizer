import { adminDb } from "@/lib/firebaseAdmin";
import ExportButtons from "@/components/reports/export-buttons";


async function getLatestReport() {


  try {


    const snapshot =
      await adminDb
        .collection("budgets")
        .orderBy(
          "createdAt",
          "desc"
        )
        .limit(1)
        .get();



    if (snapshot.empty) {

      return null;

    }



    const data =
      snapshot.docs[0].data();



    // Convert Firestore objects into plain JSON
    const cleanData =
      JSON.parse(
        JSON.stringify(
          data,
          (key, value) => {

            if (
              value &&
              typeof value === "object" &&
              "_seconds" in value
            ) {

              return new Date(
                value._seconds * 1000
              ).toISOString();

            }

            return value;

          }
        )
      );



    return cleanData;



  } catch(error:any) {


    console.log(
      "Report Fetch Error:",
      error
    );


    return null;


  }


}





export default async function ReportsPage() {


  const report =
    await getLatestReport();




  return (

    <div className="space-y-8">



      <div>

        <h1 className="text-4xl font-bold">
          AI Optimization Reports
        </h1>


        <p className="text-gray-500 mt-2">
          Generate executive level AI budget reports.
        </p>


      </div>





      {
        report ? (

          <>


            {/* KPI Cards */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">



              <div className="bg-white rounded-xl shadow p-6">

                <p className="text-gray-500">
                  Current Budget
                </p>

                <h2 className="text-2xl font-bold mt-2">

                  ₹
                  {Number(
                    report.currentBudget || 0
                  ).toLocaleString()}

                </h2>

              </div>





              <div className="bg-white rounded-xl shadow p-6">

                <p className="text-gray-500">
                  Optimized Budget
                </p>


                <h2 className="text-2xl font-bold mt-2">

                  ₹
                  {Number(
                    report.optimizedBudget || 0
                  ).toLocaleString()}

                </h2>

              </div>





              <div className="bg-white rounded-xl shadow p-6">

                <p className="text-gray-500">
                  Monthly Savings
                </p>


                <h2 className="text-2xl font-bold mt-2">

                  ₹
                  {Number(
                    report.monthlySavings || 0
                  ).toLocaleString()}

                </h2>

              </div>





              <div className="bg-white rounded-xl shadow p-6">

                <p className="text-gray-500">
                  Annual Savings
                </p>


                <h2 className="text-2xl font-bold mt-2">

                  ₹
                  {Number(
                    report.annualSavings || 0
                  ).toLocaleString()}

                </h2>

              </div>



            </div>






            {/* Employee Allocation */}

            <div className="bg-white rounded-xl shadow p-6">


              <h2 className="text-xl font-bold mb-4">
                Employee AI Allocation
              </h2>




              <div className="space-y-3">


                {
                  report.employeeAnalysis?.length > 0 ?


                  report.employeeAnalysis.map(
                    (employee:any,index:number)=>(


                      <div

                        key={index}

                        className="border rounded-lg p-4 flex justify-between"

                      >


                        <div>


                          <p className="font-semibold">
                            {employee.employee}
                          </p>


                          <p className="text-gray-500">
                            {employee.department}
                          </p>


                        </div>





                        <div className="text-right">


                          <p>
                            {
                              employee.tools?.join(", ")
                            }
                          </p>


                          <p className="font-semibold">

                            ₹
                            {
                              employee.monthlyCost
                            }

                          </p>


                        </div>




                      </div>


                    )

                  )


                  :

                  <p className="text-gray-500">
                    No employee allocation found.
                  </p>


                }



              </div>



            </div>







            {/* Export */}

            <div className="mt-8">


              <ExportButtons

                report={report}

              />


            </div>




          </>



        )

        :



        (

          <div className="bg-white rounded-xl shadow p-6 text-gray-500">

            No report available. Generate budget optimization first.

          </div>


        )


      }



    </div>

  );


}