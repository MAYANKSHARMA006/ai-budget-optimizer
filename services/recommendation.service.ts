import {
  addDoc,
  collection,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function saveRecommendations(
  companyId: string,
  recommendations: any[]
) {
  for (const recommendation of recommendations) {
    await addDoc(
      collection(
        db,
        "companies",
        companyId,
        "recommendations"
      ),
      recommendation
    );
  }
}