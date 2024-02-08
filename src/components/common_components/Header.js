// Header.js
//import Service from './Service'
import Accordion from 'react-bootstrap/Accordion';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';
//import AppNavbar from './Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';



const Header = () => {

  return (
    <div>
      <header>
        <div>

        <Navbar bg="white" variant="dark" className="navbar" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className='text-dark'>
            <img
              src="./image/logo.png"
              alt="S_Square"
              style={{ height: '50px', width: '75px' }}
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button">
          <Button variant="primary">
            <FaBars />
          </Button>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav justify-content-end">
          <Nav className="float-end">
            <LinkContainer to="/">
              <Nav.Link className='text-dark'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className='text-dark'>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/careers">
              <Nav.Link className='text-dark'>Careers</Nav.Link>
            </LinkContainer>
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

    </div>

  );
};

export default Header;
