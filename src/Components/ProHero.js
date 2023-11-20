import React from 'react'
import{
    Form,
    Button,
    Input
    } 
    from 'reactstrap';
    import './Assets/Todo.css';
    import amazon from './Assets/amazon.png';
    import flikpart from './Assets/flipkart.png';
    import shoes from './Assets/shoe_image.png';
const ProHero = () => {
  return (
    <div className="Hero container">
      <div className="Hero-content">
         <h1>YOUR FEET DESERVE THE BEST</h1>
         <p>
         YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
         </p>
         <div className='hero-btn'>
           <Button>Shop Now</Button>
           <Button className='secondary-btn'>Category</Button>
         </div>
         <div className='shopping'>
            <p>Also Available On</p>
            <div className='brand-icons'>
                <img src={amazon} alt=""></img>
                <img src={flikpart} alt=""></img>
            </div>
         </div>
      </div>
      <div>
        <img src={shoes} alt=""></img>
      </div>
    </div>
  )
}

export default ProHero
