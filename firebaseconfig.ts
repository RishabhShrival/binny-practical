import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpALahuN-lC421cq5av0JlhzueIVHZDws",
  authDomain: "binny-test-9390e.firebaseapp.com",
  projectId: "binny-test-9390e",
  storageBucket: "binny-test-9390e.firebasestorage.app",
  messagingSenderId: "409217488239",
  appId: "1:409217488239:web:a36e0eb8541207825cc49a"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export { app };

