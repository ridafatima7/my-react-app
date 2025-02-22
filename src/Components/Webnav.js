import React from 'react'
import Logo from './Assets/designer.png'
import './Assets/Cfile.css'; 
import {Link} from 'react-router-dom'
import{Input,Container, Navbar,Nav, Button,NavItem,NavLink, NavbarBrand,Image } from 'reactstrap';
const Webnav = () => {
  return (
    <>
     <Navbar bg="light" expand="lg" style={{background:"#d9f2e4"}}>
      <Container fluid >
      <Nav className="mr-auto" navbar bg="light"> 
           <NavbarBrand href="/"><img src={Logo} alt="Logo" fluid /></NavbarBrand> 
           <NavItem style={{ marginLeft: '320px', fontFamily: 'Poppins' }} className='pt-2'>
           <Link to="/about" className="nav-link">
               About Us
           </Link>
           </NavItem>
           <NavItem className='pt-2' style={{ fontFamily: 'Poppins' }}>
            <Link to="/FAQs" className="nav-link">
                Ordinaryoucs
            </Link>
         </NavItem>
                <NavItem className='pt-2' style={{fontFamily:'Poppins'}} > 
                    <NavLink href="#">FAQs</NavLink> 
                </NavItem> 
                <NavItem className='pt-2' style={{ fontFamily:'Poppins'}} > 
                <Button variant="outline-white" style={{ background: 'white',border:'white', borderRadius: '0' ,color: 'black', marginLeft: '320px' }}>Connect Wallet</Button>
                </NavItem> 
          </Nav> 
      </Container>
    </Navbar>
    </>
  )
}

export default Webnav
