import { useState } from "react"
import React  from 'react'

export default function AddTask(props) {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()
        if (!text){
            alert("please ente task")
            return
        }

        props.addtask({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add you task' value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add day & time of task' value={day} onChange={(e)=>setDay(e.target.value)}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}
