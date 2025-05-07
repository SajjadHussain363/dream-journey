

// This File not in use 

import React, { useRef, useState, useEffect } from "react";
import './CommanSlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col } from "react-bootstrap";

const CommanSlider = ({
  title = "Must-Do Experiences",
  subtitle = "Elevate Your Adventures: Handpicked Travel Packages for Unforgettable Experiences!",
  items = [],
}) => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [disableArrows, setDisableArrows] = useState(false);

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
    setDisableArrows(items.length <= visibleSlides);
  }, [isMobile, isTablet, items.length]);

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

  return (
    <section className="commanSlider-section">
      <Row>
        <Col md={12} className="text-start">
          <div className="CommanSliderHeaderpr">
            <h1>{title}</h1>
          </div>
          <div className="CommanSliderSubtitle">
            <p>{subtitle}</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="text-end">
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
        <Slider {...settings} ref={sliderRef}>
          {items.map((item, index) => (
            <div key={index} className="comman-slide-item">
              <div className="comman-post-card">
                <img src={item.image} alt={item.title} className="comman-post-image" />
                <div className="commanTipwper">
                  <div className="comnCityTur">{item.category || "City Tour"}</div>
                  <div className="comnstarReview">
                    <i className="bi bi-star-fill"></i>&nbsp;
                    <span>{item.rating || "1.5"}</span>
                  </div>
                </div>

                <div className="comman-post-content">
                  <div className="d-flex justify-content-between">
                    <h3 className="comman-post-title">{item.title}</h3>
                    <span>
                      <i className="bi bi-heart WishHeartLike"></i>
                    </span>
                  </div>
                  <div className="d-flex LocationCity">
                    <i className="bi bi-geo-alt"></i>&nbsp; <span>{item.location || "Dubai"}</span>
                  </div>
                  <div className="ReviewRatingCardWpr mt-3 d-flex">
                    {[...Array(5)].map((_, i) => (
                      <i className="bi bi-star-fill" key={i}></i>
                    ))}
                    <span>({item.reviewCount || "3"} reviews)</span>
                  </div>
                  <div className="CardCuttingPrice mt-5">
                    <span>From</span> <del>{item.oldPrice || "78.59"}</del>
                  </div>
                  <div className="comnCardPricewpr d-flex justify-content-between">
                    <div>
                      <span className="OrignalPrice">AED {item.newPrice || "63.99"} /</span>{" "}
                      <span className="PersonRgroup">Person</span>
                    </div>
                    <div>{item.options || "1 option available"}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CommanSlider;




// ✅ How to Use It Anywhere

import CommanSlider from './CommanSlider';
import sliderImage from '../../assets/images/commanslider.png';

const sliderData = [
  {
    title: "Desert Safari & BBQ",
    image: sliderImage,
    location: "Dubai",
    rating: 4.5,
    reviewCount: 12,
    oldPrice: "78.59",
    newPrice: "63.99",
    options: "2 options",
    category: "Adventure",
  },
  // ... more items
];

export default function HomePage() {
  return (
    <div>
      <CommanSlider 
        title="Explore Top Activities" 
        subtitle="Don't miss out on these experiences!" 
        items={sliderData}
      />
    </div>
  );
}
// This File not in use 