import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET } from "../../apicController/apiController";

import "./ExploreAllExperiences.css";

const ExploreAllExperiences = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GET(
          "products",
          {},
          {
            Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
            Accept: "application/json",
          }
        );

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
    <section className="Explore_All_Experiencs_Section mt-4">
      <Container>
        <Row>
          <Col>
            <div className="Explore_All_Experiencs_Wrapper d-flex justify-content-between align-items-center mt-4 flex-column flex-md-row">
              <div className="Explore_All_Experiencs_Heading mb-3 mb-md-0">
                <h1>Explore All Experiences</h1>
              </div>
              <div className="Explore_All_Experiencs_Btn_ViewAll">
                <Link to="/products">
                  <Button className="w-100 w-md-auto">View All</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        {loading && (
          <div className="text-center my-5">
            <small>Loading experiences...</small>
            <div className="spinner-border text-warning mt-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && <div className="text-danger text-center my-4">{error}</div>}

        {!loading && !error && products.length > 0 && (
          <div className="pt-5">
            <div className="row Explore_All_Experiencs_innerRow">
              {products.slice(0, 6).map((product, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="Explore_All_Experiencs_Card">
                    <img
                      src={product.product_image}
                      alt={product.name || "Experience"}
                      className="Explore_All_Experiencs_Image"
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

                    <div className="Explore_All_Experiencs_Card_Content px-3 pb-3">
                      <div className="d-flex justify-content-between align-items-start mt-3">
                       
                       
                       <Link to={`/top-pick-details/${product.uid}`} className="Products_card_title text-decoration-none">
                       <h3 className="Explore_All_Experiencs_Card_Title">
                       {product.name}
                       </h3>
                       </Link>

                        <span>
                          <i className="bi bi-heart Explore_All_Experiencs_HeartLike"></i>
                        </span>
                      </div>

                      {/* {product.category && (
                        <div className="CategoryToursInner mb-1">{product.category}</div>
                      )} */}
                     <div className="d-flex">
                     <div className="d-flex Explore_All_Experiencs_LocationCity mb-2">
                        <i className="bi bi-geo-alt"></i>&nbsp; <span>Dubai</span>
                      </div>
                        
                      {product.theme?.length > 0 && (
                        <div className="NatureWildLife bulltes gap-2 mb-2">
                          <i className="bi bi-circle-fill me-1"></i> {product.theme.join(", ")}
                        </div>
                      )}
                     </div>

                      <div className="ms-2 RtingNew d-flex align-items-center mb-2 gap-3 flex-wrap">
                        <span>
                          {product.is_new_product ? "★ New" : "★".repeat(Math.round(product.average_rating))}
                        </span>
                        <div className="TimeShow d-flex align-items-center">
                          <i className="bi bi-clock me-1"></i> {product.duration}
                        </div>
                      </div>

                      <div className="mt-3 cancelFreeClr d-flex align-items-center">
                        <i className="bi bi-check-circle me-2"></i>
                        Free Cancellation: {product.free_cancellation ? "Yes" : "No"}
                      </div>
                     

                      <div className="Explore_All_Experiencs_CuttingPrice mt-3 mb-2">
                        <span>From</span> <del>AED {parseFloat(product.price) + 50}</del>
                      </div>

                      <div className="Explore_All_Experiencs_Card_Price d-flex justify-content-between">
                        <div>
                          <span className="Explore_All_Experiencs_OriginalPrice">
                            AED {product.price} /
                          </span>{" "}
                          <span className="Explore_All_Experiencs_PersonGroup">Person</span>
                        </div>
                        <div>{product.listing_highlight_display}</div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              ))}

              <div className="ShowingRecords mt-5 text-center">
                <p>
                  Showing {Math.min(products.length, 6)} of {products.length} results
                </p>
                <div className="Explore_All_Experiencs_Btn_ViewAll">
                  <Link to="/products">
                    <Button className="w-100 w-md-auto">View All</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ExploreAllExperiences;
