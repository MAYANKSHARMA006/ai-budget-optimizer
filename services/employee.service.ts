import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

const COLLECTION = "employees";

export async function createEmployee(employee: any) {
  return await addDoc(collection(db, COLLECTION), {
    ...employee,
    createdAt: serverTimestamp(),
  });
}

export async function getEmployees() {
  const snapshot = await getDocs(collection(db, COLLECTION));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function deleteEmployee(id: string) {
  return await deleteDoc(doc(db, COLLECTION, id));
}