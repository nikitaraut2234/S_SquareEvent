import React, { useState } from 'react'
import { Container, Dropdown } from 'react-bootstrap';
import { Card, Form } from 'react-bootstrap';
import Header from '../common_components/Header'
import './Careers.css';
import { BsSearch } from 'react-icons/bs';
export default function Careers() {
  const jobList = ["Category"
    , "Marketing"
    , "Editor"
    , "Operations"
    , "Sales"
    , "Decor++"
  ];
  const options = ['Monday', 'Tuesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday']
  const [job, setJob] = useState(jobList);
  const [searchVal, setSearchVal] = useState("");
  function handleSearchClick() {
    if (searchVal === "") { setJob(jobList); return; }
    const filterBySearch = jobList.filter((item) => {
      if (item.toLowerCase()
        .includes(searchVal.toLowerCase())) { return item; }
    })
    setJob(filterBySearch);
  }
  const mystyle = {
    // marginLeft: "600px",
    // marginTop: "20px",
    fontWeight: "700"
  };

  return (
    <div>
      <div>
        <Header />
        <Container className='scroll'>
          <Card className='card-no-shadow border'>

            <div>
              <div style={mystyle}>
                <input className='input_style' onChange={e => setSearchVal(e.target.value)}>
                </input>
                &nbsp;  
                <BsSearch onClick={handleSearchClick} />

              </div>

              <div>

                {job.map((product) => {
                  return (
                    <div style={mystyle}>{product}</div>
                  )
                })
                }

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
