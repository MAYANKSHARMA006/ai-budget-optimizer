import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

const COLLECTION = "employees";

export async function createEmployee(employee: any) {
  await addDoc(collection(db, COLLECTION), {
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
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function updateEmployee(
  id: string,
  employee: any
) {
  await updateDoc(
    doc(db, COLLECTION, id),
    employee
  );
}