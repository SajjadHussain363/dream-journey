import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UAEDestinationSlider.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dubai from "../../assets/images/dubai.png";
import AbuDhbai from "../../assets/images/Abu_dhabi.png";
import RasAlKhaimah from "../../assets/images/Ras_AL_Khaimah.png";
import Sharjah from "../../assets/images/sharjah.jpg";
import Ajman from "../../assets/images/Ajman-Heritage.jpg";
import Fujairah from "../../assets/images/Fujairah.jpg";
import Al_Ain from "../../assets/images/al-ain.png";
import { Link } from "react-router-dom";

// Slide data with images and titles
const slideData = [
  { img: Dubai, title: "Dubai" },
  { img: AbuDhbai, title: "Abu Dhabi" },
  { img: RasAlKhaimah, title: "Ras Al Khaimah" },
  { img: Sharjah, title: "Sharjah" },
  { img: Ajman, title: "Ajman" },
  { img: Fujairah, title: "Fujairah" },
  { img: Al_Ain, title: "Al Ain" },
];

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <i className="bi bi-chevron-right UAEleftArrowChrion"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <i className="bi bi-chevron-left UAEleftArrowChrion"></i>
    </div>
  );
};

const UAEDestinationSlider = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    autoplay: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="slider-container UAEDestinationSliderWrapper position-relative">
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <Link to ={`/destinations/`+slide.title } className="text-decoration-none">
          <div key={index} className="uae-slide-card-wrapper px-3">
            <div className="uae-slide-card">
              <img src={slide.img} alt={slide.title} className="img-fluid" />
              <div className="slide-title py-2 fw-bold">{slide.title}</div>
            </div>
          </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default UAEDestinationSlider;
