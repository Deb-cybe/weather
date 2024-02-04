// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4UsL-LsLACw5V7jNLEnr3fQC0pEIOf8c",
  authDomain: "weather-b3de4.firebaseapp.com",
  projectId: "weather-b3de4",
  storageBucket: "weather-b3de4.appspot.com",
  messagingSenderId: "43065375744",
  appId: "1:43065375744:web:295b21057b3c4d1c3b6ce5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;