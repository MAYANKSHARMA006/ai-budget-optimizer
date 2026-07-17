import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Company } from "@/types/company";

export async function createCompany(company: Company) {
  const docRef = await addDoc(
    collection(db, "companies"),
    {
      ...company,
      createdAt: serverTimestamp(),
    }
  );

  return docRef.id;
}