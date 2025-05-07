import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomDynamicSlider.css";

const CustomDynamicSlider = ({ title = "Slider Title", slides = [] }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="CDS_section_Slider mt-5">
      <div className="CDSslider-container">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="CDS_Headings">{title}</h1>
          <div className="CDSarrow-wrapper">
            <div
              className="CDScustom-arrow custom-prev-arrow"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <i className="bi bi-chevron-left text-white"></i>
            </div>
            <div
              className="CDScustom-arrow custom-next-arrow"
              onClick={() => sliderRef.current.slickNext()}
            >
              <i className="bi bi-chevron-right text-white"></i>
            </div>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {slides.map((item, index) => (
            <div key={index}>
              <div className="CDS_Wrapper">
                <img src={item.image} alt={item.title} />
                <div className="commanTipwper d-flex align-items-center justify-content-between">
                    <div className="CDS_CityTur">City Tour</div>
                    <div className="CDS_starReview">
                        <i className="bi bi-star-fill"></i> &nbsp;<span>1.5</span>
                    </div>
                </div>
                <div className="CDS_post-content">
                  <div className="d-flex justify-content-between">
                    <h3 className="CDS_post_title">{item.title}</h3>
                    <span>
                      <i className="bi bi-heart WishHeartLike"></i>
                    </span>
                  </div>
                  <div className="d-flex CDS_LocationCity">
                    <i className="bi bi-geo-alt"></i>&nbsp;
                    <span>{item.location}</span>
                  </div>
                  <div className="CDS_ReviewRatingCardWpr d-flex">
                    {[...Array(item.rating)].map((_, i) => (
                      <i className="bi bi-star-fill" key={i}></i>
                    ))}
                    <span>({item.reviews} reviews)</span>
                  </div>
                  <div className="CardCuttingPrice mt-5">
                    <span>From</span> <del>{item.originalPrice}</del>
                  </div>
                  <div className="comnCardPricewpr d-flex justify-content-between">
                    <div>
                      <span className="OrignalPrice">{item.discountedPrice} /</span>
                      <span className="PersonRgroup">Person</span>
                    </div>
                    <div>{item.options} option available</div>
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

export default CustomDynamicSlider;
