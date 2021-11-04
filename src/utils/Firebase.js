import { createContext } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG6_6LCppffO4JIOu4KTzIfhuw2k5ti9k",
  authDomain: "chat2-ff62e.firebaseapp.com",
  projectId: "chat2-ff62e",
  storageBucket: "chat2-ff62e.appspot.com",
  messagingSenderId: "889300488308",
  appId: "1:889300488308:web:6561fcb1e6f2f3d76e4121"
};
export const FirebaseContext = createContext(null) 
// Initialize Firebase
export default function Firebase({ children }) {
    const app = initializeApp(firebaseConfig);
    return (
        <FirebaseContext.Provider value={app}>
            { children } {/*<App />*/}
        </FirebaseContext.Provider>
    )
}
