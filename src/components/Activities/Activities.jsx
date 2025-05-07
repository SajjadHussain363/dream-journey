import React from 'react';
import './Activities.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import ActivitiesImage1 from '../../assets/images/activity1.png';
import ActivitiesImage2 from '../../assets/images/activity2.png';

const Activities = () => {
    return (
        <section className='activitiesWrapper mt-5 mb-5'>
            <Container>
                <Row className="g-4">
                    <Col lg={6} md={6} sm={12}>
                        <div className='actTxtImgInrOne'>
                            <div>
                                <img src={ActivitiesImage2} alt="Activities" className="img-fluid" />
                            </div>
                            <div className='actTxtInr1'>
                                <span>Find The Perfect Activity To Do In Your Holiday.</span> 
                                <Link to="/activities" className='mt-4 view-link'>
                                    View All Activities <i class="bi bi-arrow-right-short"></i>
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <div className='actTxtImgInrOne'>
                            <div>
                                <img src={ActivitiesImage1} alt="Activities" className="img-fluid" />
                            </div>
                            <div className='actTxtInr1'>
                                <span>Explore Iconic Landmarks with Breathtaking Sights!</span> 
                                <Link to="/activities" className='mt-4 view-link'>
                                    View All Activities <i class="bi bi-arrow-right-short"></i>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Activities;
