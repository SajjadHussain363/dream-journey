import React, { useRef, useState, useEffect } from "react";
import './CommanSlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ComminSliderPic from "../../assets/images/commanslider.png";
// Setting of Slider
const CommanSlider = () => {
    const sliderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [disableArrows, setDisableArrows] = useState(false);

    const CommanSlider = [1, 2, 3, 4, 5, 6]; // Replace this with your actual data

    const updateDeviceState = () => {
        const width = window.innerWidth;
        setIsMobile(width < 576);
        setIsTablet(width >= 576 && width < 992);
    };

    useEffect(() => {
        updateDeviceState();
        window.addEventListener("resize", updateDeviceState);
        return () => window.removeEventListener("resize", updateDeviceState);
    }, []);

    useEffect(() => {
        const visibleSlides = isMobile ? 1 : isTablet ? 2 : 3;
        setDisableArrows(CommanSlider.length <= visibleSlides);
    }, [isMobile, isTablet, CommanSlider.length]);

    const settings = {
        infinite: true,
        slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
        centerMode: false,
        speed: 500,
        autoplay: false,
        arrows: false,
        slidesToScroll: 1,
    };

    const goToPrev = () => {
        if (!disableArrows) sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        if (!disableArrows) sliderRef.current?.slickNext();
    };

    // const CommanSlider = () => {


        return (
            <>
            <section className="commanSlider-section mt-5">
                <Row>
                    <Col md={12} className="text-start">
                        <div className="CommanSliderHeaderpr">
                            <h1>Must-Do Experiences</h1>
                        </div>
                        <div className="CommanSliderSubtitle">
                            <p>Elevate Your Adventures: Handpicked Travel Packages for Unforgettable Experiences!</p>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="text-end">
                        <div className="comman-arrows-container">
                            <button
                                className="commanSlider-arrow"
                                onClick={goToPrev}
                                disabled={disableArrows}
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button
                                className="commanSlider-arrow"
                                onClick={goToNext}
                                disabled={disableArrows}
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </Col>
                </Row>
                <div className="CommanSlider-wrapper">
                    <Slider {...settings} ref={sliderRef}>
                        {CommanSlider.map((item) => (
                            <div key={item} className="comman-slide-item">
                                <div className="comman-post-card">
                                    <img src={ComminSliderPic} alt={`CommanSlider ${item}`} className="comman-post-image" />
                                    <div className="commanTipwper">
                                        <div className="comnCityTur">City Tour</div>
                                        <div className="comnstarReview">
                                            <i className="bi bi-star-fill"></i> &nbsp;
                                            <span>1.5</span>
                                        </div>
                                    </div>
                                    
                                    <div className="comman-post-content">
                                        <div className="d-flex justify-content-between">
                                        <h3 className="comman-post-title">Desert Discovery Journey: Red Dunes Desert Safari & BBQ {item}</h3>
                                        <span><i className="bi bi-heart WishHeartLike"></i></span>
                                        </div>
                                        <div className="d-flex LocationCity">
                                        <i class="bi bi-geo-alt"></i>&nbsp; <span>Dubai</span>
                                        </div>
                                        <div className="ReviewRatingCardWpr  d-flex">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <span>(3 reviews)</span>
                                        </div>
                                        <div className="CardCuttingPrice mt-5">
                                        <span>From</span> <del>78.59</del>    
                                        </div>
                                        <div className="comnCardPricewpr d-flex justify-content-between">
                                                <div><span className="OrignalPrice">AED 63.99 /</span> <span className="PersonRgroup">Person</span></div>
                                                <div>1 option available</div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                </section>
            </>
        );
    };

    export default CommanSlider;