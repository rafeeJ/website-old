import {initializeApp, getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC547D6kUPxQ6h5aQmI3MggN3Qs3T1Jfqs",
  authDomain: "rafees-website.firebaseapp.com",
  databaseURL: "https://rafees-website.firebaseio.com",
  projectId: "rafees-website",
  storageBucket: "rafees-website.appspot.com",
  messagingSenderId: "322428736466",
  appId: "1:322428736466:web:6e1e572c993288a2cb6e0b",
  measurementId: "G-FLMKMQ7KY2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
var analytics;

if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export {app, db, analytics};