import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './GetOffersDeals.css';

const GetOffersDeals = () => {
    return (
        <section>
            <Container className="footer-sub-box">
                <Row className="footer-subscribe mx-0">
                    <Col lg={6} className="mb-4 mb-lg-0 text-center text-lg-start">
                        <h1>Get Offers and Deals</h1>
                        <p>Sign-up for discounts and offers</p>
                    </Col>
                    <Col xl={6}>
                        <form className="row align-items-center">
                            <Col xs={12} md={9} className="mb-3 mb-md-0">
                                <label htmlFor="subscribeEmail">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subscribeEmail"
                                    placeholder="Enter your email address here"
                                    name="email"
                                />
                            </Col>
                            <Col xs={12} md={3} className="text-center text-md-start">
                                <button type="submit" className="btn OfrSubmitBtn btn-submit w-100">
                                    Subscribe
                                </button>
                            </Col>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default GetOffersDeals;
