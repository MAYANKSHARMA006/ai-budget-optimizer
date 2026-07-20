import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

const COLLECTION = "departments";

export async function createDepartment(department: any) {
  return await addDoc(
    collection(db, COLLECTION),
    {
      ...department,
      createdAt: serverTimestamp(),
    }
  );
}

export async function getDepartments() {
  const snapshot = await getDocs(
    collection(db, COLLECTION)
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function deleteDepartment(id: string) {
  return await deleteDoc(
    doc(db, COLLECTION, id)
  );
}