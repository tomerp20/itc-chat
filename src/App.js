import { useState, useEffect } from 'react'
import styles from './styles/app.module.css'
import MessagesList from './components/MessagesList'
import AddNewMessage from './components/AddNewMessage'

function App() {
  const msgs = [
    { id:1, text:'Hello word', date: Date.now(), userId: 'Febee' },
    { id:2, text:'Hello word', date: Date.now(), userId: 'Joe' },
    { id:3, text:'Hello word', date: Date.now(), userId: 'Rachel' },
    { id:4, text:'Hello word', date: Date.now(), userId: 'Monika' },
    { id:5, text:'Hello word', date: Date.now(), userId: 'Ross' }
  ]
  const [messages, setMessages] = useState([])
  const addMessage =  async (newMessage) => {
    setMessages([...messages, newMessage])
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

export default App;
