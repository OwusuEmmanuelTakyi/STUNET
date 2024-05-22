// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe2z3oCzc95QbUzRXz_w9vtlaqAklw2-M",
  authDomain: "stunet-575de.firebaseapp.com",
  projectId: "stunet-575de",
  storageBucket: "stunet-575de.appspot.com",
  messagingSenderId: "1020371826945",
  appId: "1:1020371826945:web:efc3955387e4b43bbdc300",
  measurementId: "G-V35NEQM79W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
