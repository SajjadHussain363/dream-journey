import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ExploreOurTheme.css';

import slide1 from '../../assets/images/GreatGetaways3.png';
import slide2 from '../../assets/images/GreatGetaways2.png';
import slide3 from '../../assets/images/GreatGetaways1.png';

import Tag1Pic from '../../assets/images/couples.png';
import Tag2Pic from '../../assets/images/adventure.png';
import Tag3Pic from '../../assets/images/nature.png';

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

const ExploreOurTheme = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const safariData = [
        {
            bgImage: slide1,
            title: "Explore From Our Themes",
            subtitle: "Where Sand Meets Excitement: Unleash the Ultimate tourism themes in Dubai",
            buttonText: "View all themes",
            cardTitle: "Couples",
            cardInfo: "We help people find co travellers and also structure their travel plans",
            cardImage: Tag1Pic,
        },
        {
            bgImage: slide2,
            title: "Explore From Our Themes",
            subtitle: "Where Sand Meets Excitement: Unleash the Ultimate tourism themes in Dubai",
            buttonText: "View all themes",
            cardTitle: "Adventure",
            cardInfo: "We help people find co travellers and also structure their travel plans",
            cardImage: Tag2Pic,
        },
        {
            bgImage: slide3,
            title: "Explore From Our Themes",
            subtitle: "Where Sand Meets Excitement: Unleash the Ultimate tourism themes in Dubai",
            buttonText: "View all themes",
            cardTitle: "Nature",
            cardInfo: "We help people find co travellers and also structure their travel plans",
            cardImage: Tag3Pic,
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
        beforeChange: (_, next) => setActiveIndex(next),
    };

    return (
        <section
            className="ExploreTheme"
            style={{
                backgroundImage: `url(${safariData[activeIndex]?.bgImage})`,
            }}
        >
            <div className="explore-slider-container container">
                <div className="explore-section-container explore-section-inner row">
                    <div className="col-lg-12">
                        <h1 className="mb-md-4 mb-1">{safariData[activeIndex]?.title}</h1>
                        <h6 className="mb-5">{safariData[activeIndex]?.subtitle}</h6>
                    </div>
                </div>

                <div className="slider-wrapper position-relative">
                    <Slider {...settings} className="background-slider">
                        {safariData.map((_, index) => (
                            <div key={index}>
                                <div style={{ height: '1px' }}></div>
                            </div>
                        ))}
                    </Slider>

                    <div className="static-cards d-flex flex-wrap justify-content-between px-2 mt-5">
                        {safariData.map((item, index) => (
                            <div
                                key={index}
                                className={`explore-card d-flex align-items-center gap-3 mx-2 mb-3 ${activeIndex === index ? 'active' : ''}`}
                            >
                                <div style={{ flex: '0 0 80px' }}>
                                    <img src={item.cardImage} alt={item.cardTitle} style={{ width: '120px', borderRadius: '6px' }} />
                                </div>
                                <div style={{ flex: '1' }}>
                                    <p className="title">{item.cardTitle}</p>
                                    <p className="info">{item.cardInfo}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="explore-btn-wrapper d-flex justify-content-end mt-3">
                        <button className="explore-btn">
                            {safariData[activeIndex]?.buttonText}
                            <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExploreOurTheme;
