import GenerateButton from "@/components/recommendations/generate-button";
import RecommendationCard from "@/components/recommendations/recommendation-card";
import { adminDb } from "@/lib/firebaseAdmin";



async function getLatestRecommendation(){


const snapshot =
await adminDb
.collection("recommendations")
.orderBy(
"createdAt",
"desc"
)
.limit(1)
.get();



if(snapshot.empty){

return null;

}



return snapshot.docs[0].data();


}





export default async function RecommendationsPage(){


const data =
await getLatestRecommendation();



return(

<div className="space-y-8">


<div>

<h1 className="text-4xl font-bold">
AI Recommendations
</h1>


<p className="text-gray-500 mt-2">
AI powered tool allocation and budget suggestions.
</p>


</div>



<GenerateButton />




{

data ?


<RecommendationCard

analysis={
data.analysis
}

/>


:

<div className="bg-white rounded-xl shadow p-6 text-gray-500">

No recommendation generated yet.

</div>


}



</div>

);


}