import React from 'react'
import './Assets/Todo.css';

import{
Form,
Button,
Input
} 
from 'reactstrap';
import {useState,useEffect} from 'react';
import logo from './Assets/brand_logo.png';
const Project = () => {
  return (
     <div>
      <nav className='container'>
        <div className='ms-auto float-left'>
            <img style={{ justifyContent: 'left'}} src={logo} alt='logo'></img>
        </div>
        <ul className='navul'>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <Button className='navbtn'>Login</Button>
      </nav>
     </div>
  )
}

export default Project
