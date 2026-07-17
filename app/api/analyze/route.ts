import { NextResponse } from "next/server";
import { generateAIAnalysis } from "@/lib/gemini";
import { adminDb } from "@/lib/firebaseAdmin";


export async function POST(req: Request) {

    try {

        const body = await req.json();


        // Gemini AI Analysis
        const result = await generateAIAnalysis(body);

        const cleanResult = String(result);


        console.log("Gemini completed");


        // Save data to Firebase
        try {

            await adminDb.collection("analyses").add({

company: body.company || "",

industry: body.industry || "",

employees: Number(body.employees || 0),

currentAI: body.currentAI || "",

budget: body.budget || "",

result: cleanResult,

createdAt: new Date()

});


            console.log("Firebase saved");


        } catch(firebaseError) {

            console.log("Firebase Error:", firebaseError);

        }



        return NextResponse.json({

            success: true,

            result: cleanResult

        });



    } catch(error) {


        console.log("Analyze API Error:", error);


        return NextResponse.json({

            success:false,

            error:"AI generation failed"

        },
        {
            status:500
        });


    }

}