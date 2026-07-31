import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvMMfbYBd4O863Q8MrReAzWvLosDDisbE",
  authDomain: "ronglao-mahasarakham.firebaseapp.com",
  projectId: "ronglao-mahasarakham",
  storageBucket: "ronglao-mahasarakham.firebasestorage.app",
  messagingSenderId: "990624344104",
  appId: "1:990624344104:web:acffdcff580040bbe2ed1d",
  measurementId: "G-DKC7KEDFDK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };