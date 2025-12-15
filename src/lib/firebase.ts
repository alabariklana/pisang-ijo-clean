// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADiSIc9OxSBKZVkziGQWrWlO6hWvSnrbg",
  authDomain: "pisang-ijo-evi.firebaseapp.com",
  projectId: "pisang-ijo-evi",
  storageBucket: "pisang-ijo-evi.firebasestorage.app",
  messagingSenderId: "93489526771",
  appId: "1:93489526771:web:bb956ad3f18672c7c90486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };