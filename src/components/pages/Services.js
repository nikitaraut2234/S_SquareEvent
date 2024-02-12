import React from 'react';
import { Container, Row, Col, Button, Form, Card, Image} from 'react-bootstrap';
import Gallery from '../common_components/Gallery';                               
import './Services.css';
import Header from '../common_components/Header';
const Services = () => {
  return (
    <div>
      <Container className='mt-3'>
        <Header />

        <Row>
          <Col md={6}>

            <h2>  &nbsp;&nbsp;&nbsp;#MakeItBeautiful</h2>
            <img
              src="./image/logo.png"
              alt="S_Square"
              style={{ height: '100px', width: '200px' }}
            />
            <p className='display-5'>Wedding Services</p>
            <p>Modern. Convenient. Affordable</p>
            <b><p className='text-primary'>1500+ Weddings | 10+ Years | 4.8/5 Rating</p></b>
            <br></br>
            <Form>
              <Row>
                <Col md={6}>
                  <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name" id="email" />
                  </div>
                </Col>
                <Col md={6}>
                  <div class="form-group">
                    <input type="number" className="form-control" placeholder="Enter Phone" id="number" />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <div class="form-group">
                    <input type="date" className="form-control" placeholder="When is your event?" id="date" />
                  </div>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col md={10}><Button className='btn btn-block' variant='danger'>Contact Us</Button></Col>
                <Col md={2}></Col>
              </Row>
            </Form>
          </Col>
          <Col md={6}>
            <Card.Img overlay={Col} src='/image/image6.jpg' alt='...' height={500} />
          </Col>
        </Row>
        <br></br>
        <Container>
          <b><h1 className='text-center'>We Provide</h1></b>
          <p className='text-center'>Value for Money Services</p>
          <Container>
            <Row className='p-1'>
              <Col md={1}></Col>
              <Col md={3} className='card_custom border m-4'>
               
               <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
               <b  className='text-center'><h6>Decoration</h6></b>
                
               <p  className='text-center'>Proffetionally designed decor at atteracive prices</p>
              </Col>
              <Col md={3} className='card_custom border m-4'>
               
               <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
               <b  className='text-center'><h6>Photography</h6></b>
               
               <p  className='text-center'>Expert candid and traditional photography teams</p>
              </Col>
              <Col md={3}className='card_custom border m-4'>
              
               <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
               <b  className='text-center'><h6>Videography</h6></b>
                
               <p  className='text-center'>High quality traditional and candid videography</p>
              </Col>
              <Col md={1}></Col>
            </Row>
            <Row  className='p-1'>
              <Col md={1}></Col>
              <Col md={3} className='card_custom border m-4'>
              
               <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
               <b  className='text-center'><h6>Makeup & hairstyling</h6></b>
               
               <p  className='text-center'>Talented make up artists who ensure you look your best</p>
              </Col>
              <Col md={3} className='card_custom border m-4'>
             
               <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
               <b  className='text-center'><h6>Mehendi</h6></b>
                
               <p  className='text-center'>  Experienced mehendi artists who provide a wide range of designs  </p>
              </Col>
              <Col md={3}className='card_custom border m-4'>
              
               <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
               <b  className='text-center'><h6>Catering</h6></b>
               
               <p  className='text-center'>Delicious menus covering all cuisines and price ranges</p>
              </Col>
              <Col md={1}></Col>
            </Row>
            <Row  className='p-1'>
              <Col md={1}></Col>
              <Col md={3} className='card_custom border m-4'>
             
               <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
               <b  className='text-center'><h6>Entertainment</h6></b>
               
               <p  className='text-center'>From DJs to traditional performances, we have high quality artists</p>
              </Col>
              <Col md={3} className='card_custom border m-4'>
               
               <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
               <b  className='text-center'><h6>Venue</h6></b>
                
               <p  className='text-center'>We help you find the right space that matches your budget</p>
              </Col>
              <Col md={3}className='card_custom border m-4'>
               
               <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
               <b  className='text-center'><h6>Invites</h6></b>
                
               <p  className='text-center'>Invitation designs that perfectly match your decor theme</p>
              </Col>
              <Col md={1}></Col>
            </Row>
             
          </Container>
          <Container>
             
            <b><h2 className='text-center'>1500+ Designs Delivered</h2></b>
            <p className='text-center text-muted display-6'>Across All Styles, Price Ranges & Venues</p>
          </Container>
        </Container>
        <Container fluid>
          <Gallery />
        </Container>

      </Container>
    </div>
  );
};

export default Services;
 
