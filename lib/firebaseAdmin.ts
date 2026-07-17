import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";


const firebaseServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;


if (!firebaseServiceAccount) {

    throw new Error(
        "FIREBASE_SERVICE_ACCOUNT missing in .env.local"
    );

}


const serviceAccount = JSON.parse(firebaseServiceAccount);



if (!getApps().length) {

    initializeApp({

        credential: cert(serviceAccount),

    });

}


export const adminDb = getFirestore();