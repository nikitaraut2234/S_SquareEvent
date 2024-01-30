// Header.js
import React from 'react';
import './Header.css';
//import AppNavbar from './Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

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
        <Container className='container'>
          <Row className='mt-3'>
            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img1.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img1.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img1.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img1.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
