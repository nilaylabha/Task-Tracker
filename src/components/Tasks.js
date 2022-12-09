import React from 'react'
import Task from './Task'

export default function Tasks(props) {
   
  return (
    <>
    {props.tasks.map((task) => (
    <Task key={task.id} task={task} onDel={props.onDelete} ontoggle={props.ontoggle}/>
    ))}
    </>
  )
}
