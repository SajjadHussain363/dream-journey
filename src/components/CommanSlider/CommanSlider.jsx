import React, { useRef, useState, useEffect } from "react";
import './CommanSlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET } from "../../apicController/apiController";

const CommanSlider = () => {
    const sliderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [disableArrows, setDisableArrows] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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
        setDisableArrows(products.length <= visibleSlides);
    }, [isMobile, isTablet, products.length]);

    const settings = {
        infinite: true,
        slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        autoplay: false,
        centerMode: false,
    };

    const goToPrev = () => {
        if (!disableArrows) sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        if (!disableArrows) sliderRef.current?.slickNext();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await GET("products", {}, {
                    Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
                    Accept: "application/json",
                });

                if (result && Array.isArray(result.data)) {
                    setProducts(result.data);
                } else {
                    setError("No product data found.");
                }
            } catch (err) {
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="commanSlider-section mt-5">
            <Container>
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

                <Row className="mb-3">
                    <Col md={4} className="text-end ms-auto">
                        <div className="comman-arrows-container">
                            <button className="commanSlider-arrow" onClick={goToPrev} disabled={disableArrows}>
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button className="commanSlider-arrow" onClick={goToNext} disabled={disableArrows}>
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </Col>
                </Row>

                <div className="CommanSlider-wrapper">
                    {loading ? (
                        <div className="text-center my-5">
                            <small>Api Data Loading...</small><br />
                            <div className="spinner-border text-warning mt-3" role="status"></div>
                        </div>
                    ) : error ? (
                        <div className="text-danger text-center my-3">{error}</div>
                    ) : products.length === 0 ? (
                        <div className="text-center my-3">No products available.</div>
                    ) : (
                        <div className="slider-container ProductCarousel">
                            <Slider ref={sliderRef} {...settings}>
                                {products.map((product, index) => (
                                    <div key={index} className="px-2">
                                        <div className="product-card text-center position-relative">
                                            <img
                                                src={product.product_image}
                                                alt={product.name}
                                                className="product-Slider-image"
                                            />

                                            <div className="Explore_All_Experiencs_Card_Tip d-flex justify-content-between px-3">
                                                <div className="Explore_All_Experiencs_StarReview">
                                                    <i className="bi bi-star-fill"></i>{" "}
                                                    <span>{product.average_rating}</span>
                                                </div>
                                                {product.category && (
                                                    <div className="Explore_All_Experiencs_CityTour">{product.category}</div>
                                                )}
                                            </div>

                                            <div className="product-card-content-wrapper">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <Link to={`/top-pick-details/${product.uid}`} className="Products_card_title text-decoration-none">
                                                        <h3 className="card-title mt-2">{product.name}</h3>
                                                    </Link>
                                                    <button className="btn wishlist-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                            <path d="M14.7233 24.2784C14.3266 24.4184 13.6733 24.4184 13.2766 24.2784C9.89325 23.1234 2.33325 18.305 2.33325 10.1384C2.33325 6.53337 5.23825 3.6167 8.81992 3.6167C10.9433 3.6167 12.8216 4.64337 13.9999 6.23003C15.1783 4.64337 17.0683 3.6167 19.1799 3.6167C22.7616 3.6167 25.6666 6.53337 25.6666 10.1384C25.6666 18.305 18.1066 23.1234 14.7233 24.2784Z" stroke="#1A141F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                <div className="CityFeatch text-start d-flex">
                                                    <div><i className="bi bi-geo-alt"></i> Dubai</div>
                                                    <div className="NatureWildLife bulltes"><i className="bi bi-circle-fill"></i> {product.theme.join(", ")}</div>
                                                </div>

                                                <div className="ReviewRatingWrapper text-start">
                                                    <div className="ms-2 RtingNew d-flex">
                                                        {product.is_new_product ? (
                                                            <span>★ New</span>
                                                        ) : (
                                                            <span>{"★".repeat(Math.round(product.average_rating))}</span>
                                                        )}
                                                        <div className="TimeShow"><span><i className="bi bi-clock"></i></span> {product.duration}</div>
                                                    </div>
                                                </div>

                                                <div className="CityFeatch text-start d-flex align-items-center">
                                                    <div className="cancelFreeClr"><i className="bi bi-check-circle"></i> Free Cancellation : {product.free_cancellation ? "Yes" : "No"}</div>
                                                </div>

                                                <div className="text-start mt-3">
                                                    <span className="cutPrice"> From <del>AED {parseFloat(product.price) + 50}</del></span>
                                                </div>

                                                <div className="PriceListingWrapper d-flex justify-content-between">
                                                    <div className="priceInner">
                                                        AED {product.price}
                                                        <span className="perPerson">/Person</span>
                                                    </div>
                                                    <p className="OptionsSingle m-0">{product.listing_highlight_display}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default CommanSlider;
