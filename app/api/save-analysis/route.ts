import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";


export async function POST(req:Request){

    try{

        const data = await req.json();


        await addDoc(collection(db,"analyses"),{

            company:data.company,
            industry:data.industry,
            employees:data.employees,
            currentAI:data.currentAI,
            budget:data.budget,
            result:data.result,
            createdAt:new Date()

        });


        return NextResponse.json({

            success:true

        });


    }
    catch(error){

        console.log(error);


        return NextResponse.json({

            success:false,
            error:"Database save failed"

        },
        {
            status:500
        });

    }

}