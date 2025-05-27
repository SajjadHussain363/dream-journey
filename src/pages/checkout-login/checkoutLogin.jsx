import React, { useState, useEffect } from "react";
import "./checkout.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const CheckoutLogin = () => {
  const [myAppData, setMyAppData] = useState(null);

  const [myUserData, setUserData] = useState(null);

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

  return (
    <div>
      <div className="booking-container">
        <nav className="breadcrumb">
          <a href="#">Home</a> <span>&gt;</span>
          <a href="#">Experience</a> <span>&gt;</span>
          <a href="#">Sand & Desert</a> <span>&gt;</span>
          <span>Cart</span>
        </nav>

        <div className="booking-timer">
          <span className="icon">⏱</span> We guarantee your booking for the next
          30:00 min
        </div>

        <div class="stepper-header">
          <div class="stepper-grid">
            <h1 class="step-title">Login/Sign up</h1>

            <div class="stepper">
              <div class="step active">
                <div class="circle checked">✔</div>
                <div class="label">
                  <strong>Processing</strong>
                  <div class="sub-label">Login/Sign up</div>
                </div>
              </div>

              <div class="line"></div>

              <div class="step">
                <div class="circle">2</div>
                <div class="label">
                  <strong>Pending</strong>
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
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* Login Col */}
          <div className="col-md-6">
            <div className="loginContainer">
              <div className="loginHead">
                Login or Sign up to book this trip
              </div>
              <div className="guestBtn">Continue as Guest</div>
              <div class="divider-container">
                <div class="line"></div>
                <div class="or-text">Or</div>
                <div class="line"></div>
              </div>

              <div className="emailInputHead">Login by email</div>
              <input
                type="email"
                class="form-control mt-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>

              <div className="loginDescrp mt-2">
                We’ll send a verification email to confirm your email address.
              </div>

              <div className="continueBtn">Continue</div>

              <div class="divider-container">
                <div class="line"></div>
                <div class="or-text">Or Login Using...</div>
                <div class="line"></div>
              </div>

              <div className="divider-container">
                <div className="socialMediaDiv">
                  <img src="/fb.png" />
                </div>
                <div className="socialMediaDiv">
                  <img src="/google.png" />
                </div>
              </div>

              <div className="signUp">
                Don’t have an Account?{" "}
                <a href="/" className="signUpBtn">
                  {" "}
                  Signup{" "}
                </a>
              </div>

              <div className="backBtn">Back</div>
            </div>
          </div>

          {/* Data Col */}
          <div className="col-md-6">
            <div className="dataContainer">
              <div className="topData">
                <div className="orderHead">Order Summary</div>
                <div className="row">
                  <div className="col">
                    {myAppData?.length} Experiences Added
                  </div>
                  <div className="col">Show Details</div>
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
    </div>
  );
};

export default CheckoutLogin;
