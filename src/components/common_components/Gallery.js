import React from 'react';
import Galleryimages from './Galleryimages'
import Galleryimages2 from './Gallaryimages2';
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
    ];
    
    const galleryImages2=[
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
        }
    ]

    return (
        <div className='main'>

            <Container fluid>
                {/* <Galleryimages
                    galleryImages={galleryImages}
                /> */}
                <Carousel>
                    <Carousel.Item>
                        <Galleryimages
                            galleryImages={galleryImages}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                       <Galleryimages2 galleryImages2={galleryImages2} />

                    </Carousel.Item>
                    
                    {/* <Carousel.Item>
                        <Galleryimages
                            galleryImages={galleryImages}
                        />
                    </Carousel.Item> */}
                </Carousel>



            </Container>
        </div>

    );
}