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
                img:'/image/322916973_1335494907284101_6554862916736957411_n.webp'
            },
            {
                img:'/image/271491370_141520791600778_5945632228028406481_n.jpg'
            },
            {
                img:'/image/322916973_1335494907284101_6554862916736957411_n.webp'
            },
            {
                img:'/image/271491370_141520791600778_5945632228028406481_n.jpg'
            },
            {
                img:'/image/322916973_1335494907284101_6554862916736957411_n.webp'
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