import React from 'react'
import { Container, Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
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
             
          </Card>
        </Container>
      </div>
    </div>
  )
}
