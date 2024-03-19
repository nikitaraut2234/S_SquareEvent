import React from 'react';
import { Container, Row, Col, Button, Form, Card, Image } from 'react-bootstrap';
import Gallery from '../common_components/Gallery';
import './Services.css';
import Header from '../common_components/Header';

export default function Services(){
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
               className='img_height2'
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
            <Card.Img overlay={Col} src='/image/e01144_27e4e27a648a49489a46b22dc4272333~mv2.webp' alt='...' height={500} />
          </Col>
        </Row>
        <br></br>
        <Container>
          <b><h1 className='text-center'>We Provide</h1></b>
          <p className='text-center'>Value for Money Services</p>
          <Container className='text-center'>
            <Row className='p-1'>
              <Col md={1}></Col>
              <Col md={3} className='card_custom border m-2'>

                <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
                <b className='text-center'><h6>Decoration</h6></b>

                <small><p className='text-center'>Proffetionally designed decor at atteracive prices</p></small>
              </Col>
              <Col md={3} className='card_custom border m-2'>

                <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
                <b className='text-center'><h6>Photography</h6></b>

                <small><p className='text-center'>Expert candid and traditional photography teams</p></small>
              </Col>
              <Col md={3} className='card_custom border m-2'>

                <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
                <b className='text-center'><h6>Videography</h6></b>

                <small><p className='text-center'>High quality traditional and candid videography</p></small>
              </Col>
              <Col md={1}></Col>
            </Row>
            <Row className='p-1'>
              <Col md={1}></Col>
              <Col md={3} className='card_custom border m-2'>

                <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
                <b className='text-center'><h6>Makeup & hairstyling</h6></b>

                <small><p className='text-center'>Talented make up artists who ensure you look your best</p></small>
              </Col>
              <Col md={3} className='card_custom border m-2'>

                <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
                <b className='text-center'><h6>Mehendi</h6></b>

                <small><p className='text-center'>  Experienced mehendi artists who provide a wide range of designs  </p></small>
              </Col>
              <Col md={3} className='card_custom border m-2'>

                <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
                <b className='text-center'><h6>Catering</h6></b>

                <small><p className='text-center'>Delicious menus covering all cuisines and price ranges</p></small>
              </Col>
              <Col md={1}></Col>
            </Row>
            <Row className='p-1'>
              <Col md={1}></Col>
              <Col md={3} className='card_custom border m-2'>

                <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
                <b className='text-center'><h6>Entertainment</h6></b>

                <small><p className='text-center'>From DJs to traditional performances, we have high quality artists</p></small>
              </Col>
              <Col md={3} className='card_custom border m-2'>

                <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
                <b className='text-center'><h6>Venue</h6></b>

                <small> <p className='text-center'>We help you find the right space that matches your budget</p></small>
              </Col>
              <Col md={3} className='card_custom border m-2'>

                <p className='text-center mt-2'><Image src="/image/image6.jpg" height={60} width={60} roundedCircle /></p>
                <b className='text-center'><h6>Invites</h6></b>

                <small> <p className='text-center'>Invitation designs that perfectly match your decor theme</p></small>
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
        <Container>
          <br></br>
          <br></br>
          <b><h1 className='text-center'>The SSquare Difference</h1></b>
          <h3 className='text-center text-muted'>Reasons why we are the best in the business</h3>
          <br></br>
          <Container>
            <Row>
              <Col md={1}></Col>
              <Col md={5}>
                <Card className='card-shadow' >
                  <Card.Img src='/image/img3.png'
                    alt='...'
                    position='top' height={200} />
                  <br></br>
                  <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                      <Card.Img src='/image/img3.png'
                        alt='...'
                        position='top' height={100} />
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                </Card>
              </Col>
              <Col md={1}></Col>
              <Col md={4}>
                <br></br>
                <br></br>
                <br></br>
                <b> <h3 className='text-center mt-3'><span style={{ color: 'orange' }}>Trusted</span> Team Of Professionals</h3></b>
                <p className='text-muted text-center'>We have a large team of experts who will make your wedding dream come true</p>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Container>
          <Container className='mt-3'>
            <br></br>
            <br></br>
            <Row>
              <Col md={1}></Col>
              <Col md={6}>
                <Card.Img src='image/image8.jpg'
                  alt='...'
                  position='top' height={250} />
              </Col>
              <Col md={4}>
                <b> <h3 className='text-center mt-5'><span style={{ color: 'orange' }}>Value</span> For Money</h3></b>
                <p className='text-muted text-center'>Get the best quality services at the most reasonable prices</p>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Container>
        </Container>
        <Container className='mt-3'>
          <br></br>
          <br></br>
          <br></br>
          <b><h2 className='text-center'>How It Works</h2></b>
          <p className='text-center text-muted'>5 easy steps for a hassle-free wedding</p>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Col md={1}></Col>
            <Col md={2}>

              <b><p className='text-center'>Speak to us</p></b>
              <small> <p className='text-center'>Give your requirement & preferences our wedding expert
                See the options</p></small>
            </Col>
            <Col md={2}>
              <br></br>
              <br></br>
              <br></br>
              <b><p className='text-center'>See the options</p></b>
              <small> <p className='text-center'>Get a walkthrough of our designs, pricing & services
              </p></small>
            </Col>
            <Col md={2}>

              <b><p className='text-center'>Get custom package</p></b>
              <small> <p className='text-center'>Receive a customised package based on your requirement</p></small>
            </Col>
            <Col md={2}>
              <br></br>
              <br></br>
              <br></br>
              <b><p className='text-center'>Book us</p></b>
              <small> <p className='text-center'>Pay small booking fee to confirm once you are happy</p></small>
            </Col>
            <Col md={2}>

              <b><p className='text-center'>Relax</p></b>
              <small> <p className='text-center'>Sit back & relax while we do all the work</p></small>
            </Col>
            <Col md={1}></Col>
          </Row>

        </Container>
        <Container className='mt-5'>
          <b><h2 className='text-center'>See What Our Customers Say About Us</h2></b>
          <br></br>
          <br></br>
          <Row>
            <Col md={4} className='card-border'>
              
                <Card.Img src='/image/img3.png'
                  alt='...'
                  position='top' className='image' />
                <br></br>
                <Card.Title className='text-center'><h6>*****</h6></Card.Title>
                <Card.Text className='text-muted'>
                  Thank you so much for working around the clock for us and making this event so so memorable for the two of us. The decor was exactly how I imagined and I couldn't have asked for more perfection than this.
                  <br></br>You guys are a great team and I really love your transparency and coordination.
                  Once again, thank you all for doing this for us.
                  <br></br>
                  <br></br>
                  <br></br>
                  Much love 
                  <br></br>
                  <br></br>
                  <br></br>
               
                  
                  
                   <p className='text-muted mt-5'> Sachit & Monish <br></br>The Tamarind Tree, Bangalore </p>
                   
                  
                </Card.Text>
                 
             
            </Col>
            <Col md={4} className='card-border'>
              
                <Card.Img src='/image/img3.png'
                  alt='...'
                  position='top' className='image' />
                <br></br>
                <Card.Title className='text-center'><h6>*****</h6></Card.Title>
                <Card.Text className='text-muted'>
                Getting Rose on board for décor for our wedding was the best decision ever! Right from the get go,
                 she has been prompt to respond. She understood exactly what we wanted from a short conversation and diligently prepared a presentation with 
                 great options for us to choose from. She tweaked stuff to make sure while we stayed within budget, we wouldn't have to compromise on designs we liked. She came along with us twice to the venue, that too on two consecutive days. Because of her, we got 
                a venue the hotel had missed showing us previously, one that was ultimately the perfect choice.
                <br></br>
                <br></br>
                <p className='text-muted'> Pranya Prabhu <br></br>Taj West End, Bangalore</p>
                </Card.Text>
              
            </Col>
            <Col md={4} className='card-border'>
               
                <Card.Img src='/image/img3.png'
                  alt='...'
                  position='top' className='image' />
                <br></br>
                <Card.Title className='text-center'> <h6> *****</h6></Card.Title>
                <Card.Text className='text-muted'>
                So glad to have found Meragi and Praha as our wedding decorators! Right from the start, Praha ensured she understood our requirements and guided us with ideas and even No’s where we needed it. Be it visiting the venue or getting on calls and helping us visualise our special day, Meragi came through on everything.
                <br></br>Praha was very communicative and we absolutely had nothing to worry about at any step. The venue looked magical on the final day and all our guests loved it. Thank you for being a part of our special day and making it more colorful! ❤️
                  <br></br>
                  <br></br>
                  <br></br>
                  Vidushi Singh<br></br>The Leela Place, Bangalore
                </Card.Text>
               
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  );
};

//export default Services;

