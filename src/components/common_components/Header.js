 
 
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';
 
import { Container,  Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';



const Header = () => {

  return (
    <div>
      
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
                <Button variant="secondary">
                  <FaBars />
                </Button>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                <Nav className="float-end">
                   
                  <LinkContainer to="/" className='active'>
                    <Nav.Link className='text-dark'>Home</Nav.Link>
                  </LinkContainer>
                  &nbsp;&nbsp; &nbsp;&nbsp;  
                  <LinkContainer to="/AboutUs"  className='active'>
                    <Nav.Link className='text-dark'>AboutUs</Nav.Link>
                  </LinkContainer>
                  &nbsp;&nbsp; &nbsp;&nbsp;    
                  <LinkContainer to="/Services"  className='active'>
                    <Nav.Link className='text-dark'>Services</Nav.Link>
                  </LinkContainer>
                  &nbsp;&nbsp;  &nbsp;&nbsp;  
                  <LinkContainer to="/careers"  className='active'>
                    <Nav.Link className='text-dark'>Careers</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
         
        </div>
       

    </div>

  );
};

export default Header;
