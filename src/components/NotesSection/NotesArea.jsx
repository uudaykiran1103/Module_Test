import React, { useEffect, useState } from 'react'
import styles from '../css/NotesArea.module.scss'
import GroupName from '../GroupSection/GroupName';
import BackArrow from '../../assets/icons/BackArrow'
import NoteCard from './NoteCard';
import WritingArea from './NoteWriting';
import { useParams, Link } from 'react-router-dom';
import {useWidth} from '../../Hooks/widthContext'

function NotesArea() {

    const [notes, setNotes] = useState([]);
    const [group, setGroup] = useState(null);
    const [groupError, setGroupError] = useState(false);
    const {groupId} = useParams();
    const screenWidth = useWidth();

    useEffect(()=> {
        setGroupError(false);
        const groupFound = JSON.parse(localStorage.getItem('groups')).find((group)=> group.groupId === groupId);
        const notes = JSON.parse(localStorage.getItem(groupId))

        if(groupFound) setGroup(groupFound)
        else setGroupError(true);
        
        if(notes) setNotes(notes)
        else setNotes([]);
    }, [groupId])

    const addNote = (note)=> {
        setNotes((prev)=> [...prev, note]);
        localStorage.setItem(groupId, JSON.stringify([...notes, note]));
    }

  return (
    <>
    {!groupError ?
        group &&
            <div className={styles.notes_area}>
                <div className={styles.groupname_bar}>
                    {screenWidth<675 && <Link to={-1}><BackArrow/></Link>}
                    <GroupName groupName={group.groupName} bgColor={group.bgColor} fontColor='#FFF' />
                </div>
                <div className={styles.notes_container}>
                    {notes.map((note, index) => (
                        <NoteCard key={index} content={note.content} date={note.date} time={note.time} />
                    ))}
                </div>
                <WritingArea addNote={addNote}/>
            </div> : <div className={`${styles.notes_area} ${styles.group_error}`}>
                <h1>Group Not Found!</h1>
            </div> }
    </>
  )
}

export default NotesArea;
