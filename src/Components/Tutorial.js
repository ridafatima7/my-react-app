import React,{useState} from 'react'
import {
    Button
} from 'reactstrap'
const Tutorial =()=>{
   const [x,setx]=useState(60);
    return(
        <>
        <h3>your marks are {x}</h3>
        <Button className='primary mt-5' onClick={()=>{
            setx(80)
        }}>Update</Button>
        </>
    )
}
export default Tutorial
