import React from 'react'
import{
Form,
Button,
Input
} from 'reactstrap';
import {useState} from 'react';

export default function Signup() {
    const  [name, setname] =  useState('');
    const  [Email, setemail] =  useState('');
    const  [Phone, setphone] =  useState('');
    // const  handleChange = (e) => {
	// 	console.log(e.target.value);
    //     setname(e.target.name);
    //     setemail(e.target.Email);
    //     setphone(e.target.Phone)
	// }; 
    const [formData, setFormData] = useState({
        myname: '',
        email: '',
        phone: '',

    });
    const handleChange = (e) => {
        console.log(formData);
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${formData.myname}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);

    };   
  return (
    <>
    <div>
        <h1>Signup</h1>
        <Form onSubmit={handleSubmit}>
        <h4>Name {formData.myname}</h4>
        <Input
         type='text' 
         placeholder='Enter Name' 
         name='myname'
         value={formData.myname}
         onChange={handleChange}
         >
            {console.log({name})}
         </Input>
         <h4>Email {formData.myname}</h4>
         <Input
          name='email'
          type='email' 
          placeholder='Enter email'
          value={formData.email}
          onChange={handleChange}
          >
            {console.log(formData.email)}
_          </Input>
         <h4>Phone:{formData.myname}</h4>
         <Input
          name='phone'
          type='text' 
          placeholder='Enter text'
          value={formData.phone}
          onChange={handleChange}
          >
            {console.log(formData.phone)}
          </Input>

         <button type="submit" color="Primary">Regiser</button>
        </Form>
    </div>
    </>
  );
}
