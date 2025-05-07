import React from 'react';
import './AwardWinning.css';
import { Container, Row, Col } from 'react-bootstrap';
import Awards1 from "../../assets/images/awards3.png";
import Awards2 from "../../assets/images/awards2.gif";
import Awards3 from "../../assets/images/awards1.gif";

const AwardWinning = ({ style }) => {
    return (
        <section className="award_winningWrapper text-center py-5" style={style}>
            <Container>
                <Row className="align-items-center">
                    <Col md={12}>
                        <div className="content-wrapper">
                            <h2 className="section-title">Award Winning Services</h2>
                            <p className="section-subtitle">
                                Highest Rated Tour on TripAdvisor and Winners of Certificate of Excellence
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-4">
                    <Col lg={12}>
                        <div className='award-service-img'>
                            {/* 6 Small Images */}
                            <div className='award-service-img-small-image'>
                                <img src={Awards1} alt="tripReviews" className='img-fluid' />
                                <img src={Awards1} alt="tripReviews" className='img-fluid' />
                                <img src={Awards1} alt="tripReviews" className='img-fluid' />
                                <img src={Awards1} alt="tripReviews" className='img-fluid' />
                                <img src={Awards2} alt="tripReviews" className='img-fluid' />
                                <img src={Awards3} alt="tripReviews" className='img-fluid' />
                            </div>

                            {/* Large Images */}
                            <div className='award-service-large-image'>
                               
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AwardWinning;
