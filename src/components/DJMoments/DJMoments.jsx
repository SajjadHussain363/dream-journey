import React from 'react';
import './DJMoments.css';
import { Container, Row, Col } from "react-bootstrap";  
import Blog1 from '../../assets/images/momentsgrid.png';

const DJMoments = ({style}) => {
  return (
    <>
    <div>
       <section className="DJ-Moments-section" style={style}>
       <Container fluid>
        <Row>
          <Col>
          <div className="DJHeadingWrper">
            <p className="text-center">Share your memories with</p>
            <h1 className="text-center"><span className="hash">#</span>DreamJourneyMoments</h1>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={Blog1} alt="Blog 1" className='img-fluid' />
          </Col>

        </Row>
       </Container>
       </section>
    </div>
    </>
  );
}

export default DJMoments;