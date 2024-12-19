import React, { useMemo, useState } from 'react'
import styles from './css/CreateGroup.module.scss'

const groupColors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"]

function CreateGroup({
    groups,
    addGroup,
}) {

    const [groupName, setGroupName] = useState("");
    const [groupColor, setGroupColor] = useState("");
    const [nameError, setNameError] = useState("");
    const [colorError, setColorError] = useState(false);

    const groupIds = useMemo(()=> {
        return groups.map((group)=> group.groupId)
    }, [])

    const slugTransform = (value)=> {
        if(value && typeof value === "string") 
        return value.trim().toLowerCase().replace(/[^a-zA-Z\d]+/g, "-");
    }

    const handleGroupNameChange = (e)=> {
        setGroupName(e.target.value)
        !groupIds.includes(slugTransform(e.target.value)) ? (nameError && setNameError("")) : setNameError("Name already exists");
    }

    const handleSubmitGroup = ()=> {
        let error = false;
        if(groupColor === "") {
            setColorError(true)
            error = true;
        }
        
        if(groupName.trim().length===0) {
            setNameError("Name is invalid!")
            error = true;
        }
        else if(nameError) error = true;

        if(error) return

        const newGroup = {
            groupName: groupName.trim(),
            groupId: slugTransform(groupName),
            bgColor: groupColor
        }
        addGroup(newGroup);
    }

  return ( 
    <div className={styles.create_group} onClick={(e)=> e.stopPropagation()}>
        <h3>Create New Group</h3>
        <div className={styles.group_input}>
            <label htmlFor="group-name">Group Name</label>
            <input type="text" name='groupName' id='group-name' 
                value={groupName} maxLength={16} onChange={handleGroupNameChange} placeholder='Enter group name' />
            {nameError && <p className={styles.error}>{nameError}</p>}
        </div>
        <div className={styles.group_input}>
            <label>Choose Colour</label>
            <div className={styles.colors_array}>
                {groupColors.map((color)=> (
                    <div key={color} style={{backgroundColor: color}} 
                        className={color===groupColor? styles.selected : ""} onClick={()=> setGroupColor(color)}></div>
                ))}
            </div>
            {(colorError && !groupColor) && <p className={styles.error}>Colour not selected!</p> }
        </div>
        <button className={styles.create_group_button} onClick={handleSubmitGroup}>Create</button>
    </div>
  )
}
export default CreateGroup;



