import React from 'react'
// import Logo from '../../assets/icons/Notes-Logo.svg'
import styles from '../css/GroupArea.module.scss'
import GroupName from './GroupName'
import { Link } from 'react-router-dom'
import {useWidth} from '../../Hooks/widthContext'
import { useParams } from 'react-router-dom'

const selected = {
    backgroundColor: "rgba(47,47,47,0.17)",
    borderRadius: "1rem"
}

function GroupArea({
    groups,
    openCreateGroup,
}) {
    
    const {groupId} = useParams();
    const screenWidth = useWidth();

  return (
    <div className={` ${styles.group_area} ${groupId && screenWidth<675 ? "remove" : ""}`}>
        <div className={styles.logo} >
            <div>
                {/* <img src={Logo} alt="Logo" /> */}
                <span>Pocket Notes</span>
            </div>
        </div>
        <div className={styles.groups_container}>
            {groups?.map((group)=> (
                <div key={group.groupId} style={group.groupId===groupId? selected : {}}>
                    <Link to={`/notes/${group.groupId}`} replace={screenWidth<675 ? false : true}>
                        <GroupName groupName={group.groupName} bgColor={group.bgColor} />
                    </Link>
                </div>
            ))}
        </div>
        <button className={styles.add_group_button} title='Add Group' onClick={openCreateGroup}>+</button>
    </div>
  )
}

export default GroupArea