import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Gallery.css';
export default function App() {
    return (
        <div>
            <Container fluid>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="img_width d-block"
                        src="/image/image5.jpg"
                         
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img_width d-block"
                        src="/image/image5.jpg"
                        
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img_width d-block"
                        src="/image/image5.jpg"
                         
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
            </Carousel>
            </Container>
        </div>

    );
}