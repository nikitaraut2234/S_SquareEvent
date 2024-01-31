// Header.js
import React from 'react';
import './Header.css';
//import AppNavbar from './Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Card, } from 'react-bootstrap';


const Header = () => {

  return (
    <div>
      <header>
        <div>
          {/* <AppNavbar /> */}
          <Navbar bg="white" variant="dark" className="navbar" expand="lg">
            <Container>
              <Navbar.Brand href="#" className='text-dark'>Your Logo</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav justify-content-end">

                <Nav className="mr-auto">
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
                <h1 className='text-center text mt-5'>Wedding  Made Easy</h1>

              </Col>
              <Col md={6}>
                <Form className='p-3 card'>
                  <h4>Speak To Our Expert</h4>
                  <p>Have all question answered and get a free competitive quote </p>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Full Name" required />
                    <br />
                    <Form.Label>Phone Number*</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Phone Number" required />
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

            <Col lg={3} md={3}>
              <Card className='w-70 card1'>
                <Card.Img src='img3.png'
                  alt='...'
                  position='top' className='image' />
                <br></br>
                <Card.Title className='text-center'><h6>Wedding Decor</h6></Card.Title>
                <Card.Text className='text-center'>
                  From design consultation to flawless execution.
                </Card.Text>

              </Card>
            </Col>

            <Col lg={3} md={3}>
              <Card className='  w-70 card1'>
                <Card.Img src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                  alt='...'
                  position='top' />
                <br />
                <Card.Title className='text-center'><h6>Wedding Photography</h6></Card.Title>
                <Card.Text className='text-center'>
                  Turn your wedding day into a timeless masterpiece.
                </Card.Text>

              </Card>
            </Col>

            <Col lg={3} md={3}>
              <Card className='  w-70 card1'>
                <Card.Img src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                  alt='...'
                  position='top' />
                <br />
                <Card.Title className='text-center'> <h6>Venue Consultation</h6></Card.Title>
                <Card.Text className='text-center text-muted'>
                  Get expert help in finding the perfect venue for your wedding.
                </Card.Text>

              </Card>
            </Col>

            <Col lg={3} md={3}>
              <Card className=' w-70 card1'>
                <Card.Img src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                  alt='...'
                  position='top' />
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
                Get Instant Quote
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
              <Card.Img overlay src='https://mdbootstrap.com/img/new/slides/017.webp' alt='...' height={500} />
            </Card>
          </Row>
        </Container>
      </div>
      <div>
        <Container className='  mt-2'>
          <Row>
            <Card className="custom-card card3"> 
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
