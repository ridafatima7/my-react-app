import React from 'react'
import './Assets/Cfile.css';
import Logo from './Assets/LOGO.png'
import {Button,Card,CardBody,
    Col,CardImg,CardTitle,CardText
} from 'reactstrap'
import backgroundImage from './Assets/bg.png';
const Rnav = () => {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        flexDirection:'row',
        paddingTop:'40px',
        // backgroundPosition: 'center center', 
        // height: auto,

      };
  return (
    <div className='Rcontainer'>
      <div style={{alignItems:'left',width:'50%',display:'flex'}} >

        <img style={{marginRight:'360px'}} src={Logo} alt=""></img>
        <input
        placeholder='search food....'
        className='search'
        ></input>
      </div>
      {/* <div style={{display:'inline',width:'50%',marginRight:'760px'}}>
        
      </div> */}
      <div className='Rbcontainer'  style={{width:'100%',paddingBottom:'30px'}}>
        <button className='Rbutton'>All</button>
        <button className='Rbutton'>Breakfast</button>
        <button className='Rbutton'>Lunch</button>
        <button className='Rbutton'>Dinner</button>
      </div>
     <div className='row' style={sectionStyle}>
     <Col md={4}>
         <Card className='Card1'> 
            <CardImg  top width='100%' src='https://placekitten.com/300/200' alt='Card image cap' className='CardImg1'/>
            <CardBody className='CardBody1'>
              <CardTitle>Boiled Egg</CardTitle>
              <CardText>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <CardImg style={{width: '100%', height: '100%', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', boxShadow: '0px 5.700000286102295px 9.5px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} src="https://placekitten.com/300/200" />
            <CardBody>
              <CardTitle>Macrooni</CardTitle>
              <CardText>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.</CardText>
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <CardImg style={{borderRadius: '15px 0 0 15px',width: '100%', height: '100%', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', boxShadow: '0px 5.700000286102295px 9.5px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} src="https://placekitten.com/300/200" />
            <CardBody>
              <CardTitle>Rice</CardTitle>
              <CardText>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.</CardText>
            </CardBody>
          </Card>
        </Col>
    </div>
    </div>

  )
}

export default Rnav
