import React from 'react'
import { Container,  Row, Col, Card } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
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
                <Row>
                   <Card>
                   <Col md={2} lg={3} xl={4} className='border'>
                    {/* <FaBars className='text-center' /> */}
                    </Col>
                    <Col md={2} lg={3} xl={4}  className='border'> </Col>
                    <Col md={2} lg={3} xl={4}  className='border'> </Col>
                   </Card>
                </Row>
            </Container>
            <h2 className='text-center'>Our Team</h2>
            <Container>
                <Row>
                    <Col md={4}> 
                    <div className="card">
                        <img src="images/image3.jpg" alt="Jane" className='image_width' />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div className="card">
                        <img src="images/image3.jpg" alt="Jane" className='image_width' />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div className="card">
                        <img src="images/image3.jpg" alt="Jane" className='image_width' />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
 