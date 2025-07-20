import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore } from
  "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

export const app = initializeApp({
  apiKey: "AIzaSyClSVkt4IYGBV101VXFRJt3lZa_uKOIUeA",
  authDomain: "test-m-572d8.firebaseapp.com",
  projectId: "test-m-572d8",
  storageBucket: "test-m-572d8.firebasestorage.app",
  messagingSenderId: "1002036366438",
  appId: "1:1002036366438:web:c243adef975aad8a77b1a7",
  measurementId: "G-7LJEPPVVFX"
});
export const db = getFirestore(app);