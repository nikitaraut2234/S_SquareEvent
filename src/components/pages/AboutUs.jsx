import React from 'react'
import { Container,  Row, Col } from 'react-bootstrap';
import Header from '../common_components/Header';
import './AboutUs.css';

export default function AboutUs() {
    return (
        <>
            <Container fluid className='aboutus'>

                <Container className='pt-3'>
                    <Header />
                </Container>
                <img src='image/pic10-free-img.png' alt='...' className='m-auto' />
                <h1 className='text-white'>S_Square Events</h1>
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
 