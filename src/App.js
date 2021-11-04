import { useState, useEffect, useContext } from 'react'
import styles from './styles/app.module.css'
import MessagesList from './components/MessagesList'
import AddNewMessage from './components/AddNewMessage'
import { getFirestore, addDoc, collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { FirebaseContext } from './utils/Firebase'
import Chat from './components/Chat';
import Login from './components/Login'
import { AuthContext } from './components/AuthContext';
function App() {
  const [authInfo, setAuthInfo] = useState(null)
  const logout = () => {
    setAuthInfo(null)
    //
  }
  return (
    <div>
      <AuthContext.Provider value={{
        authInfo,
        login: (userInfo) => setAuthInfo(userInfo),
        logout,
      }}>
        {!authInfo && <Login />}
        {authInfo && <Chat />}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
