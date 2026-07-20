import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

const COLLECTION = "companies";

export async function createCompany(company: {
  companyName: string;
  industry: string;
  employeeCount: number;
  aiBudget: number;
}) {
  return await addDoc(collection(db, COLLECTION), {
    ...company,
    createdAt: serverTimestamp(),
  });
}

export async function getCompanies() {
  const snapshot = await getDocs(collection(db, COLLECTION));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}