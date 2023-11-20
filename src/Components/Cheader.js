import React,{useState} from 'react'
import './Assets/Cfile.css'
import styles from './Assets/Cfile.css'
import { BsEnvelope } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
    Button
} from 'reactstrap';
const Cheader = () => {

  return (
    <div>
       <div className='Conten-section'>
          <h1>CONTACT US</h1>
          <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
       </div>
       <section className='Dsection'>
          <div className='Cform'>
            <div className='Cbutton'>
               <Button>
                <BsEnvelope style={{ fontSize: '24px' }}  />
                VIA SUPPORT CHAT</Button>
                <Button>
                <BsFillTelephoneFill />
                VIA CALL</Button>
            </div>
            <div className='outline _btn1'>
                <Button className='outline _btn'>Email</Button>
            </div>
          </div>
          <div className='Cimage'>
          
          </div>
       </section>
    </div>
  )
}

export default Cheader
