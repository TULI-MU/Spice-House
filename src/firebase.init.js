// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD07K0GUp2VJFdhh-QY_4PCo1hZjaJCwk",
  authDomain: "spice-house-client.firebaseapp.com",
  projectId: "spice-house-client",
  storageBucket: "spice-house-client.appspot.com",
  messagingSenderId: "824274678497",
  appId: "1:824274678497:web:235feb2bc7baa7191f3da0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;