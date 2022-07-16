import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, setDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD2lfvHB65UORLFaJ1zJV8x6-DobE50sp4",
    authDomain: "auth-26c44.firebaseapp.com",
    projectId: "auth-26c44",
    storageBucket: "auth-26c44.appspot.com",
    messagingSenderId: "877627437394",
    appId: "1:877627437394:web:8842a830b668a6df2a4a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
        localStorage.setItem('name', result.user.displayName);
        localStorage.setItem('email', result.user.email);
        localStorage.setItem('img', result.user.photoURL);
        localStorage.setItem('userId', result.user.uid);
        localStorage.setItem('isAth', true);
    }).catch(err => {
        console.log(err);
    })
}