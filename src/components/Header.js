import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

export default function Header(props) {
    const location= useLocation()
    // const onClick=()=>{
    //     console.log("hello")
    // }

  return (
    <>
   <header className='header'>
    <h1>{props.title}</h1>
    {location.pathname==='/'&&< Button text={props.showAddTask ? 'close' :'Add'} color={props.showAddTask?"Red" :"Green"} onClick={props.showAddTaskpanel}  />}
    
    </header>
    </>
  )
}

Header.defaultProps={
    title:"Here is the title of app"
}

Header.propTypes={
    title : PropTypes.string,
}