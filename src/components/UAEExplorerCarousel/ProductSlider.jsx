import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET } from "../../apicController/apiController";
import Ticket from "../../assets/images/ticket.png";
import Skeleton from 'react-loading-skeleton';

// Custom Arrow components
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <i className="bi bi-chevron-right"></i>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <i className="bi bi-chevron-left"></i>
  </div>
);

function SimpleSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    infinite: products.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow disabled={products.length <= 3} />,
    prevArrow: <PrevArrow disabled={products.length <= 3} />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: products.length > 2,
          nextArrow: <NextArrow disabled={products.length <= 2} />,
          prevArrow: <PrevArrow disabled={products.length <= 2} />,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: products.length > 1,
          nextArrow: <NextArrow disabled={products.length <= 1} />,
          prevArrow: <PrevArrow disabled={products.length <= 1} />,
        },
      },
    ],
  };


  return (
    <section className="OurTopPics">
      <Container className="UAEDestinationsWrapper">
        <Row className="PaddingAll">
          <Col>
            <div className="slider-top-arrows text-end">
              <h1 className="heading-primary text-end right">Our Top Picks</h1>
              <p className="paragraph-primary-sm">
                From epic showpiece attractions to unforgettable hidden gems.
              </p>
            </div>

            {loading && (
              <div className="text-center my-5">
                <div className="spinner-border text-warning" role="status">
                  <span className="sr-only">Loading...</span>
                  
                </div>
              </div>
            )}

            {error && (
              <div className="text-danger text-center my-3">{error}</div>
            )}

            {!loading && !error && products.length === 0 && (
              <div className="text-center my-3">No products available.</div>
            )}

            {!loading && !error && products.length > 0 && (
              <div className="slider-container ProductCarousel position-relative">
                <Slider {...settings}>
                  {products.map((product, index) => {
                    return <div key={index} className="px-2">

                      <div className="product-card text-center">
                        <img
                          src={product.product_image}
                          alt={product.name}
                          className="product-Slider-image"
                        />
                        <div className="product-card-content-wrapper">
                          <div className="rating_icon d-flex justify-content-center">
                            <i className="bi bi-star-fill me-1 text-white"></i>
                            <p className="mb-0">{product.average_rating}</p>
                          </div>

                          {product.category && (
                            <div className="CategoryToursInner">{product.category}</div>
                          )}

                          <div className="d-flex align-items-center justify-content-between">
                            <Link to={`/top-pick-details/${product.uid}`} className="Products_card_title">
                              <h3 className="card-title fw-bold mt-2">{product.name}</h3>
                            </Link>
                            <button class="btn wishlist-icon ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M14.7233 24.2784C14.3266 24.4184 13.6733 24.4184 13.2766 24.2784C9.89325 23.1234 2.33325 18.305 2.33325 10.1384C2.33325 6.53337 5.23825 3.6167 8.81992 3.6167C10.9433 3.6167 12.8216 4.64337 13.9999 6.23003C15.1783 4.64337 17.0683 3.6167 19.1799 3.6167C22.7616 3.6167 25.6666 6.53337 25.6666 10.1384C25.6666 18.305 18.1066 23.1234 14.7233 24.2784Z" stroke="#1A141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </button>
                          </div>

                          <div className="CityFeatch text-start d-flex">

                            <div><i class="bi bi-geo-alt"></i> Dubai</div>
                            <div className="NatureWildLife bulltes"><i class="bi bi-circle-fill"></i> {product.theme.join(", ")}</div>

                          </div>
                          <div className="ReviewRatingWrapper text-start">

                            <div className="ms-2 RtingNew d-flex">
                              {product.is_new_product ? (
                                <span>★ New</span>
                              ) : (
                                <span>{"★".repeat(Math.round(product.average_rating))}</span>
                              )}
                               <div className="TimeShow"><span><i class="bi bi-clock"></i></span>  {product.duration}</div>
                            </div>
                           
                          </div>
                          <div className="CityFeatch text-start d-flex align-items-center">
                              
                            <div><i class="bi bi-check-circle"></i> Free Cancellation : {product.free_cancellation ? "Yes" : "No"}</div> &nbsp;
                            <div className="TourTypes d-flex align-items-center"><img src={Ticket} alt="Ticket" />&nbsp; {product.type}</div>
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
                  })}
                </Slider>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SimpleSlider;
