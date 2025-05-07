import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ComminSliderPic from "../../assets/images/commanslider.png";
import "./ExploreAllExperiences.css";

const ExploreAllExperiences = () => {
  const cardData = [1, 2, 3, 4, 5, 6]; // dynamic list of items

  return (
    <>
      <section className="Explore_All_Experiencs_Section mt-4">
        <Container>
        <Row>
        <Col>
            <div className="Explore_All_Experiencs_Wrapper d-flex justify-content-between align-items-center mt-4 flex-column flex-md-row">
            <div className="Explore_All_Experiencs_Heading mb-3 mb-md-0">
                <h1>Explore All Experiences</h1>
            </div>
            <div className="Explore_All_Experiencs_Btn_ViewAll">
                <Button className="w-100 w-md-auto">View All</Button>
            </div>
            </div>
        </Col>
        </Row>

        

        <div className=" pt-5">
          <div className="row Explore_All_Experiencs_innerRow">
            {cardData.map((item) => (
              <div key={item} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="Explore_All_Experiencs_Card">
                  <img
                    src={ComminSliderPic}
                    alt={`ExploreAllExperiencs ${item}`}
                    className="Explore_All_Experiencs_Image"
                  />
                  <div className="Explore_All_Experiencs_Card_Tip d-flex justify-content-between px-3">
                    <div className="Explore_All_Experiencs_StarReview">
                      <i className="bi bi-star-fill"></i> <span>1.5</span>
                    </div>
                    <div className="Explore_All_Experiencs_CityTour">City Tour</div>
                  </div>

                  <div className="Explore_All_Experiencs_Card_Content px-3 pb-3">
                    <div className="d-flex justify-content-between align-items-start">
                      <h3 className="Explore_All_Experiencs_Card_Title">
                        Desert Discovery Journey: Red Dunes Desert Safari & BBQ {item}
                      </h3>
                      <span>
                        <i className="bi bi-heart Explore_All_Experiencs_HeartLike"></i>
                      </span>
                    </div>

                    <div className="d-flex Explore_All_Experiencs_LocationCity mb-2">
                      <i className="bi bi-geo-alt"></i>&nbsp; <span>Dubai</span>
                    </div>

                    <div className="Explore_All_Experiencs_ReviewRating d-flex mb-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <span>(3 reviews)</span>
                    </div>

                    <div className="Explore_All_Experiencs_CuttingPrice mt-3 mb-2">
                      <span>From</span> <del>78.59</del>
                    </div>

                    <div className="Explore_All_Experiencs_Card_Price d-flex justify-content-between">
                      <div>
                        <span className="Explore_All_Experiencs_OriginalPrice">AED 63.99 /</span>{" "}
                        <span className="Explore_All_Experiencs_PersonGroup">Person</span>
                      </div>
                      <div>1 option available</div>
                    </div>
                  </div>
                </div>
              </div>
              
            ))}
            <div className="ShowingRecords mt-5">
                <p>Showing 6 of 12 results</p>
                <div className="Explore_All_Experiencs_Btn_ViewAll">
                    <Button className="w-100 w-md-auto">View All</Button>
                </div>
            </div>

          </div>
        </div>
        </Container>
      </section>
    </>
  );
};

export default ExploreAllExperiences;
