import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKVnjy_qwF59JPPq2o9smS5dWsjHg4chs",
  authDomain: "butce-takip-sistem.firebaseapp.com",
  projectId: "butce-takip-sistem",
  storageBucket: "butce-takip-sistem.firebasestorage.app",
  messagingSenderId: "238283105315",
  appId: "1:238283105315:web:9855b4c3a755e5f4d87d96",
  measurementId: "G-F6NEVE8YTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
