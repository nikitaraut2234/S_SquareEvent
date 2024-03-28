import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate  } from 'react-router-dom';
import Video from '../common_components/Video';
 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
 
import { Card } from 'react-bootstrap';
import Header from '../common_components/Header';
//  import { FaSquareWhatsapp } from "react-icons/fa6";
export default function Home() {const navigate = useNavigate ();

  const [selectedContent, setSelectedContent] = useState('1');
  const contentArray = [
    (
      
      <Row key={1}>
        <Col md={12}>
          <Card className='card-no-shadow'>
            <Row>
              <Col md={8}>
                <Row>
                  <Col md={4}><img overlay={Col} className="custom-card4"src="/image/271610438_1070165930226510_7721468059368109211_n.jpg" alt="..." height={150}/></Col>
                  <Col md={4}><img overlay={Col} className="custom-card4"src="/image/271554524_1013397569241822_7312277512912512289_n.jpg" alt="..." height={150}/></Col>
                  <Col md={4}><img overlay={Col} className="custom-card4"src="/image/275209959_143609924803747_7916909912287378949_n.webp" alt="..." height={150}/></Col>
                </Row>
                
                <Row>
                  <Col md={12}><img overlay={Col} className="custom-card4"src="/image/image6.jpg" alt="..." height={150}/></Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <Col md={12}><img overlay={Col} className="custom-card4"src="/image/image6.jpg" alt="..." height={150}/></Col>
                </Row>
                 
                <Row>
                  <Col md={12}><img overlay={Col} className="custom-card4"src="/image/image6.jpg" alt="..." height={150}/> </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    ),
    (
      <Row key={2}>
        <Col md={12}>
          <Card className='card-no-shadow'>
            <Row>
              <Col md={8}>
                <Row>
                  
                  <Col md={4}><Card.Img overlay={Col} src='/image/271610438_1070165930226510_7721468059368109211_n.jpg' alt='...' height={150} className='custom-card4' /></Col>
                  <Col md={4}><Card.Img overlay={Col} src='/image/271610438_1070165930226510_7721468059368109211_n.jpg' alt='...' height={150} className='custom-card4' /></Col>
                  <Col md={4}><Card.Img overlay={Col} src='/image/271554524_1013397569241822_7312277512912512289_n.jpg' alt='...' height={150} className='custom-card4' /></Col>
                </Row>
               
                <Row className=''>
                  <Col md={12}><Card.Img overlay={Col} src='/image/271610438_1070165930226510_7721468059368109211_n.jpg' alt='...'  className='custom_card_4 custom-card4' /></Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <Col md={12}><Card.Img overlay={Col} src='/image/271610438_1070165930226510_7721468059368109211_n.jpg' alt='...'  className='img_height1 custom-card4' /></Col>
                </Row>
                 
                <Row>
                  <Col md={12}><Card.Img overlay={Col} src='/image/271554524_1013397569241822_7312277512912512289_n.jpg' alt='...'    className='img_height_2 custom-card4' /> </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    ),
    (
      <Row key={3}>
        <Col md={12}>
        <Card className='card-no-shadow'>
            <Row>
              <Col md={8}>
                <Row>
                  <Col md={4}><Card.Img overlay={Col} src='/image/271554524_1013397569241822_7312277512912512289_n.jpg' alt='...' height={150} className='custom-card4' /></Col>
                  <Col md={4}><Card.Img overlay={Col} src='/image/271610438_1070165930226510_7721468059368109211_n.jpg' alt='...' height={150} className='custom-card4' /></Col>
                  <Col md={4}><Card.Img overlay={Col} src='/image/271554524_1013397569241822_7312277512912512289_n.jpg' alt='...' height={150} className='custom-card4' /></Col>
                </Row>
               
                <Row className=''>
                  <Col md={12}><Card.Img overlay={Col} src='/image/271610438_1070165930226510_7721468059368109211_n.jpg' alt='...'className='custom_card_4 custom-card4' /></Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <Col md={12}><Card.Img overlay={Col} src='/image/271554524_1013397569241822_7312277512912512289_n.jpg' alt='...'   className='img_height1 custom-card4' /></Col>
                </Row>
               
                <Row>
                  <Col md={12}><Card.Img overlay={Col} src='/image/271610438_1070165930226510_7721468059368109211_n.jpg' alt='...'   className='img_height_2 custom-card4' /> </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    ),
    (
      <Row key={4}>
        <Col md={12}>
          <Card className='card-no-shadow'>
            <Row>
              <Col md={8}>
                <Row>
                  <Col md={4}><Card.Img overlay={Col} src='/image/75a2e3_b17a79467dce45ae8e528f9d9dcb392e~mv2.webp' alt='...' height={150} className='custom-card4' /></Col>
                  <Col md={4}><Card.Img overlay={Col} src='/image/271491370_141520791600778_5945632228028406481_n.jpg' alt='...' height={150} className='custom-card4' /></Col>
                  <Col md={4}><Card.Img overlay={Col} src='/image/322916973_1335494907284101_6554862916736957411_n.webp' alt='...' height={150} className='custom-card4' /></Col>
                </Row>
               
                <Row className=''>
                  <Col md={12}><Card.Img overlay={Col} src='/image/322916973_1335494907284101_6554862916736957411_n.webp' alt='...'className='custom_card_4 custom-card4' /></Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <Col md={12}><Card.Img overlay={Col} src='/image/75a2e3_8940e86a8b4a405a8fce86f4dd220315~mv2.webp' alt='...'   className='img_height1 custom-card4' /></Col>
                </Row>
               
                <Row>
                  <Col md={12}><Card.Img overlay={Col} src='/image/271491370_141520791600778_5945632228028406481_n.jpg' alt='...'   className='img_height_2 custom-card4' /> </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    ),
    (
      <Row key={5}>
        <Col md={12}>
          <Card className='card-no-shadow'>
            <Row>
              <Col md={8}>
                <Row>
                  <Col md={4}><Card.Img overlay={Col} src='/image/Trishala.webp' alt='...' height={150} className='custom-card4' /></Col>
                  <Col md={4}><Card.Img overlay={Col} src='/image/Puneetha 4.webp' alt='...' height={150} className='custom-card4' /></Col>
                  <Col md={4}><Card.Img overlay={Col} src='/image/final render.webp' alt='...' height={150} className='custom-card4' /></Col>
                </Row>
                 
                <Row className=''>
                  <Col md={12}><Card.Img overlay={Col} src='/image/Trishala.webp' alt='...' className='custom_card_4 custom-card4' /></Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <Col md={12}><Card.Img overlay={Col} src='/image/final render.webp' alt='...'   className='img_height1 custom-card4' /></Col>
                </Row>
                
                <Row>
                  <Col md={12}><Card.Img overlay={Col} src='/image/Puneetha 4.webp' alt='...'   className='img_height_2 custom-card4' /> </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    ),
 
 
  ];

  const handleClick = (content) => {
    console.log('Clicked on index:', content);
    setSelectedContent(content === 'mandap' ? 0 : content);
  };


  return (
    <div>
      <header> 
        <Header />
        <Container className="header-content">
            <Row className='mt-5'>
              <Col md={6}>
                <br />
                <br /><br /><br /><br /><br /><br /><br /> <br /><br />  
                <h1 className='text text-center mt-4'>Wedding  Made Easy</h1>

              </Col>
              <Col md={6} className='mt-5'>
                <br /><br /><br /><br />
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
          </header>
      <div>
        <Container className='mt-3'>
          <h5 className='text-center text-muted'>Convenient packages & reliable pricing</h5>
          <h1 className='text-center '>Services we offer</h1>
           <Container>
           <Row className='row-cols-1 row-cols-md-4'>
            <Col md={3} className='col_gap'>
              <Card className='card_no_shadow ' >
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
            <Col md={3} className='col_gap'>
              <Card className='card_no_shadow  border'>
                <Card.Img src='/image/Rectangle 40127-1.webp'
                  alt='...'
                  position='top' className='image' />
                <br></br>
                <Card.Title className='text-center'><h6>Wedding Photography</h6></Card.Title>
                <Card.Text className='text-center'>
                  Turn your wedding day into a timeless masterpiece.
                </Card.Text>
              </Card>
            </Col>
            <Col md={3} className='col_gap'>
              <Card className='card_no_shadow  border '>
                <Card.Img src='/image/img3.png'
                  alt='...'
                  position='top' className='image' />
                <br></br>
                <Card.Title className='text-center'> <h6>Venue Consultation</h6></Card.Title>
                <Card.Text className='text-center'>
                  Get expert help in finding the perfect venue for your wedding.
                </Card.Text>
              </Card>
            </Col>
            <Col md={3}className='col_gap'>
              <Card className='card_no_shadow  border'>
                <Card.Img src='/image/img3.png'
                  alt='...'
                  position='top' className='image' />
                <br />
                <Card.Title className='text-center'> <h6>SSquare Exclusive</h6></Card.Title>
                <Card.Text className='text-center'>
                  Our Exclusive offering for larger-than-life, luxury weddings
                </Card.Text>
              </Card>
            </Col>
          </Row>  
           </Container>

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
              <Card.Img overlay src='/image/image5.jpg' alt='...' className='card_height'  />
            </Card>
          </Row>
        </Container>
      </div>
     
      <div>
        <Container className='  mt-2'>

          <Card className="custom-card5 card3">
            <Row>
              <Col md={7} className='custom-card2'>
                <p className='online_text'>Online Package</p>
                 
                <h1 className='font'>Get an online package</h1>
               
                <h1 className='h1_font'>customized to your design preferences and budget.</h1>
              </Col>
              <Col md={5}>
              <Video src={Video}  controls="controls"  autoPlay="true"  />
              
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
              <Card.Img overlay src='/image/image5.jpg' alt='...'   className='custom-card3' />
            </Col>
            <Col md={5}>
              <Card.Img overlay src='/image/image7.jpg' alt='...'  className='custom-card3' />
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
          <Container>
            
          <Row>
            <Col md={12}> 
              <Card.Img overlay src='/image/image6.jpg' alt='...'  className='card_image'/>
              <br />
              <br />
            </Col>
          </Row>
           
          </Container>

        </Container>
      </div>
      <div>
      <Container className='main mt-2'>
        <h4 className='text-center text-muted'>Wedding Designs</h4>
        <h1 className='text-center'>Check out some of our</h1>
        <br></br>
        <h3 className='text-center'>best-selling designs </h3>
        <br></br>
        <br></br>
        <Row>
          <Col md={3} lg={3}>
          <h2
              className='text_bold text-center'
              onClick={() => handleClick(1)}
            >
              Mandap
            </h2>
          </Col>
          <Col md={3} lg={3}>
            <h2
              className='text_bold text-center'
              onClick={() => handleClick(2)}
            >
              Reception
            </h2>
          </Col>
          <Col md={3} lg={3}>
            <h2
              className='text_bold text-center'
              onClick={() => handleClick(3)}
            >
              Haldi & Mehendi
            </h2>
          </Col>
          <Col md={3} lg={3}>
            <h2
             className='text_bold text-center'
              onClick={() => handleClick(4)}
            >
              3D Design
            </h2>
          </Col>
        </Row>
        {selectedContent && contentArray[selectedContent]}
        <Row>
          <Col className='text-center mt-4'>
            <Button variant="danger" className='btn btn-danger' type="submit" >
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
          <br></br>
          <Row>
            <Col>
              <Card.Img overlay src='/image/image6.jpg' alt='...' height={600}  className='card_image' />
            </Col>
          </Row>
            <br></br>
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

            <Col md={3} className='col_gap'>
              <Card.Img overlay src='/image/12.webp' alt='...' height={300} className=''/>

            </Col>
            <Col md={3} className='col_gap'>
              <Card.Img overlay src='/image/12.webp' alt='...' height={300}  className=''/>
            </Col>
            <Col md={3} className='col_gap'>
              <Card.Img overlay src='/image/12.webp' alt='...' height={300} className=''  />
            </Col>
            <Col md={3} className='col_gap'>
              <Card.Img overlay src='/image/12.webp' alt='...' height={300}  className='' />
            </Col>

          </Row>

        </Container>
      </div>
      <div>
        <Container fluid className='custom-color mt-3'>
          <h4 className='text-white text-center p-5'>Our Office</h4>
          <h1 className='text-white  text-center'>Visit us here for a detailed in-person</h1>
          <h1 className='text-white text-center'>discussion with one of our wedding experts!</h1>
          <Row>
            <Col md={2}></Col>
            <Col md={8} className='p-4'> <Button className='btn btn-primary'>Banglore</Button> <Button className='btn btn-primary'>Banglore</Button> <Button className='btn btn-primary'>Goa</Button></Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={4}><Card.Img overlay src='/image/Rectangle 32062.webp' alt='...' height={325} width={325} className='custom-card3' /></Col>
            <Col md={4}><h1 className='text-white pt-5'>Address</h1></Col>
            <Col md={2}></Col>
          </Row>
        </Container>

      </div>
      <div>
        <Container fluid className='custom-color2'>
          <h4 className='text-center text-muted p-3'>Frequently Asked Questions</h4>
          <h1 className='text-center'>Some of the commonly asked questions</h1>
          <Container className='p-3'>
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
                <Accordion defaultActiveKey="0" className='accordion'>
                  <hr></hr>
                  <Accordion.Item eventKey="0" className='accordion'>
                    <Accordion.Header className='accordion2' >What is the starting price for Meragi’s Wedding Decor?</Accordion.Header>
                    <Accordion.Body>
                      While the cost of your decor would vary depending on your design preferences,
                      number of events and elements, materials, and other factors,
                      our starting price for decor packages is Rs. 50,000.
                    </Accordion.Body>
                  </Accordion.Item>
                  <hr></hr>
                  <Accordion.Item eventKey="2" className='accordion'>
                    <Accordion.Header className='accordion'> <p>What is a Meragi Wedding Designer and why do I need one?</p></Accordion.Header>
                    <Accordion.Body>
                      Our wedding designer will understand your aesthetic preferences and budget to come up with a design for your wedding. They’ll share decor options for each of your events that are customized to your wedding venue. The decor package they create for you will include a detailed breakdown of all costs involved in your wedding decor. It will also give you the option to mix and match different design options yourself.
                      This personalized consultation helps you make informed decisions and ensure your wedding is exactly what you dream of.
                    </Accordion.Body>
                  </Accordion.Item>
                  <hr></hr>
                  <Accordion.Item eventKey="3" className='accordion'>
                    <Accordion.Header>Does Meragi also execute the wedding or only take care of the design and planning?</Accordion.Header>
                    <Accordion.Body>
                      We not only design and plan your wedding but also execute the decor ourselves! We’ve built technology to ensure an error-free execution of every event we manage. This ensures you get exactly what you’re promised and avoids last-minute surprises on your big day!
                    </Accordion.Body>
                  </Accordion.Item>
                  <hr></hr>
                  <Accordion.Item eventKey="4" className='accordion'>
                    <Accordion.Header>Does Meragi also provide Destination Wedding Packages?</Accordion.Header>
                    <Accordion.Body>
                      We do! Presently, we help fulfill destination weddings in Goa, Coorg, Chikkamagaluru, Mysuru, and Bangalore.
                    </Accordion.Body>
                  </Accordion.Item>
                  <hr></hr>
                  <Accordion.Item eventKey="5" className='accordion'>
                    <Accordion.Header>Does Meragi provide decor for events other than weddings?</Accordion.Header>
                    <Accordion.Body>
                      Yes, we do! We provide decor for events such as birthday parties, baby showers, threading ceremonies, anniversary celebrations, as well as corporate events. The starting price for these decor packages is Rs. 50,000.
                    </Accordion.Body>
                  </Accordion.Item>
                  <hr></hr>
                  <Accordion.Item eventKey="6" className='accordion'>
                    <Accordion.Header>I came across a wedding design on your Instagram page that I like. How can I get it for my wedding? </Accordion.Header>
                    <Accordion.Body>
                      You can either fill in the form above on this page with your name and contact details, or you can also DM us on Instagram with these details along with the design you like. One of our designers will then get in touch with you to chart out the details!
                    </Accordion.Body>
                  </Accordion.Item>
                  <hr></hr>
                </Accordion>

              </Col>
              <Col md={2}></Col>
            </Row>
          </Container>
          
        </Container>
      </div>
    </div>
  )
}
