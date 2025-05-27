import React, { useState } from "react";
import "./Login.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import GetOffersDeals from "../../components/GetOffersDeals/GetOffersDeals";
import { POST } from "../../apicController/apiController";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const validate = () => {
    const { email, password } = formData;
    const newErrors = [];

    // Check for empty fields
    if (!email.trim()) {
      newErrors.push("Enter email");
    }
    if (!password) {
      newErrors.push("Enter password");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() && !emailRegex.test(email)) {
      newErrors.push("Enter a valid email address");
    }

    // Validate password length
    if (password && password.length < 6) {
      newErrors.push("Password must be at least 6 characters");
    }

    return {
      isValid: newErrors.length === 0,
      errors: newErrors,
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear errors when user starts typing
    setErrors([]);
  };

  const handleSubmit = async () => {
    const { isValid, errors: validationErrors } = validate();
    setErrors(validationErrors);

    if (!isValid) {
      return;
    }

    try {
      const response = await POST("login", formData);

      // Check if response exists and has data
      console.log("Login response:", response); // For debugging

      // Make sure we have data to save
      if (response && response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data));
      } else if (response) {
        // If response exists but data is in the response root
        localStorage.setItem("userData", JSON.stringify(response));
      } else {
        // Fallback - at minimum save something to show user is logged in
        localStorage.setItem(
          "userData",
          JSON.stringify({
            formData,
            isLoggedIn: true,
          })
        );
      }

      // Success: Reset form and clear errors
      setFormData({
        email: "",
        password: "",
      });
      setErrors([]);

      // Redirect to home page
      window.location.href = "/"; // or use router if using React Router
    } catch (error) {
      // Handle API errors
      if (error.response) {
        // Non-200 response (e.g., 400, 401)
        const status = error.response.status;
        const message =
          error.response.data?.message || "Invalid email or password";
        setErrors([message]); // Set API error message in errors state
        console.error(`API error: ${status} - ${message}`); // Log for debugging
      } else {
        // Network or other errors
        setErrors(["Network error, please try again later"]);
        console.error("Network error: " + error.message);
      }
    }
  };

  return (
    <div className="Login_wrapperst">
      <Header />
      <div className="container Login_wrapper">
        <div className="container">
          <div className="spaceForHeader"></div>
          <div className="cs_breadcrub">
            <a className="breadcrumb_parent" href="/">
              Home
            </a>{" "}
            - <span className="breadcrumb_child">Login </span>
          </div>
          <p className="commonTxt text-start mt-5 mb-3">
            Sign in to manage your account details, preferences and
            communication settings.
          </p>
          <hr />
          <div className="CustomshadowCard mt-4">
            <form className="needs-validation">
              <div className="bookTripLoginForm">
                <h1>Login to your account</h1>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      name="email"
                      type="email"
                      className="simpleInput form-control mt-3"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      name="password"
                      type="password"
                      className="simpleInput form-control mt-3"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-12">
                    <p className="commonTxt text-end m-0 mt-3">
                      Having trouble signing in? <a href="#">Reset password</a>
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <div
                      onClick={() => handleSubmit()}
                      type="submit"
                      className="btn primary-btn mt-3 w-100 LoginBtn"
                    >
                      Login
                    </div>
                  </div>
                </div>
              </div>
            </form>

            {errors.length > 0 && (
              <div className="alert alert-danger mt-3">
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <div className="social-bookTripLogin-Option">
                <div className="or-break social-break text-center my-4">
                  Or sign in using social media account
                </div>
              </div>
              <div className="d-flex flex-sm-row flex-column gap-3">
                <div className="login-social-option">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <button className="login-social-option text-center">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div class="commonTxt text-center my-4">
              New to Dream Journey?{" "}
              <Link to="/register">Register a new account</Link>
            </div>
          </div>
        </div>
      </div>
      <GetOffersDeals />
      <Footer />
    </div>
  );
};

export default Login;
