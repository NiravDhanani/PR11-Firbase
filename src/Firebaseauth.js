// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwHN1ComFnUhN2y9FOddQq1eJYT3Pf6JY",
  authDomain: "pr11-firebase-27c96.firebaseapp.com",
  databaseURL: "https://pr11-firebase-27c96-default-rtdb.firebaseio.com",
  projectId: "pr11-firebase-27c96",
  storageBucket: "pr11-firebase-27c96.appspot.com",
  messagingSenderId: "177180156530",
  appId: "1:177180156530:web:44fbbd9b363633e49ad8eb",
  measurementId: "G-24D0Z41J88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app