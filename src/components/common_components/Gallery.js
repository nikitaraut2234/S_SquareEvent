import React from 'react';
import { Container, Carousel, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css';
export default function App() {
    return (
        <div>
            <Container fluid>
                <Carousel>
                    <Carousel.Item>
                    {/* <div class="row"> 
  <div className="column">
    <img src="/w3images/wedding.jpg"  style={{width:'100%'}} />
    <img src="/w3images/rocks.jpg" style={{width:'100%'}}/>
    <img src="/w3images/falls2.jpg" style={{width:'100%'}}/>
    <img src="/w3images/paris.jpg" style={{width:'100%'}}/>
    <img src="/w3images/nature.jpg" style={{width:'100%'}}/>
    <img src="/w3images/mist.jpg" style={{width:'100%'}}/>
    <img src="/w3images/paris.jpg" style={{width:'100%'}}/>
  </div>
  
  <div className="column">
    <img src="/w3images/underwater.jpg" style={{width:'100%'}}/>
    <img src="/w3images/ocean.jpg" style={{width:'100%'}}/>
    <img src="/w3images/wedding.jpg" style={{width:'100%'}}/>
    <img src="/w3images/mountainskies.jpg" style={{width:'100%'}}/>
    <img src="/w3images/rocks.jpg" style={{width:'100%'}}/>
    <img src="/w3images/underwater.jpg" style={{width:'100%'}} />
  </div> 
   
  <div className="column">
    <img src="/w3images/wedding.jpg" style={{width:'100%'}}/>
    <img src="/w3images/rocks.jpg" style={{width:'100%'}}/>
    <img src="/w3images/falls2.jpg" style={{width:'100%'}}/>
    <img src="/w3images/paris.jpg" style={{width:'100%'}}/>
    <img src="/w3images/nature.jpg" style={{width:'100%'}}/>
    <img src="/w3images/mist.jpg" style={{width:'100%'}}/>
    <img src="/w3images/paris.jpg" style={{width:'100%'}}/>
  </div>
  
  <div className="column">
    <img src="/image/image5.jpg" style={{width:'100%'}}/>
    <img src="/image/image5.jpg" style={{width:'100%'}}/>
    <img src="/image/image5.jpg" style={{width:'100%'}}/>
    <img src="/image/image5.jpg" style={{width:'100%'}}/>
    <img src="/image/image5.jpg" style={{width:'100%'}}/>
    <img src="/image/image5.jpg" style={{width:'100%'}}/>
  </div>
                    </div> */}
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

                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img_width d-block"
                            src="/image/image8.jpg"

                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>

    );
}