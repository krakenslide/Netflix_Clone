// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeu35uLLSXkEYqDX9H23a492PnznHQZGw",
  authDomain: "krakennetflix.firebaseapp.com",
  projectId: "krakennetflix",
  storageBucket: "krakennetflix.appspot.com",
  messagingSenderId: "881698973657",
  appId: "1:881698973657:web:9d1d7aa7deef5297ad9bc8",
  measurementId: "G-0BBVY8XZNC",
};
console.log("FireBaseKey:", import.meta.env.FIREBASE_API_KEY);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error.message);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
  } catch (error) {
    console.log(error.message);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

export { auth, db, login, signup, logout };
