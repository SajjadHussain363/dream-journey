import React from 'react';
import './OurPartners.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sliders1 from "../../assets/images/about/slider001.png";
import Sliders2 from "../../assets/images/about/slider002.png";
import Sliders3 from "../../assets/images/about/slider003.png";
import Sliders4 from "../../assets/images/about/slider004.png";
import Sliders5 from "../../assets/images/about/slider005.png";
import Sliders6 from "../../assets/images/about/slider006.png";

const OurPartners = () => {
    return (
        <div>
            <div className='container'>
                    <Row>
                        <Col className='text-center'>
                            <h1 className="heading-primary-borderLess mt-5 mb-5">Our Partners</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="marquee">
                                <div className="marquee-content">
                                    <Link to="/about"><img src={Sliders1} alt="" /></Link>
                                    <Link to="/about"><img src={Sliders2} alt="" /></Link>
                                    <Link to="/about"><img src={Sliders3} alt="" /></Link>
                                    <Link to="/about"><img src={Sliders4} alt="" /></Link>
                                    <Link to="/about"><img src={Sliders5} alt="" /></Link>
                                    <Link to="/about"><img src={Sliders6} alt="" /></Link>

                                    {/* Duplicate for continuous scroll */}
                                    <Link to="/about"><img src={Sliders1} alt="" /></Link>
                                    <Link to="/about"><img src={Sliders2} alt="" /></Link>
                                    <Link to="/about"><img src={Sliders3} alt="" /></Link>
                                    <Link to="/about"><img src={Sliders4} alt="" /></Link>
                                    <Link to="/about"><img src={Sliders5} alt="" /></Link>
                                    <Link to="/about"><img src={Sliders6} alt="" /></Link>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
        </div>
    );
};

export default OurPartners;