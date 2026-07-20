import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";
import { generateAIAnalysis } from "@/lib/gemini";


export async function POST() {

  try {


    console.log("API STARTED");


    const companyData = {

      company: "Demo Company",

      industry: "Technology",

      employees: 100,

      departments: [
        "Marketing",
        "Finance",
        "HR",
        "IT"
      ],

      currentAI: [
        "None"
      ]

    };



    console.log(
      "Sending data to Gemini",
      companyData
    );



    const analysis =
      await generateAIAnalysis(
        companyData
      );



    console.log(
      "Gemini Response:",
      analysis
    );



    const firestoreResponse =
      await adminDb
      .collection("analyses")
      .add({

        companyData,

        analysis,

        createdAt:
        new Date()

      });



    console.log(
      "Firestore Document ID:",
      firestoreResponse.id
    );



    return NextResponse.json({

      success:true,

      id:
      firestoreResponse.id,

      analysis

    });



  } catch(error:any){


    console.error(
      "ERROR:",
      error
    );



    return NextResponse.json({

      success:false,

      message:error.message

    },
    {
      status:500
    });


  }

}