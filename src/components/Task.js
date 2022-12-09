import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function Task(props) {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' :''}`} onDoubleClick={()=>props.ontoggle(props.task.id)}>
            <h3>{props.task.text} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={()=>props.onDel(props.task.id)}/></h3>
            <p>{props.task.day}</p>
        </div>
    )
}
