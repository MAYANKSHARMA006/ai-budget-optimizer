import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase";

const COLLECTION = "aiTools";

export async function getAITools() {
  const snapshot = await getDocs(
    collection(db, COLLECTION)
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function createAITool(tool: any) {
  await addDoc(
    collection(db, COLLECTION),
    tool
  );
}