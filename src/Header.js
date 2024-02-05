// Header.js
//import Service from './Service'
import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';
//import AppNavbar from './Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

import { Card, CardImgOverlay } from 'react-bootstrap';


const Header = () => {

  return (
    <div>
      <header>
        <div>
          
          <Navbar bg="white" variant="dark" className="navbar" expand="lg">
            <Container>
              <Navbar.Brand href="#" className='text-dark'>
                <img
                  src="./image/logo.png"
                  alt="S_Square"
                  style={{ height: '50px', width: '75px' }}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button"><Button variant="primary"> <FaBars /> </Button></Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav justify-content-end">

                <Nav className="float-end">
                  <Nav.Link className='text-dark' href="#home">
                    Home
                  </Nav.Link>

                  <Nav.Link className='text-dark' href="#services">Services</Nav.Link>
                  <Nav.Link className='text-dark' href="#career">Career</Nav.Link>
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container className="header-content">
            <Row>
              <Col md={6}>
                <h1 className='text-center text mt-4'>Wedding  Made Easy</h1>

              </Col>
              <Col md={6}>
                <Form className='p-3 card' id="getbtn">
                  <h4>Speak To Our Expert</h4>
                  <p>Have all question answered and get a free competitive quote </p>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Full Name" required />
                    <br />
                    <Form.Label>Phone Number*</Form.Label>
                    <Form.Control type="number" placeholder="Enter Your Phone Number" required />
                    <br />
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type="date" placeholder="When is Your event?" required />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="checkboxForm">
                    <Form.Check
                      type="checkbox"
                      label="Send me update on Whatsapp"

                    />
                  </Form.Group><br />
                  <Button variant="denger" className='btn btn-block btn-danger' type="submit">
                    Get Instant Quote
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <div>
        <Container className='mt-2'>
          <p className='text-center text-muted'>Convenient packages & reliable pricing</p>
          <h1 className='text-center '>Services we offer</h1>
          <Row className='row-cols-1 row-cols-md-4'>
            <Col>
              <Card className='card-no-shadow' >
                <Card.Img src='/image/img3.png'
                  alt='...'
                  position='top' className='image' />
                <br></br>
                <Card.Title className='text-center'><h6>Wedding Decor</h6></Card.Title>
                <Card.Text className='text-center'>
                  From design consultation to flawless execution.
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className='card-no-shadow'>
                <Card.Img src='/image/img3.png'
                  alt='...'
                  position='top' className='image' />
                <br></br>
                <Card.Title className='text-center'><h6>Wedding Photography</h6></Card.Title>
                <Card.Text className='text-center'>
                  Turn your wedding day into a timeless masterpiece.
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className='card-no-shadow'>
                <Card.Img src='/image/img3.png'
                  alt='...'
                  position='top' className='image' />
                <br></br>
                <Card.Title className='text-center'> <h6>Venue Consultation</h6></Card.Title>
                <Card.Text className='text-center text-muted'>
                  Get expert help in finding the perfect venue for your wedding.
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className='card-no-shadow'>
                <Card.Img src='/image/img3.png'
                  alt='...'
                  position='top' className='image' />
                <br />
                <Card.Title className='text-center'> <h6>SSquare Exclusive</h6></Card.Title>
                <Card.Text className='text-center'>
                  Our xclusiv offering for larger-than-life, luxury weddings
                </Card.Text>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col className='text-center mt-4'>
              <Button variant="denger" className='btn  btn-danger' type="submit">
                <a href='#getbtn'>Get Instant Quote</a>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className='mt-3'>
          <h5 className='text-center text-muted'>Design Catalog</h5>
          <h1 className='text-center'>Our digital catalog</h1>
          <h5 className='text-center text-muted'>We offer over 10,000 professionally hand-picked wedding designs.</h5>
          <Row>
            <Card className="custom-card">
              <Card.Img overlay src='/image/image5.jpg' alt='...' height={500} />
            </Card>
          </Row>
        </Container>
      </div>
      <div>
        <Container className='  mt-2'>

          <Card className="custom-card card3">
            <Row>
              <Col md={8} className='custom-card2'>
                <p>Online Package</p>
                <h1>Get an online package</h1>
                <h1>customized to your design preferences and budget.</h1>
              </Col>
              <Col md={4}>
                <Card.Img overlay src='/image/image7.jpg' alt='...' height={450} className='custom-card3' />
              </Col>
            </Row>
          </Card>

        </Container>
      </div>
      <div>
        <Container className='mt-3'>
          <h5 className='text-center text-muted'>Render to Reality</h5>
          <h1 className='text-center'>Be sure of what you're going<br></br>to get on your big day</h1>
          <h5 className='text-center text-muted'>Get 3D renders of the SSquare designs you choose</h5>
          <br />
          <br />
          <Row>
            <Col md={1}>
            </Col>
            <Col md={5}>
              <Card.Img overlay src='/image/image5.jpg' alt='...' height={400} className='custom-card3' />
            </Col>
            <Col md={5}>
              <Card.Img overlay src='/image/image7.jpg' alt='...' height={400} className='custom-card3' />
            </Col>
            <Col md={1}>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container fluid className='custom-color mt-3'>

          <Row>
            <Col md={2}></Col>
            <Col md={4}>

              <br />
              <br />
              <h4 className='text-warning'>Expert Help</h4>
              <h1 className='text-white display-5'>Budget & Venue Consultation</h1>

            </Col>

            <Col md={4}>

              <br />
              <br />
              <h5 className='text-warning text-center'>Get expert help in important decisions such as how much to spend and which venue to book.</h5>
              <br />
              <br />
              <h5 className='text-white text-center'>Our experience delivering 1,000+ weddings will help you make the right choices, faster.</h5>
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card.Img overlay src='/image/image6.jpg' alt='...' height={700} className='custom-card3' />
            </Col>
          </Row>

        </Container>
      </div>
      <div>

        <Container className='mt-2'>
          <h4 className='text-center text-muted'>Wedding Designs</h4>
          <h1 className='text-center'>Check out some of our</h1>
          <br></br>
          <h3 className='text-center'>best-selling designs </h3>
          <br></br>
          <br></br>
          <Row >
            <Col md={3} lg={3}>
              <h3 className='text-center'>Mandap</h3>
            </Col>
            <Col md={3} lg={3}>
              <h3 className='text-center'>Reception</h3>
            </Col>
            <Col md={3} lg={3}>
              <h3 className='text-center'>Haldi & Mehendi</h3>
            </Col>
            <Col md={3} lg={3}>
              <h3 className='text-center'>3D Design</h3>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card.Img overlay src='/image/image6.jpg' alt='...' height={700} className='custom-card3' />
            </Col>
          </Row>
          <Row>
            <Col className='text-center mt-4'>
              <Button variant="denger" className='btn  btn-danger' type="submit" >
                <a href='#getbtn'>Get Instant Quote</a>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container fluid className='custom-color2 mt-3'>
          <h4 className='text-center text-muted p-3'>Testimonials</h4>
          <h1 className='text-center'>Hear from our customers</h1>
          <Row>
            <Col>
              <Card.Img overlay src='/image/image6.jpg' alt='...' height={700} className='custom-card3' />
            </Col>
          </Row>

        </Container>
      </div>
      <div>
        <Container className='mt-3'>
          <Row className='p-3'>
            <Col md={2}></Col>
            <Col md={6}>
              <h3 className='text-muted'>Meragi Weddings</h3>
              <h2>Get a glimpse of some of our best work from the past</h2>
            </Col>
            <Col md={4} className='p-5'>
              <Button variant="denger" className='btn  btn-danger' type="submit" >
                <a href='#getbtn'>Get Instant Quote</a>
              </Button>
            </Col>
          </Row>
          <Row>

            <Col md={3}>
              <Card.Img overlay src='/image/image6.jpg' alt='...' height={325} className='custom-card3' />
              
            </Col>
            <Col md={3}>
              <Card.Img overlay src='/image/image6.jpg' alt='...' height={325} className='custom-card3' />
            </Col>
            <Col md={3}>
              <Card.Img overlay src='/image/image6.jpg' alt='...' height={325} className='custom-card3' />
            </Col>
            <Col md={3}>
              <Card.Img overlay src='/image/image6.jpg' alt='...' height={325} className='custom-card3' />
            </Col>

          </Row>

        </Container>
      </div>
      <div>
        <Container fluid className='custom-color mt-3'>
          <h4 className='text-white text-center p-5'>Our Office</h4>
          <h1 className='text-white  text-center'>Visit us here for a detailed in-person</h1>
          <h1 className='text-white text-center'>discussion with one of our wedding experts!</h1>
          <span><Button >Banglore</Button> <Button>Banglore</Button> <Button>Banglore</Button></span>
           <Row>
            <Col md={2}></Col>
            <Col md={4}><Card.Img overlay src='/image/image6.jpg' alt='...' height={325} className='custom-card3' /></Col>
            <Col md={4}><h1 className='text-white pt-3'>Address</h1></Col>
            <Col md={2}></Col>
           </Row>
        </Container>

      </div>
      <div>
        <Container fluid className='custom-color2'>
          <h4 className='text-center text-muted p-3'>Frequently Asked Questions</h4>
          <h1 className='text-center'>Some of the commonly asked questions</h1>
           

        </Container>
      </div>  

    </div>

  );
};

export default Header;
