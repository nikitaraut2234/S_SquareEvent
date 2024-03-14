import React from 'react'
import { Container, Dropdown } from 'react-bootstrap';
import { Card, Form } from 'react-bootstrap';
import Header from '../common_components/Header'
import './Careers.css';

export default function Careers() {
  return (
    <div>
      <div>
        <Header />
        <Container className='scroll'>
          <Card className='card-no-shadow border'>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"


              />
              <div className="input-group-append">
                <button
                  className="btn"
                  type="button"
                >
                  🔍
                </button>

              </div>



            </div>

            <div>
               
            </div>
          </Card>
          <br></br>

          <div>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finance</h2>
            <br></br>
            <Card className='card-no-shadow border'>
              <h5>Buisness Analyst</h5>
            </Card>
          </div>
          <br></br>

          <div>

            <Card className='card-no-shadow border'>
              <h5>Buisness Analyst</h5>
            </Card>
          </div>
          <br></br>

          <div>

            <Card className='card-no-shadow border'>
              <h5>Buisness Analyst</h5>
            </Card>
          </div>
          <br></br>

          <div>

            <Card className='card-no-shadow border'>
              <h5>Buisness Analyst</h5>
            </Card>
          </div>
          <div>

            <Card className='card-no-shadow border'>
              <h5>Buisness Analyst</h5>
            </Card>
          </div>
          <br></br>

          <div>

            <Card className='card-no-shadow border'>
              <h5>Buisness Analyst</h5>
            </Card>
          </div>
          <br></br>

        </Container>
      </div>
    </div>
  )
}
