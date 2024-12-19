import React, { useEffect, useState } from 'react'
import GroupArea from '../GroupSection/GroupArea'
import CreateGroup from '../CreateGroup'
import styles from '../css/GroupsHandler.module.scss'

function GroupsHandler({
  children,
}) {
    const [groups, setGroups] = useState([])
    const [showCreateGroup, setShowCreateGroup] = useState(false);

    useEffect(()=> {
        const storedGroups = JSON.parse(localStorage.getItem('groups'));
        if(storedGroups && storedGroups.length > 0) setGroups(storedGroups);
    }, [])


    const addGroup = (newGroup)=> {
        setGroups((prev)=> [...prev, newGroup])
        localStorage.setItem('groups', JSON.stringify([...groups, newGroup]));
        setShowCreateGroup(false);
    }

    
  return (
    <div className={styles.page_container}>
        <GroupArea groups={groups} openCreateGroup={()=> setShowCreateGroup(true)}/>
        {children}
        {showCreateGroup && 
            <div className={styles.create_group_modal} onClick={()=> setShowCreateGroup(false)}>
                <CreateGroup groups={groups} addGroup={addGroup} />
            </div>
        }
    </div>
  )
}

export default GroupsHandler;

