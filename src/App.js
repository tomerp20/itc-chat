import { useState, useEffect, useContext } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Chat from './components/Chat';
import Login from './components/Login'
import { AuthContext } from './components/AuthContext';
import { Fragment } from 'react';
function App() {
  const [authInfo, setAuthInfo] = useState(null)
  const [isauthfinished, setIsauthfinished] = useState(false)
  const logout = () => {
    setAuthInfo(null)
    
  }
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) 
      setAuthInfo({name:user.displayName, email:user.email})
       else {
      }
      setIsauthfinished(true)
});
  },[])
  return (
    <Fragment>
      {isauthfinished ?
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
      : 
    <div>
      Loading...
    </div>
    }
  </Fragment>
  );
}

export default App;
