import React from 'react'
import Logo from './Assets/designer.png'
import davil from './Assets/davil.png'
import davils from './Assets/davils.png'
import { BsCaretDownSquareFill } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";


import { AiFillEdit } from "react-icons/ai";


import './Assets/Website.css';
import{Input,Container, Row,Col, Button, Image,CardBody,CardText,CardTitle ,Card} from 'reactstrap';
const Website = () => {
  return (
    <>
    <Container fluid className=" min-vh-100 " style={{background:'#d9f2e4'}}>
        <Row className='p-5'>
            <Col md={6} >
               <div className='p-5' style={{textAlign:'center'}}>
                  <h1 className='mb-1 mt-5' style={{fontFamily:'Poppins',textAlign:'left', fontWeight:'1000',color: '#db7093',}}>
                   Meet Ordinaryyoucs
                  </h1>
                  <h1 className='mb-1 ' style={{fontFamily:'Poppins',fontWeight:'1000',textAlign:'left',color:' #323334'}}>
                    World's Best 
                  </h1>
                  <h1 className='text-left' style={{fontFamily:'Poppins',fontWeight:'1000',textAlign:'left',color:' #323334'}}>Community Token</h1>
                  <h5  style={{fontFamily:'Poppins',textAlign:'left',color:' #323334'}}>
                    10,000 Ordinaryyoucs on the Ethereum Blockchain
                  </h5>
                  <p style={{fontFamily:'Poppins',textAlign:'left',color:' #323334'}}>The new toke that involes Investors to earn USD 1000 thether while helping  to save dogs worldwide.</p>
               </div>
            </Col>
            <Col md={6} className='pt-5 pb-5 pl-5' >
                <div>
                <img className='f-block' src={davils} alt="davils" ></img>
                </div>
            </Col>
        </Row>
        <Row className='p-5'>
            <div className='information'> 
                <h1  style={{display: 'inline-block', color:' #323334',fontWeight:'1000'}}>An Exclusive </h1>
                <h1 style={{ display: 'inline-block',color:' #db7093',fontWeight:'1000',marginLeft:'8px'}}> Ordinaryorcs</h1>
                <p className='pb-4'>
                The new toke that involes Investors to earn USD 1000 thether while helping  to save dogs worldwide.
                </p>
            </div>
            <Col md={4}>
            <Card style={{ backgroundColor: 'white' }} className='pt-2'>
               <CardBody>
               <AiOutlineStock className='cicon' style={{ fontSize: '44px' }}  />
               </CardBody>

              <CardTitle style={{color:' #323334',fontWeight:'800'}} className="text-center mt-3">Unique Autoboost Function</CardTitle>
              <CardText className=" pb-4 cbody text-center">
                  The new toke that involes Investors to earn USD 1000 thether while helping  to save dogs worldwide.
             </CardText>
            </Card>
            </Col>
            <Col md={4}>
            <Card style={{ backgroundColor: 'white' }} className='pt-2'>
               <CardBody>
                 <AiOutlineRise  className='cicon' style={{ fontSize: '44px' }}/>
               </CardBody>

              <CardTitle style={{color:' #323334',fontWeight:'800'}}className="text-center mt-3 cbody">100% Holders Choice</CardTitle>
              <CardText className="pb-4  cbody text-center">
                  The new toke that involes Investors to earn USD 1000 thether while helping  to save dogs worldwide.
             </CardText>
            </Card>
            </Col>
            <Col md={4}>
            <Card style={{ backgroundColor: 'white' }} className='pt-2'>
               <CardBody>
                 <AiFillEdit className='cicon' style={{ fontSize: '44px'}} />
               </CardBody>

              <CardTitle style={{color:' #323334',fontWeight:'800'}} className="text-center mt-3 cbody">Anti-Dump Lock System</CardTitle>
              <CardText className="pb-4  cbody text-center">
                  The new toke that involes Investors to earn USD 1000 thether while helping  to save dogs worldwide.
             </CardText>
            </Card>
            </Col>
        </Row>
        <Row className='p-5'>
            <Col md={6} >
               <div className='p-5' style={{textAlign:'center'}}>
                  <h1 className='mb-1 mt-5 ' style={{fontFamily:'Poppins',textAlign:'left', fontWeight:'1000',color: '#323334',}}>
                   Welcome to the 
                  </h1>
                  <h1 className='mb-1 ' style={{fontFamily:'Poppins',fontWeight:'1000',textAlign:'left',color:' #db7093'}}>
                    Ordinaryorcs
                  </h1>
                  <p style={{fontFamily:'Poppins',textAlign:'left',color:' #323334'}}>The new toke that involes Investors to earn USD 1000 thether while helping  to save dogs worldwide.The new toke that involes Investors to earn USD 1000 thether while helping  to save dogs worldwide.The new toke that involes Investors to earn USD 1000 thether while helping  to save dogs worldwide.The new toke that involes Investors to earn USD 1000 thether while helping  to save dogs worldwide.</p>
                  <Button className='rbutton' style={{alignItems:'left',background:' #323334',borderRadius:'0'}}>Join Us As</Button>
               </div>
            </Col>
            <Col md={6} className='pt-5 pb-5 pl-5' >
                <div>
                <img className='f-block' src={davil} alt="davils" ></img>
                </div>
            </Col>
        </Row>
        <Row className='p-5' >
          <Row style={{background:'#323334',marginLeft:'2px'}}>
            <Col md={4} >
               <div className='p-5' style={{textAlign:'center'}}>
                  <h1 className='mb-1 mt-3' style={{fontFamily:'Poppins', fontWeight:'1000',color: 'white',marginRight:'90px'}}>
                   8245 
                  </h1>
                  <h5 className='mb-1 ' style={{fontFamily:'Poppins',fontWeight:'300',color:'white',marginRight:'90px'}}>
                    Holders
                  </h5>
               </div>
            </Col>
            <Col md={4} >
               <div className='p-5' style={{textAlign:'center'}}>
                  <h1 className='mb-1 mt-3 ' style={{fontFamily:'Poppins',textAlign:'center',  fontWeight:'1000',color: 'white'}}>
                   845,890
                  </h1>
                  <h5 className='mb-1 ' style={{fontFamily:'Poppins',fontWeight:'300',color:'white'}}>
                    Token Burned
                  </h5>
               </div>
            </Col>
            <Col md={4} >
               <div className='p-5' style={{textAlign:'center'}}>
                  <h1 className='mb-1 mt-3 ' style={{fontFamily:'Poppins', fontWeight:'1000',color: 'white'}}>
                   302K,USD
                  </h1>
                  <h5 className='mb-1 ' style={{fontFamily:'Poppins',fontWeight:'300',color:'white'}}>
                    Charity Donations
                  </h5>
               </div>
            </Col>
            </Row>
        </Row>
    </Container>
    </>
  )
}

export default Website
