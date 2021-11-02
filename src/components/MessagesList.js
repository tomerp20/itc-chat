import React from 'react'
import styles from '../styles/MessagesList.module.css'
import { format } from 'date-fns'
export default function MessagesList({ messages }) {
    return (
        <div className={styles.messagesList}>
            {messages && messages.map(message => (
                <div key={message.id}>
                    <div className={styles.dateBlock}> 
                        {format(message.date,'eeee - p')}
                    </div>
                    <div className={styles.message}>
                        <div className={styles.creator}>
                            {message.userId.substr(0,1).toUpperCase()}
                        </div>
                        <div className={styles.messageText}>
                            {message.text}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
