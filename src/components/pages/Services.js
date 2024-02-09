import React from 'react';
import { Container, Row, Col, Button, Form, Card, CardImg} from 'react-bootstrap';
import { MdAddAPhoto } from "react-icons/md";
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
            <Row>
              <Col md={1}></Col>
              <Col md={3} className='border m-1'>
               <p className='text-center mt-2'><MdAddAPhoto  /></p>
              </Col>
              <Col md={3} className='border m-1'>
              <p className='text-center mt-2'><MdAddAPhoto  /></p>
              </Col>
              <Col md={3}className='border m-1'>
              <p className='text-center mt-2'><MdAddAPhoto  /></p>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Container>
        </Container>

      </Container>
    </div>
  );
};

export default Services;