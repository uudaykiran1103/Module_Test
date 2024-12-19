import React from 'react'
import styles from '../css/NoteCard.module.scss'

export default function NoteCard({
    content,
    date,
    time,
}) {
  return (
    <div className={styles.notecard}>
        <p>{content}</p>
        <div className={styles.date_time}>
            <p>{date}&nbsp; <span>&#8226;</span> &nbsp;{time}</p>
        </div>
    </div>
  )
}
