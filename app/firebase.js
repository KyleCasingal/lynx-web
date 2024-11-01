// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_lw-BL9aod0HMtsqeKrbI3v624UYl01o",
  authDomain: "lynx-web-16695.firebaseapp.com",
  projectId: "lynx-web-16695",
  storageBucket: "lynx-web-16695.firebasestorage.app",
  messagingSenderId: "269090167790",
  appId: "1:269090167790:web:2085b431918a6302088cff",
  measurementId: "G-QD559B4V49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();