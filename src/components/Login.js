import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleClick = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            console.log(user)
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    
    return (
        <div style={{textAlign:'center',fontSize:'26px',marginTop:'30px',cursor:'pointer'}} onClick={handleClick}>
            Login 
        </div>
    )
}
