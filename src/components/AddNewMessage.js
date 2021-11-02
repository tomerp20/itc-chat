import { useState } from 'react'
import styles from '../styles/AddNewMessage.module.css'
export default function AddNewMessage({ addMessage }) {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addMessage({
             id:Date.now(),
             text, 
             date: Date.now(), 
             userId: 'Febee' }
        )
        setText('')
    }
    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}> 
                <input 
                    type="text" 
                    value={text}
                    placeholder="Write something..." 
                    onChange={e => setText(e.target.value)}
                    minLength={1}
                    className={styles.input}
                />
            </form>
            <div onClick={handleSubmit} >
                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.01 18L21 9L0.01 0L0 7L15 9L0 11L0.01 18Z" fill="#363A44"/>
                </svg>
            </div>
        </div>
    )
}
