import React from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { Nav, Navbar } from 'react-bootstrap';
import './Services.css';
const Services = () => {
  return (
    <div>
      <Container className='mt-3'>
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
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button"><Button > <FaBars /> </Button></Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav justify-content-end">

                <Nav className="float-end">
                  <Nav.Link className='text-dark' href="#home">
                    Home
                  </Nav.Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Nav.Link className='text-dark' href="#services">Services</Nav.Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Nav.Link className='text-dark' href="#career">Career</Nav.Link>
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container>
            <Row>
              <Col md={6}>

                <h2>  &nbsp;&nbsp;&nbsp;#MakeItBeautiful</h2>
                <img
                  src="./image/logo.png"
                  alt="S_Square"
                  style={{ height: '150px', width: '400px' }}
                />
                <p className='display-5'>Wedding Services</p>
                <p>Modern. Convenient. Affordable</p>
                <b><p className='text-primary'>1500+ Weddings | 10+ Years | 4.8/5 Rating</p></b>
                <Form>
                  <Table>
                    <tr>
                      <td>
                        <div class="form-group">
                          <label for="email">Email address:</label>
                          <input type="email" class="form-control" placeholder="Enter email" id="email" />
                        </div>
                      </td>
                      <td>
                        <div class="form-group">
                          <label for="email">Email address:</label>
                          <input type="email" class="form-control" placeholder="Enter email" id="email" />
                        </div>
                      </td>
                    </tr>
                  </Table>
                </Form>
              </Col>
              <Col md={6}>

              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Services;