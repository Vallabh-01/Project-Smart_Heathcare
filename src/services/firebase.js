import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiZbQ8xuTZYRK7J-Jorvc2fj7qkuCr-SM",
  authDomain: "smart-healthcare-7fc0f.firebaseapp.com",
  projectId: "smart-healthcare-7fc0f",
  storageBucket: "smart-healthcare-7fc0f.firebasestorage.app",
  messagingSenderId: "645582696697",
  appId: "1:645582696697:web:87a1ec2536454a6634f228",
  measurementId: "G-C994PQLRMQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
