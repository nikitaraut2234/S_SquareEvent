import React from 'react'
import { Container,  Row, Col, Card } from 'react-bootstrap';
 
import { TfiEmail } from "react-icons/tfi";
import { CiGlobe } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Header from '../common_components/Header';
 
import './AboutUs.css';

export default function AboutUs() {
    return (
        <>
            <Container fluid className='aboutus'>

                <Container className='pt-3'>
                    <Header />
                </Container>
               <p className='img_margin text-center'> <img src='image/pic10-free-img.png' alt='...'  /></p>
                <h2 className='text-white text-center'>S_Square Events</h2>
                <h1 className='text-white text-center'>About Us</h1>
                <h3 className='text-white text-center'>Start Planning Your Wedding</h3>
            </Container>
            <Container className='mt-5'>
                  <h5 className='text-center'>Looking for Perfection?</h5>
                  <h1 className='text-center'>WE ARE HERE TO<br /> HELP YOU!</h1>
                  <p className='text-center'>Dui quam molestie sem do accusamus, mollitia ullamco asperiores conubia,<br /> suscipit incidunt, lorem lectus. Tellus molestias dui tristique blandit expedita<br /> lorem! Dolorum congue hac, quisque. Tellus molestias dui tristiqu.</p>
            </Container>

            <Container>
            <Card className='card_custom mt-5'>
                <Row>
                     <Col md={4} lg={4} xl={4} >
                    {/* <FaBars className='text-center' /> */}
                    <h1 className='text-center'><TfiEmail  color='red' /></h1>
                    <br></br>
                    <b><h4 className='text-center'>Collaborate With Us</h4></b>
                     <p className='text-center'> Sodales provident</p>
                    </Col>
                    <Col md={4} lg={4} xl={4}   >
                    <h1 className='text-center'><CiGlobe color='red' /></h1>
                    <br></br>
                     <b><h4 className='text-center'>Select Destination</h4></b>
                     <p className='text-center'> Sodales provident</p>
                     </Col>
                    <Col md={4} lg={4} xl={4} > 
                    <h1 className='text-center'><FaCalendarAlt color='red' /></h1>
                    <br></br>
                    <b><h4 className='text-center'>Start Planning</h4></b>
                     <p className='text-center'> Sodales provident</p>
                     
                    </Col>
                    
                </Row>
                </Card>
            </Container>
            <Container>
                <h5 className='text-bold'>Meet Our</h5>
                <h1 className='text-bold'>PLANNERS</h1>
                <p className='text-left'>Doloribus, eiusmod amet nostrud dolore, dicta tincidunt malesuada euismod urna.<br /> Placeat veniam ipsam velit, venenatis. Iste! Gravida modi expedita<br /> rerum officiis aut placeat.  Placeat veniam ipsam velit, venenatis. <br />Iste! Gravida modi expedita.</p>
            </Container>
           
            <Container>
                <Row>
                    <Col md={4}> 
                    <Card className="card">
                        <Card.Img src="image/team-1.jpg" alt="Jane" className='image_width' />
                        <h2 className='text-center'>Jane Doe</h2>
                            <p className="title text-center">Planner & Coordinator</p>
                        <div className='span text-center'>
                                  
                         <i><a href='https://www.facebook.com/'> <FaFacebook color='#ff4362' className='icon_height' /> </a></i>
                         <i><a href='https://www.instagram.com/s__square__events/'> <FaInstagram  color='#ff4362' className='icon_height'/></a></i >
                         <i><a href='https://twitter.com/?lang=en-in'> <AiFillTwitterCircle color='#ff4362' className='icon_height' /> </a></i>
                         </div>
                        
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="card">
                        <Card.Img src="image/team-1.jpg" alt="Jane" className='image_width' />
                        <h2 className='text-center'>Jane Doe</h2>
                            <p className="title text-center">Planner & Coordinator</p>
                        <div className='span text-center'>
                                  
                         <i><a href='https://www.facebook.com/'> <FaFacebook color='#ff4362' className='icon_height' /> </a></i>
                         <i><a href='https://www.instagram.com/s__square__events/'> <FaInstagram  color='#ff4362' className='icon_height'/></a></i >
                         <i><a href='https://twitter.com/?lang=en-in'> <AiFillTwitterCircle color='#ff4362' className='icon_height' /> </a></i>
                         </div>
                        
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="card">
                        <Card.Img src="image/team-1.jpg" alt="Jane" className='image_width' />
                        <h2 className='text-center'>Jane Doe</h2>
                            <p className="title text-center">Planner & Coordinator</p>
                        <div className='span text-center'>
                                  
                         <i><a href='https://www.facebook.com/'> <FaFacebook color='#ff4362' className='icon_height' /> </a></i>
                         <i><a href='https://www.instagram.com/s__square__events/'> <FaInstagram  color='#ff4362' className='icon_height'/></a></i >
                         <i><a href='https://twitter.com/?lang=en-in'> <AiFillTwitterCircle color='#ff4362' className='icon_height' /> </a></i>
                         </div>
                        
                    </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
             <Row>
                    <Col md={6} lg={6}  className='grand'>
                        <div className='grand_content text-center' >
                            <img src='image/fancy-border-img.png' className='m-auto'/>
                                  
                        </div>
                    </Col>
                    <Col md={6} lg={6}></Col>
                </Row>
            </Container>
                
            </>
    )
}
 