import React, { useRef,useState,useEffect } from 'react'
import {
    Input,
    Button
} from 'reactstrap'
import './Assets/Todo.css';
const Todo = () => {
    let count=0;
    const inputref=useRef(null);
    const [todos,setTodos]=useState([]);
    const add =()=>{
        setTodos([...todos,{no:count++,text:inputref.current.value,display:""}]);
        inputref.current.value="";
    }
    useEffect(()=>{
       console.log(todos);
    },[todos])
  return (
    <div className='todo'>
        <div className='Todo_header'>
         To do List
        </div>
        <div className='todoAdd'>
            <Input ref={inputref} type='text' placeholder='add your text' className='todoInput'></Input>
            <div onClick={add}  className='todo-add-btn'>Add</div>
        </div>
    </div>
  )
}

export default Todo;
