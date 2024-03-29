import React from 'react';
import Galleryimages from './Galleryimages'
import { Container, Carousel, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css';
export default function Gallery() {
        const galleryImages=[
            {
                img:'/image/271491370_141520791600778_5945632228028406481_n.jpg'
            },
            {
                img:'/image/271491370_141520791600778_5945632228028406481_n.jpg'
            },
            {
                img:'/image/271491370_141520791600778_5945632228028406481_n.jpg'
            },
            {
                img:'/image/271491370_141520791600778_5945632228028406481_n.jpg'
            },
            {
                img:'/image/271491370_141520791600778_5945632228028406481_n.jpg'
            },
            {
                img:'/image/271491370_141520791600778_5945632228028406481_n.jpg'
            }
        ]
    return (
        <div className='main'>

            <Container fluid>
                <Galleryimages
                 galleryImages={galleryImages}
                /> 
            
            </Container>
        </div>

    );
}