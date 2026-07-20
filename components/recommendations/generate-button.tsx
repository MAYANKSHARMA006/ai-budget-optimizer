"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function GenerateButton() {

  const [loading, setLoading] = useState(false);



  async function generate() {


    if (loading) return;


    try {


      setLoading(true);



      const toastId =
        toast.loading(
          "Generating AI Recommendation..."
        );



      const res =
        await fetch(
          "/api/recommendations",
          {
            method: "POST",
          }
        );



      const data =
        await res.json();



      toast.dismiss(toastId);



      if (!res.ok) {


        throw new Error(
          data.error ||
          "Failed to generate recommendation"
        );


      }



      toast.success(
        "AI Recommendation Generated Successfully"
      );



      setTimeout(()=>{

        window.location.reload();

      },1000);



    }
    catch(error:any){


      toast.error(
        error.message ||
        "Something went wrong"
      );


    }
    finally{


      setLoading(false);


    }


  }





  return (

    <button

      onClick={generate}

      disabled={loading}

      className={`px-5 py-3 rounded-lg text-white transition-all ${
        
        loading

        ? "bg-gray-500 cursor-not-allowed"

        : "bg-slate-900 hover:bg-slate-700"

      }`}

    >

      {
        loading

        ? "Generating..."

        : "Generate AI Recommendation"
      }


    </button>

  );


}