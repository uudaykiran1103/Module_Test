import React, { useState } from 'react'
import styles from '../css/NoteWriting.module.scss'
import Send from '../../assets/icons/Send'

export default function WritingArea({
    addNote,
}) {

    const [note, setNote] = useState("");
    
    const handleSubmitNote = ()=> {
        const today = new Date();
        const newNote = {
            content: note,
            date: today.toLocaleDateString('en-US', {day: "numeric"}) + " " + today.toLocaleDateString('en-US', {month: "short", year: "numeric"}),
            time: new Date().toLocaleString('en-US', {hour: "numeric", minute: "2-digit"})
        }

        addNote(newNote);
        setNote("");
    }

  return (
    <div className={styles.writing_area}>
        <div className={styles.input_container}>
            <textarea name="note" id="note" value={note} onChange={(e)=> setNote(e.target.value)} placeholder='Enter you text here......'/>
            <div className={styles.save_note_button} style={{pointerEvents: note.length>0? "auto" : "none"}} onClick={handleSubmitNote}>
                <Send disabled={!(note.length > 0)}/>
            </div>
        </div>
    </div>
  )
}
