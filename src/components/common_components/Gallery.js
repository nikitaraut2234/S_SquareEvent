import React from 'react';
import { Container, Carousel, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css';
export default function Gallery() {

    return (
        <div className='main'>

            <Container fluid>
                <Carousel>
                    <Carousel.Item>
                        <Row className='gallary_container'>
                            <Col md={8} >
                                <Row>
                                    <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='image_item' /></Col>
                                    <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='image_item' /></Col>
                                    <Col md={4}><Image src='/image/image6.jpg' alt='...' height={150} className='image_item' /></Col>

                                </Row>

                                <Row>
                                    <Col md={12}><Image src='/image/image6.jpg' alt='...' height={425} className='image_item' /></Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='image_item' /></Col>
                                </Row>

                                <Row>
                                    <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='image_item' /> </Col>
                                </Row>
                                <Row>
                                    <Col md={6}><Image src='/image/image8.jpg' alt='...' height={145} className='image_item' /> </Col>
                                    <Col md={6}><Image src='/image/image8.jpg' alt='...' height={145} className='image_item' /> </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
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
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='custom-card' /></Col>
                                </Row>

                                <Row>
                                    <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='custom-card' /> </Col>
                                </Row>
                                <Row>
                                    <Col md={6}><Image src='/image/image8.jpg' alt='...' height={145} className='custom-card' /> </Col>
                                    <Col md={6}><Image src='/image/image8.jpg' alt='...' height={145} className='custom-card' /> </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
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
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='custom-card' /></Col>
                                </Row>

                                <Row>
                                    <Col md={12}><Image src='/image/image6.jpg' alt='...' height={215} className='custom-card' /> </Col>
                                </Row>
                                <Row>
                                    <Col md={6}><Image src='/image/image8.jpg' alt='...' height={145} className='custom-card' /> </Col>
                                    <Col md={6}><Image src='/image/image8.jpg' alt='...' height={145} className='custom-card' /> </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>

    );
}