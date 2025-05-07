import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './HeaderCarousel.css';
import Header from "../Header/Header"; 
import Slide1 from "../../assets/images/slide1.png";
import Slide2 from "../../assets/images/safari.jpeg";
import Slide3 from "../../assets/images/top-season-exp-4.png";

const HeaderCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: Slide1,
      title: 'Start your unforgettable journey with us.',
      subtitle: 'UAE’s best tour operator trusted by over 150,000 customers.',
    },
    {
      id: 2,
      image: Slide2,
      title: 'Our Memorable Experiences',
      subtitle: 'Embrace unforgettable experiences with Dream Journey,s curated experiences.',
    },
    {
      id: 3,
      image: Slide3,
      title: 'All Things To Do',
      subtitle: 'Where Sand Meets Adventure: Unleash the ultimate tourism categories in Dubai',
    },
  ];

  const handleSelect = (selectedIndex) => setActiveIndex(selectedIndex);
  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) setActiveIndex(index);
  };

  return (
    <div className="header-carousel position-relative">
      <Header />

      <div className="carousel-wrapper">
        <Carousel
          activeIndex={activeIndex}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
          fade
        >
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <img className="d-block w-100 hero-image" src={slide.image} alt={`Slide ${slide.id}`} />
              <Carousel.Caption className="text-start">
                <h1 className="display-4 fw-bold">{slide.title}</h1>
                <p className="lead">{slide.subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="carousel-side-nav">
          <div className="dots">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
          <div className="arrows d-none d-md-flex">
            <i className={`bi bi-chevron-up ${activeIndex === 0 ? 'disabled' : ''}`} onClick={() => goToSlide(activeIndex - 1)}></i>
            <i className={`bi bi-chevron-down ${activeIndex === slides.length - 1 ? 'disabled' : ''}`} onClick={() => goToSlide(activeIndex + 1)}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
