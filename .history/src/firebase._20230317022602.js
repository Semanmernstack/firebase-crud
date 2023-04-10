import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgS0aivKoq6PRjPIzLlCpHxI0D8M1DMtw",
  authDomain: "school-81c7d.firebaseapp.com",
  projectId: "school-81c7d",
  storageBucket: "school-81c7d.appspot.com",
  messagingSenderId: "524069258489",
  appId: "1:524069258489:web:11c09d32a06e9a8b970e28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app)

export { auth, provider, db }
