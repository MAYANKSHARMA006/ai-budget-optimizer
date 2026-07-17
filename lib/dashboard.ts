import { adminDb } from "@/lib/firebaseAdmin";
import { Analysis } from "@/types/analysis";

export async function getLatestAnalysis(): Promise<Analysis | null> {
  try {
    const snapshot = await adminDb
      .collection("analyses")
      .orderBy("createdAt", "desc")
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    return {
      id: snapshot.docs[0].id,
      ...(snapshot.docs[0].data() as Analysis),
    };
  } catch (error) {
    console.error("Dashboard Error:", error);
    return null;
  }
}