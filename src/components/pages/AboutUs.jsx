import React from 'react'
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

import { TfiEmail } from "react-icons/tfi";
import { CiGlobe } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import Header from '../common_components/Header';

import './AboutUs.css';

export default function AboutUs() {
    return (
        <>
            <Container fluid className='aboutus'>

                <Container className='pt-3'>
                    <Header />
                </Container>
                <p className='img_margin text-center'> <img src='image/pic10-free-img.png' alt='...' /></p>
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
                            <h1 className='text-center'><TfiEmail color='red' /></h1>
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
                                <i><a href='https://www.instagram.com/s__square__events/'> <FaInstagram color='#ff4362' className='icon_height' /></a></i >
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
                                <i><a href='https://www.instagram.com/s__square__events/'> <FaInstagram color='#ff4362' className='icon_height' /></a></i >
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
                                <i><a href='https://www.instagram.com/s__square__events/'> <FaInstagram color='#ff4362' className='icon_height' /></a></i >
                                <i><a href='https://twitter.com/?lang=en-in'> <AiFillTwitterCircle color='#ff4362' className='icon_height' /> </a></i>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='mt-2'>
                <Row>
                    <Col md={6} lg={6} className='grand'>
                        <Row>
                            <Col md={1}></Col>
                            <Col md={10}>
                                <div className='grand_content text-center' >
                                    <img src='image/fancy-border-img.png' className='m-auto' />

                                </div>
                                <br />
                                <h6 className='text-white text-center'>We Plan Wedding’s That Are</h6>
                                <b> <h1 className='text-white text-center'>GRAND</h1></b>
                                <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <br />
                                <p className='text-center'>
                                    <span className='span text-center'>
                                        <i><a href='https://www.facebook.com/'> <FaFacebook color='white' className='social_width' /> </a></i>
                                        <i><a href='https://www.instagram.com/s__square__events/'> <FaInstagram color='white2' className='social_width' /></a></i >
                                        <i><a href='https://twitter.com/?lang=en-in'> <AiFillTwitterCircle color='white' className='social_width' /> </a></i>
                                        <i><a href='https://youtube.com/'> <FaYoutube color='white' className='social_width' /> </a></i>
                                    </span>
                                </p>

                            </Col>
                            <Col md={1}></Col>
                        </Row>
                    </Col>
                    <Col md={6} lg={6}>
                         <Row>
                         <Col md={1}></Col>
                         <Col md={10}>
                         <h1 className='text-center mt-3'>SEND US A MESSAGE</h1>
                       
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit dem.</p>
                        <Form>
                            <Form.Group    controlId="formGroupEmail">
                                
                                <Form.Control type="text" className="input_style" placeholder="Your Name"  required/>
                            </Form.Group>
                            <Form.Group className='mt-3' controlId="formGroupEmail">
                                
                                <Form.Control type="email" className="input_style" placeholder="Your Email"  required />
                            </Form.Group>
                            <Form.Group className='mt-3' controlId="formGroupEmail">
                                
                                <Form.Control type="text" className="input_style" placeholder="Subject"  required/>
                            </Form.Group>
                            <Form.Group className='mt-3'   controlId="formGroupPassword">
                                 
                                <Form.Control type="textarea" className="input_style" placeholder="Message" required />
                            </Form.Group>
                            <button  className='align-items-center"' varient='red'>BOOK AN APPOINMENT</button>
                        </Form>
                         </Col>
                         <Col md={1}></Col>
                         </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
