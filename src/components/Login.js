import { useContext } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from './AuthContext';

export default function Login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const { login } = useContext(AuthContext)
    const handleClick = async () => {
        try {
            const userData = await signInWithPopup(auth, provider)
            login({name:userData.user.displayName, email:userData.user.email})
        } catch (error) {
         console.log(error)
        }
    }
    
    return (
        <div style={{textAlign:'center',fontSize:'26px',marginTop:'30px',cursor:'pointer'}} onClick={handleClick}>
            Login 
        </div>
    )
}
