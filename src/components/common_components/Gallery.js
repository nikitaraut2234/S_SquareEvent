import React from 'react';
import { Container, Carousel, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css';
export default function App() {
    return (
        <div>
            <Container fluid>
                <Carousel>
                    <Carousel.Item>
                    <Row className='row'>
                            <Col md={12} className='column'>

                                <Row>
                                    <Col md={8} >
                                        <Row>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='custom-card' /></Col>

                                        </Row>

                                        <Row>
                                            <Col md={12}><Image src='/image/image6.jpg' alt='...' height={425} className='custom-card' /></Col>

                                            
                                        </Row>
                                        <Row>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={141} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={141} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={142} className='custom-card' /></Col>
                                        </Row>
                                         
                                    </Col>
                                    <Col md={4}>
                                        <Row>
                                            <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='custom-card' /></Col>
                                        </Row>

                                        <Row>
                                            <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='custom-card' /> </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}><Image src='/image/image8.jpg' alt='...' height={286} className='custom-card' /> </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Row className='row'>
                            <Col md={12} className='column'>

                                <Row>
                                    <Col md={8} >
                                        <Row>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='custom-card' /></Col>

                                        </Row>

                                        <Row>
                                            <Col md={12}><Image src='/image/image6.jpg' alt='...' height={425} className='custom-card' /></Col>

                                            
                                        </Row>
                                        <Row>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={141} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={141} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={142} className='custom-card' /></Col>
                                        </Row>
                                         
                                    </Col>
                                    <Col md={4}>
                                        <Row>
                                            <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='custom-card' /></Col>
                                        </Row>

                                        <Row>
                                            <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='custom-card' /> </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}><Image src='/image/image8.jpg' alt='...' height={286} className='custom-card' /> </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Row className='row'>
                            <Col md={12} className='column'>

                                <Row>
                                    <Col md={8} >
                                        <Row>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='custom-card' /></Col>

                                        </Row>

                                        <Row>
                                            <Col md={12}><Image src='/image/image6.jpg' alt='...' height={425} className='custom-card' /></Col>

                                            
                                        </Row>
                                        <Row>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={141} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={141} className='custom-card' /></Col>
                                            <Col md={4}><Image src='/image/image6.jpg' alt='...' height={142} className='custom-card' /></Col>
                                        </Row>
                                         
                                    </Col>
                                    <Col md={4}>
                                        <Row>
                                            <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='custom-card' /></Col>
                                        </Row>

                                        <Row>
                                            <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='custom-card' /> </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}><Image src='/image/image8.jpg' alt='...' height={286} className='custom-card' /> </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>

    );
}