import React from 'react';
import './HelpCentre.css';
import { Container, Row, Col } from "react-bootstrap";

const HelpCentre = () => {
    return (
        <>
            <div>
                <section className="help-centre-section">
                    <Container>
                        <Row>
                            <Col className='text-center'>
                                <div className="HelpCentreHeading">
                                    <h1 className="text-center">Help Centre</h1>
                                </div>
                                <div className="HelpCentresubtitle">
                                    <p className="text-center">Browse a category you need help with</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="row mt-md-5 helptansinner">
                                    <div className="col-lg-6">
                                        <a href="#" className="w-100">
                                            <div className="_question_p6pr1_31">Need help with your 'My Account'?</div>
                                        </a>
                                    </div>
                                    <div class="col-lg-6">
                                        <a href="#" class="w-100">
                                            <div class="_question_p6pr1_31">Looking to Exchange or Extend?</div>
                                        </a>
                                    </div>
                                    <div class="col-lg-6">
                                        <a href="#" class="w-100">
                                        <div class="_question_p6pr1_31">Booking your experience?</div>
                                    </a>
                                    </div>
                                    <div class="col-lg-6">
                                        <a href="#" class="w-100">
                                        <div class="_question_p6pr1_31">Purchasing an experience?</div>
                                    </a>
                                    </div>
                                    <div class="col-lg-6">
                                        <a href="#" class="w-100">
                                            <div class="_question_p6pr1_31">Still need to speak to us?</div>
                                        </a>
                                    </div>
                                    <div class="col-lg-6">
                                        <a href="#" class="w-100">
                                        <div class="_question_p6pr1_31 _active_p6pr1_52">View our frequently asked questions</div>
                                    </a>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>
            </div>
        </>
    );
}

export default HelpCentre;