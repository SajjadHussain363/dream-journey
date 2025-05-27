import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { GET } from "../../apicController/apiController";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomDynamicSlider.css";
import { Link } from "react-router-dom";

const CustomDynamicSlider = ({ title = "Slider Title" }) => {
  const sliderRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <Slider ref={sliderRef} {...settings}>
            {products.map((item, index) => (
              <div key={index}>
                <div className="CDS_Wrapper">
                  <img
                    src={item.product_image}
                    alt={item.name}
                    className="CDS_SliderImage"
                  />
                  <div className="commanTipwper d-flex align-items-center justify-content-between">
                    {item.category && (
                      <div className="CDS_CityTur">{item.category}</div>
                    )}
                    <div className="CDS_starReview">
                      <i className="bi bi-star-fill"></i> &nbsp;
                      <span>{item.average_rating}</span>
                    </div>
                  </div>
                  <div className="CDS_post-content px-3 pb-3">
                    <div className="d-flex justify-content-between">
                      <Link to={`/top-pick-details/${item.uid}`} className="Products_card_title text-decoration-none">
                        <h3 className="CDS_post_title">{item.name}</h3>
                      </Link>
                      <span>
                        <i className="bi bi-heart WishHeartLike"></i>
                      </span>
                    </div>
                    <div className="d-flex CDS_LocationCity mt-3 mb-3">
                      <i className="bi bi-geo-alt"></i>&nbsp;
                      <span>Dubai</span>


                      {item.theme && item.theme.length > 0 && (
                        <div className="NatureWildLife bulltes">
                          <i className="bi bi-circle-fill"></i> {item.theme.join(", ")}
                        </div>
                      )}
                    </div>
                    <div className="d-flex">

                      <div className="ReviewRatingWrapper text-start">
                        <div className="ms-2 RtingNew d-flex">
                          {item.is_new_product ? (
                            <span>★ New</span>
                          ) : (
                            <span>{"★".repeat(Math.round(item.average_rating))}</span>
                          )}
                          <div className="TimeShow"><span><i className="bi bi-clock"></i></span> {item.duration}</div>
                        </div>
                      </div>
                     
                    </div>



                    <div className="CityFeatch text-start d-flex align-items-center">
                      <div className="cancelFreeClr">
                        <i className="bi bi-check-circle"></i> Free Cancellation : {item.free_cancellation ? "Yes" : "No"}
                      </div>
                    </div>



                    <div className="CardCuttingPrice mt-5">
                      <span>From</span> <del>AED {parseFloat(item.price) + 50}</del>
                    </div>
                    <div className="comnCardPricewpr d-flex justify-content-between">
                      <div>
                        <span className="OrignalPrice">AED {item.price} /</span>
                        <span className="PersonRgroup">Person</span>
                      </div>
                      <div>{item.listing_highlight_display}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default CustomDynamicSlider;
