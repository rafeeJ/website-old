import {initializeApp, getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore"

// const clientCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyARGXXAXebDRbsaea1ypMw1AU491XLU9YM",
  authDomain: "sewing-app-mum.firebaseapp.com",
  databaseURL: "https://sewing-app-mum-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sewing-app-mum",
  storageBucket: "sewing-app-mum.appspot.com",
  messagingSenderId: "976190045385",
  appId: "1:976190045385:web:fdb88e8f51347d05382118",
  measurementId: "G-HD1WCGJ72Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {app, db};