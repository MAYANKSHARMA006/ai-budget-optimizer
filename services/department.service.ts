import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

const COLLECTION = "departments";

export async function createDepartment(data: any) {
  return await addDoc(collection(db, COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export async function getDepartments() {
  const snapshot = await getDocs(collection(db, COLLECTION));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function updateDepartment(
  id: string,
  data: any
) {
  return await updateDoc(doc(db, COLLECTION, id), data);
}

export async function deleteDepartment(id: string) {
  return await deleteDoc(doc(db, COLLECTION, id));
}