// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf0JE61MRghZheR7v4wzgNDA6eVg3NApY",
  authDomain: "e-clone-a485b.firebaseapp.com",
  projectId: "e-clone-a485b",
  storageBucket: "e-clone-a485b.appspot.com",
  messagingSenderId: "626239877989",
  appId: "1:626239877989:web:bd39a27924817c18b5a78c",
  measurementId: "G-FE8EBN93P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth }; // Export auth to use in your components
