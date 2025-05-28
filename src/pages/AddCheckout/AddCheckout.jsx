import React, { useState, useEffect } from "react";
import { GET } from "../../apicController/apiController";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckOutBookingCard from "../../components/CheckOutBookingCard/CheckOutBookingCard";
import GetOffersDeals from "../../components/GetOffersDeals/GetOffersDeals";
import "./AddCheckout.css";

const AddCheckout = () => {
  const [fetchingData, setFetchingData] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    getOtherProducts();
  }, []);

  const getOtherProducts = async () => {
    setFetchingData(true);
    try {
      const response = await GET("products");
      setAllProducts(response.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setFetchingData(false);
    }
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const ProductCards = () => {
    if (fetchingData) {
      return <center>Loading API Data... <br /> <div className="spinner-border text-warning" role="status">
      <span className="sr-only"></span>
  </div></center>
    }

    return (
      <div className="row gy-4">
        {allProducts.map((product, index) => {
          const words = product.short_description
            ?.split(" ")
            .filter((word) => word.trim() !== "");

          const isExpanded = expandedIndex === index;
          const visibleText = isExpanded
            ? words.join(" ")
            : words.slice(0, 5).join(" ");

          const originalPrice = parseFloat(product.price || 0);
          const cutPrice = originalPrice + 50;

          return (
            <div key={index} className="col-12 AddCheckout_Card_wrppr">
              <div className="d-flex flex-column flex-md-row align-items-start rounded p-3">
                {/* Image */}
                <img
                  src={product.product_image}
                  alt={product.name}
                  className="img-fluid rounded"
                  style={{ width: "200px", height: "150px", objectFit: "cover" }}
                />

                {/* Text */}
                <div className="ms-md-4 mt-3 mt-md-0 flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to={`/top-pick-details/${product.uid}`}
                      className="Products_card_title text-decoration-none"
                    >
                      <h3 className="card-title mb-2">{product.name}</h3>
                    </Link>
                    <button className="btn wishlist-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14.7233 24.2784C14.3266 24.4184 13.6733 24.4184 13.2766 24.2784C9.89325 23.1234 2.33325 18.305 2.33325 10.1384C2.33325 6.53337 5.23825 3.6167 8.81992 3.6167C10.9433 3.6167 12.8216 4.64337 13.9999 6.23003C15.1783 4.64337 17.0683 3.6167 19.1799 3.6167C22.7616 3.6167 25.6666 6.53337 25.6666 10.1384C25.6666 18.305 18.1066 23.1234 14.7233 24.2784Z" stroke="#1A141F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </button>
                  </div>

                  <div className="d-flex">
                    <p className="mb-2">
                      {visibleText}
                      {words.length > 5 && !isExpanded && "..."}
                      {words.length > 5 && (
                        <button
                          className="Read_more p-0"
                          onClick={() => toggleExpand(index)}
                        >
                          {isExpanded ? "Show less" : "(Read more)"}
                        </button>
                      )}
                    </p>
                  </div>

                  <div className="fw-semibold mt-3 d-flex justify-content-between align-items-center ">
                   <div>
                   <strong className="me-2">AED{originalPrice}</strong>
                   <del className="text-muted delSmllPrice me-1"><small>AED {cutPrice}</small></del>/ <span>person</span>
                   </div>
                   <Link className="#" to={`/top-pick-details/${product.uid}`}>
                  <button className="Book_now_arrow me-2">Book Now</button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" color="#000" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                  </Link>
                  </div>
                  
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mt-5">
      <Header />
      <div className="mt-5">&nbsp;</div>
      <div className="mt-5">&nbsp;</div>
      <div className="mt-5">&nbsp;</div>

      <Container>
        <Row>
          <Col md="6">
            <div className="book_another_activity_wrapper">
              <h1 className="Book_another_activity_title">Book another activity now and save on top sellers</h1>
              <ProductCards />
            </div>
          </Col>
          <Col md="6">
            <CheckOutBookingCard />
          </Col>
        </Row>
      </Container>

      <div className="mt-5"></div>
      <GetOffersDeals />
      <Footer />
    </div>
  );
};

export default AddCheckout;
