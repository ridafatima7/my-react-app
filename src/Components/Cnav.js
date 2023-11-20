import React from 'react'
import Logo from './Assets/Frame.png'
import './Assets/Cfile.css';
const Cnav = () => {
  return (
    <nav className='Container'>
    <div className='logo'>
      <img src={Logo} alt=''></img>
      </div>
    <ul>
       <li> Home</li>
       <li>About</li>
       <li>Contact</li>
    </ul>
    </nav>
  )
}

export default Cnav
