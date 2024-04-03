import React from 'react';
import Galleryimages from './Galleryimages'
import { Container, Carousel } from 'react-bootstrap';
import './Gallery.css';
export default function Gallery() {
    const galleryImages = [
        {
            img: '/image/image7.jpg'
        },
        {
            img: '/image/Trishala.webp'
        },
        {
            img: '/image/Trishala.webp'
        },
        {
            img: '/image/Trishala.webp'
        },
        {
            img: '/image/Trishala.webp'
        },
        {
            img: '/image/final render.webp'
        },
        {
            img: '/image/image7.jpg'
        },
        {
            img: '/image/image7.jpg'
        },
        {
            img: '/image/Trishala.webp'
        },
        {
            img: '/image/Trishala.webp'
        },
        {
            img: '/image/Trishala.webp'
        },
        {
            img: '/image/image7.jpg'
        }
    ]
    return (
        <div className='main'>

            <Container fluid>
                <Carousel>
                    <Carousel.Item>
                        <Galleryimages
                            galleryImages={galleryImages}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Galleryimages
                            galleryImages={galleryImages}
                        />
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <Galleryimages
                            galleryImages={galleryImages}
                        />
                    </Carousel.Item>
                </Carousel>



            </Container>
        </div>

    );
}