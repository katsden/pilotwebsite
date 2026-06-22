// Import the modern Firebase v10 SDK using ES Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Konfigurasi rahasia milik Naka
const firebaseConfig = {
  apiKey: "AIzaSyA4zAVRFmYmPmgsggPg1NKvF9BMgIkWj8M",
  authDomain: "lumina-coffee-website.firebaseapp.com",
  projectId: "lumina-coffee-website",
  storageBucket: "lumina-coffee-website.firebasestorage.app",
  messagingSenderId: "1016117260334",
  appId: "1:1016117260334:web:893d102379d8179e2cafbf",
  measurementId: "G-ZK7E9FB144"
};

// 1. Nyalakan Firebase (Buka gembok gudang Google)
const app = initializeApp(firebaseConfig);

// 2. Hubungkan ke Firestore Database (Gudang Data Menu)
const db = getFirestore(app);

// 3. Hubungkan ke Firebase Auth (Satpam Keamanan)
const auth = getAuth(app);

// Export agar bisa dipakai oleh admin.js dan script.js
export { db, auth, collection, getDocs, addDoc, deleteDoc, doc, signInWithEmailAndPassword, onAuthStateChanged, signOut };
