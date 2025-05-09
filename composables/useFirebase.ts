// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQSyfB4O4YVP2fPTqt18qTI_U7qQ7Xsts",
  authDomain: "come2me-af5f2.firebaseapp.com",
  projectId: "come2me-af5f2",
  storageBucket: "come2me-af5f2.firebasestorage.app",
  messagingSenderId: "597330522022",
  appId: "1:597330522022:web:a2144ad1e3cedaedd06967",
  measurementId: "G-FZ3KJXCZNG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
