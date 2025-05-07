import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './GatwaySection.css';

import slide1 from '../../assets/images/GreatGetaways3.png';
import slide2 from '../../assets/images/GreatGetaways2.png';
import slide3 from '../../assets/images/GreatGetaways1.png'; 
const NextArrow = ({ onClick, currentIndex, total }) => {
    const isDisabled = currentIndex >= total - 1;
    return (
        <div
            onClick={!isDisabled ? onClick : null}
            className={`arrow next-arrow ${isDisabled ? 'disabled' : ''}`}
        >
            <i className="bi bi-chevron-right"></i>
        </div>
    );
};

const PrevArrow = ({ onClick, currentIndex }) => {
    const isDisabled = currentIndex <= 0;
    return (
        <div
            onClick={!isDisabled ? onClick : null}
            className={`arrow prev-arrow ${isDisabled ? 'disabled' : ''}`}
        >
            <i className="bi bi-chevron-left"></i>
        </div>
    );
};

const GatwaySection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const safariData = [
        {
            bgImage: slide1,
            title: "Desert Safari",
            subtitle: "Experience the thrill of dune bashing, camel rides, and traditional entertainment in the heart of the Arabian desert.",
            buttonText: "view all Tours",
            cardTitle: "Morning Safari",
            cardInfo: "Experience the desert at sunrise",
        },
        {
            bgImage: slide2,
            title: "Luxury Yacht Tours",
            subtitle: "Cruise along Dubai's stunning coastline in a luxurious yacht, enjoying breathtaking views and first-class hospitality.",
            buttonText: "view all Tours",
            cardTitle: "Evening Safari",
            cardInfo: "Witness breathtaking desert sunsets",
        },
        {
            bgImage: slide3,
            title: "City Sightseeing Tours",
            subtitle: "Explore the UAE's top landmarks, cultural gems, and modern marvels on an unforgettable guided city tour.",
            buttonText: "view all Tours",
            cardTitle: "Night Safari",
            cardInfo: "Enjoy stargazing in the desert",
        },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow currentIndex={activeIndex} total={safariData.length} />,
        prevArrow: <PrevArrow currentIndex={activeIndex} />,
        beforeChange: (current, next) => {
            setActiveIndex(next);
        },
    };

    return (
        <section
            className="ThreeSlideWrapper"
            style={{
                backgroundImage: `url(${safariData[activeIndex]?.bgImage})`,
            }}
        >
            <div className="GatwaySection container">
                <div className="row GatwaySectionInner">
                    <div className="col-lg-12">
                        <h4>The Great Getaways</h4>
                        <h1 className="mb-md-4 mb-1">{safariData[activeIndex]?.title}</h1>
                        <h6 className="mb-5">{safariData[activeIndex]?.subtitle}</h6>
                        <button className="safari-btn">
                            {safariData[activeIndex]?.buttonText}
                            <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>

                <div className="slider-wrapper position-relative">
                    <Slider {...settings} className="background-slider">
                        {safariData.map((item, index) => (
                            <div key={index}>
                                <div style={{ height: '1px' }}></div>
                            </div>
                        ))}
                    </Slider>

                    <div className="static-cards d-flex flex-wrap justify-content-between px-2 mt-5">
    {safariData.map((item, index) => (
        <div
            key={index}
            className={`safari-card mx-2 mb-3 ${activeIndex === index ? 'active' : ''}`}
        >
            <p className="count">0{index + 1}</p>
            <p className="title">{item.cardTitle}</p>
            <p className="info">{item.cardInfo}</p>
        </div>
    ))}
</div>
                </div>
            </div>
        </section>
    );
};

export default GatwaySection;