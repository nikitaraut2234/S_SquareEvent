//import logo from './image/logo.png';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
//import image from './image.jpeg';

function Footer() {
    return (
        <div>
            {/* <hr className='hr1'></hr> */}
            <section>
                <Container className='text-center text-md-start mt-5'>
                    <Row className='mt-3'>
                        <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='fw-bold mb-4'>

                                Company name<br />
                                
                                <img
                                    src="./image/logo.png"  
                                    alt="S_Square"
                                    style={{ height: '100px', width: '200px' }}
                                />
                            </h6>

                        </Col>

                        <Col md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-muted fw-bold mb-4'> Corporate Information</h6>

                            <p className='text-reset'>
                                Board
                            </p>
                            <p className='text-reset'>
                                AGM
                            </p>

                        </Col>

                        <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-muted fw-bold'>Address</h6>
                            <p className='text-reset'>
                                S_Square Events E-Commerce Private Limited,Office No. 33, 2nd Floor, Continental
                                Chambers, Karve Road, Pune-411052
                            </p>

                        </Col>

                        <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='fw-bold mb-4'>Contact</h6>
                            <p className='text-reset'>
                                +91 8956121232 / 9764781287<br />
                                contact:ssquarevents@gmail .com<br />
                                Feedback Form
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <Row className='mt-3'>
                    <Col md='6' lg='6' xl='6' className='mx-auto  '>
                        <h6 className='fw-bold  '>

                            &copy;2024-2025 SSquare. All Rights Reserved
                        </h6>

                    </Col>

                     

                    <Col md='2' lg='2' xl='2' className='mx-auto'>
                        <h6 className='fw-bold'>Privacy Policy</h6>
                    </Col>

                    <Col md='4' lg='2' xl='3' className='mx-auto mb-md-0  '>
                        <h6 className='fw-bold'>Terms & Conditions</h6>

                    </Col>
                </Row>

            </div>
        </div>
    );
}

export default Footer;
