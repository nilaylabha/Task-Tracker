import { Link } from 'react-router-dom'
import React from 'react'

export default function Footer() {
  return (
    <footer>
       <p> Copywright &copy; 2022</p>
       <Link to='/about'> About</Link>
    </footer>
  )
}
