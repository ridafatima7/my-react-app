import React from 'react';
import {Button,Card,CardBody,
    Col,CardImg,CardTitle,CardText,
    Container,Row
} from 'reactstrap'

const Bproject = ({title,description,image}) => {
   
      const cardStyle = {
        width: '90%',
        height:'70%',
        display: 'flex',
        marginBottom: '20px',
        background: 'radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(164.69, 238.74, 255, 0.20) 0%, rgba(109.97, 190.80, 244.37, 0.04) 77%, rgba(69.95, 144.07, 212.50, 0) 100%)', 
        borderRadius: 19.45, 
        border: '0.66px #EABFFF solid',
        backdropFilter: 'blur(26.37px)',
        padding:'20px',
        boxSizing: 'unset',
        marginLeft:'-20px'
      };
      const cardRow={
        width: '30%', 
        // height: '100%',
        paddingTop:'40px',
        // marginLeft:'40px',
        // ,marginRight:'45px',
        gap: '50px', 

      }
      const cardImgStyle = {
        width: '100px', 
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%', 
        marginRight: '20px',
        background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', 
        boxShadow: '0px 5.700000286102295px 9.5px rgba(0, 0, 0, 0.25)',
         marginTop: '10px'
      };
      const heading={
      color: 'white', 
      fontSize: 16, 
      fontFamily: 'Inter',
      fontWeight: '600',
      wordWrap: 'break-word',
      marginTop:'-104px',
      marginLeft:'90px',
      };
      const cardText={
        // width: '100%', 
        // height: '100%',
        color: 'white', 
        fontSize: 12, 
        fontFamily: 'Inter', 
        fontWeight: '400',
        wordWrap: 'break-word',
        marginTop:'-6px',
        marginLeft:'100px',
      }
  return (
   
          <Col md={4} style={cardRow} className="ml-auto">
          <Card style={cardStyle}>
            <CardImg src={image} alt="Card image cap" style={cardImgStyle} />
            <CardBody>
              <CardTitle style={heading}>{title}</CardTitle>
              <CardText style={cardText}>{description}</CardText>
            </CardBody>
          </Card>
          </Col>    
  )
}

export default Bproject
