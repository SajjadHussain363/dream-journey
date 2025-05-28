import React, { useState, useEffect } from "react";
import "./checkout.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import PickupLocation from "./autoComplete";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GetOffersDeals from "../../components/GetOffersDeals/GetOffersDeals";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import CheckOutBookingCard from "../../components/CheckOutBookingCard/CheckOutBookingCard";



const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 33.6844, // Default to Islamabad coordinates
  lng: 73.0479,
};

const Checkout = () => {
  const [myAppData, setMyAppData] = useState(null);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const appData = localStorage.getItem("myAppData");
    if (appData) {
      const parsedAppData = JSON.parse(appData);
      setMyAppData(parsedAppData);

      parsedAppData.forEach((item, index) => {
        console.log(`Item ${index + 1} Title:`, item.title);
        console.log(`Item ${index + 1} Image URL:`, item.img);
        console.log(`Item ${index + 1} Total Amount:`, item.totalAmount);
      });
    }
  }, []);

  const totalAmount = myAppData?.reduce(
    (sum, item) => sum + parseFloat(item.totalAmount || 0),
    0
  );

  const deleteItem = (indexToDelete) => {
    const updatedData = myAppData.filter((_, index) => index !== indexToDelete);

    // Update state
    setMyAppData(updatedData);

    // Update localStorage
    if (updatedData.length > 0) {
      localStorage.setItem("myAppData", JSON.stringify(updatedData));
    } else {
      localStorage.removeItem("myAppData");
    }
  };

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (locationData) => {
    setSelectedLocation(locationData);
  };

  return (
    <section className="checkout_wrapper">
     <ScrollToTop />
    
    <div>
      {/* <React.Fragment> */}
     
      <Header/>
      <div className="booking-container mt-5">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> <span> - </span>
          <Link to="/experience">Experience</Link> <span> - </span>
          <Link to="/experience/sand-desert">Sand & Desert</Link> <span> - </span>
          <span>Cart</span>
        </nav>

        <div className="CO_booking-timer text-center">
        <span className="icon">⏱</span> We guarantee your booking for the next 30:00 min
        </div>

        {/* Stepper */}
        <div class="stepper-header">
          <div class="stepper-grid d-flex justify-content-between align-items-center  ">
           <Container>
           <Row>
              <Col md={5}>
              <div>
            <h1 class="step-title">Complete your booking</h1>
            <small>Tour ID: <span>1234ABCD</span></small>
            </div>
              </Col>
              <Col md={7}>
              <div>
            <div class="stepper">
              <div class="step active">
                <div class="circle checked">✔</div>
                <div class="label">
                  <strong>Completed</strong>
                  <div class="sub-label">Login/Sign up</div>
                </div>
              </div>

              <div class="line"></div>

              <div class="step">
                <div class="circle">2</div>
                <div class="label">
                  <strong>Processing</strong>
                  <div class="sub-label">Contact Details</div>
                </div>
              </div>

              <div class="line"></div>

              <div class="step">
                <div class="circle">3</div>
                <div class="label">
                  <strong>Pending</strong>
                  <div class="sub-label">Payment</div>
                </div>
              </div>
            </div>
            </div>
              </Col>
            </Row>
           </Container>
            
            
            
            
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* location Col */}
          <div className="col-md-6">
            
            <CheckOutBookingCard />

            <div className="card-container mt-5">
              {myAppData?.map((item, index) => (
                <div className="card-row" key={index}>
                  <img src={item.img} alt={item.title} className="card-image" />
                  <div className="card-content">
                    <p className="card-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <PickupLocation onLocationSelect={handleLocationSelect} />
            </div>

            <div>
              {selectedLocation && (
                <div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      color: "#1A141F",
                    }}
                  >
                    {" "}
                    Meeting point{" "}
                  </div>
                  <div
                    style={{
                      color: "#4B3A5A",
                      fontWeight: "400",
                      fontSize: "14px",
                      marginTop: "2rem",
                    }}
                  >
                    {" "}
                    {selectedLocation.address}{" "}
                  </div>
                  {/* <p><strong>Coordinates:</strong> {selectedLocation.lat}, {selectedLocation.lng}</p> */}
                </div>
              )}
            </div>

            <div style={{ marginTop: "20px", marginBottom: "2rem" }}>
              <LoadScript
                googleMapsApiKey="AIzaSyBBHNqsXFQqg_-f6BkI5UH7X7nXK2KQzk8"
                libraries={libraries}
              >
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={
                    selectedLocation
                      ? { lat: selectedLocation.lat, lng: selectedLocation.lng }
                      : defaultCenter
                  }
                  zoom={selectedLocation ? 15 : 10}
                >
                  {selectedLocation && (
                    <Marker
                      position={{
                        lat: selectedLocation.lat,
                        lng: selectedLocation.lng,
                      }}
                      title={selectedLocation.address}
                    />
                  )}
                </GoogleMap>
              </LoadScript>
            </div>
          </div>

          {/* Data Col */}
          <div className="col-md-6">
            <div className="dataContainer">
              <div className="topData">
                <div className="orderHead">Order Summary</div>
                <div className=" d-flex justify-content-between">
                  <div className="">
                    {myAppData?.length} Experiences Added
                  </div>
                  <div className="">View Details</div>
                </div>

                <div className="card-container">
                  {myAppData?.map((item, index) => (
                    <div className="card-row" key={index}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="card-image"
                      />
                      <div className="card-content">
                        <p className="card-title">{item.title}</p>
                      </div>
                      <div className="card-actions">
                        <FaEdit className="icon" />
                        <FaTrash
                          onClick={() => deleteItem(index)}
                          className="icon"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Div */}
              <div className="totalDiv">
                <div className="row">
                  <div className="col-md-4">
                    <div style={{ fontWeight: "500", fontSize: "24px" }}>
                      Total
                    </div>
                    <div
                      style={{
                        fontWeight: "400",
                        fontSize: "12px",
                        color: "#4B3A5A",
                      }}
                    >
                      (Includes taxes and charges)
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <div
                      style={{
                        fontWeight: "500",
                        fontSize: "24px",
                        color: "#112211",
                      }}
                    >
                      AED{totalAmount?.toFixed(2)}
                    </div>
                  </div>
                  <div className="lineHori"></div>

                  <div className="mt-4">
                    <img src="/info-circle.png" alt="info" />{" "}
                    <span
                      style={{
                        fontWeight: "400",
                        fontSize: "12px",
                        color: "#4B3A5A",
                      }}
                    >
                      Cancel before 24 hours for a full refund
                    </span>
                  </div>
                </div>
                <Link className="chckotsbtns" to = "/add-checkout">Quick Checkout </Link>
              </div>
            </div>

            <div className="dataContainer2 mt-5">
              <div className="helpTitle">Do you need help?</div>
              <div className="helpDescrp">
                Our customer service is available every day to answer your
                questions.
              </div>

              <div className="line mt-5"></div>

              <div class="button-wrapper">
                <button class="chatUs">Chat With Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetOffersDeals/>
      <Footer/>
    </div>
    </section>
  );
};

export default Checkout;
