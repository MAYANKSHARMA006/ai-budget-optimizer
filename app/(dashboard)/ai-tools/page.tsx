import AIToolForm from "@/components/ai-tools/ai-tool-form";
import AIToolTable from "@/components/ai-tools/ai-tool-table";

import { adminDb } from "@/lib/firebaseAdmin";



async function getAITools() {


  try {


    const snapshot =
      await adminDb
        .collection("aiTools")
        .orderBy(
          "createdAt",
          "desc"
        )
        .get();



    if(snapshot.empty){

      return [];

    }



    return snapshot.docs.map((doc)=>{


      const data =
        doc.data();



      return {

        id:
        doc.id,


        name:
        data.name || "Unknown",


        provider:
        data.provider || "Unknown",


        category:
        data.category || "General",


        description:
        data.description || "",


        monthlyCost:
        Number(
          data.monthlyCost || 0
        ),


        departments:
        data.departments || [],


      };


    });



  }
  catch(error:any){


    console.log(
      "AI Tools Fetch Error:",
      error
    );


    return [];


  }


}





export default async function AIToolsPage(){


  const tools =
    await getAITools();




  return (

    <div className="space-y-8">



      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">
          AI Tools Management
        </h1>


        <p className="text-gray-500 mt-2">
          Manage AI subscriptions, pricing and department allocation.
        </p>


      </div>





      {/* Add Tool Form */}

      <AIToolForm />





      {/* Tools Table */}


      {
        tools.length > 0 ? (


          <AIToolTable

            tools={
              tools
            }

          />


        ) : (


          <div className="bg-white rounded-xl shadow p-6 text-gray-500">

            No AI tools added yet.

          </div>


        )

      }





    </div>

  );

}