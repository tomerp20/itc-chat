import { useState, useEffect, useContext } from 'react'
import styles from '../styles/app.module.css'
import MessagesList from './MessagesList'
import AddNewMessage from './AddNewMessage'
import { getFirestore, addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { FirebaseContext } from '../utils/Firebase'

function Chat() {
  const firebase = useContext(FirebaseContext)
  const db = getFirestore(firebase);
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
      const updateState = (snapShot) => {
        const results = []
        snapShot.forEach((doc) => results.push({id:doc.id,...doc.data()})) 
        console.log(results)
        setMessages(results)
      }

      const q = query(collection(db, "messages"), orderBy('date'));
      const unsub = onSnapshot(q, (querySnapshot) => updateState(querySnapshot));
      return () => {
          unsub()
      }
  },[])

  const addMessage =  async (newMessage) => {
    //setMessages([...messages, newMessage])
    try {
      const docRef = await addDoc(collection(db, "messages"), newMessage);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className={styles.chatContainer}>
      <div className={styles.TopBar}>
        <div className={styles.title}>
          Chat
        </div>
        <div className={styles.R}>
          R
        </div>
      </div>
      <MessagesList messages={messages}/>
      <AddNewMessage addMessage={addMessage} />
    </div>
  );
}

export default Chat;
