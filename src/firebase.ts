// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByorEyLlBoK0MmL2fDqIIs6Jn-7NFJRL8",
  authDomain: "influencio-app.firebaseapp.com",
  projectId: "influencio-app",
  storageBucket: "influencio-app.appspot.com",
  messagingSenderId: "6105182715",
  appId: "1:6105182715:web:83df1b21486d077babdb5e",
  measurementId: "G-T4XK263DEJ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
