import React, { useState } from "react";
import "./Register.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import GetOffersDeals from "../../components/GetOffersDeals/GetOffersDeals";
import {POST} from "../../apicController/apiController";

const Register = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        password: '',
        confirm_password: ''
    });




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setErrors([]);
    };


    const validate = () => {
        const { first_name, last_name, phone_number, email, password, confirm_password } = formData;
        const newErrors = [];

        // Check for empty fields
        if (!first_name.trim()) {
            newErrors.push('Enter first name');
        }
        if (!last_name.trim()) {
            newErrors.push('Enter last name');
        }
        if (!phone_number.trim()) {
            newErrors.push('Enter phone number');
        }
        if (!email.trim()) {
            newErrors.push('Enter email');
        }
        if (!password) {
            newErrors.push('Enter password');
        }
        if (!confirm_password) {
            newErrors.push('Enter confirm password');
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() && !emailRegex.test(email)) {
            newErrors.push('Enter a valid email address');
        }

        // Validate password length
        if (password && password.length < 6) {
            newErrors.push('Password must be at least 6 characters');
        }

        // Validate password match
        if (password && confirm_password && password !== confirm_password) {
            newErrors.push('Passwords do not match');
        }

        // Validate phone number (basic check for digits and optional format)
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (phone_number.trim() && !phoneRegex.test(phone_number)) {
            newErrors.push('Enter a valid phone number (at least 10 digits)');
        }

        return {
            isValid: newErrors.length === 0,
            errors: newErrors
        };
    };

    const registerUser = async () => {
        const { isValid, errors } = validate();
        setErrors(errors);
        if (isValid) {
            try {
                const response = await POST('register', formData);
                // Success: Reset form and clear errors
                setFormData({
                  first_name: '',
                  last_name: '',
                  phone_number: '',
                  email: '',
                  password: '',
                  confirm_password: ''
                });
                setErrors([]);
                navigate('/login');
                alert('Registration successful!');
              } catch (error) {
                // Handle API errors
                if (error.response) {
                  // Non-200 response (e.g., 400, 422)
                  const status = error.response.status;
                  const message = error.response.data?.message || 'An error occurred during registration';
                  setErrors([message]); // Set API error message in errors state
                  console.error(`API error: ${status} - ${message}`); // Log for debugging
                } else {
                  // Network or other errors
                  setErrors(['Network error, please try again later']);
                  console.error('Network error: ' + error.message);
                }
                // Removed throw new Error(...) to prevent crash
              }
        }
    }



    return (
        <div className="Register_wrapper">
            <Header />
            <div className="container Register_wrapper">
                <div className="row">
                    <div>
                        <div className="container">
                            <div className="spaceForHeader"></div>
                            <div className="cs_breadcrub"><a className="breadcrumb_parent" href="/">Home</a> - <span className="breadcrumb_child">Register </span></div>
                            <p className="commonTxt text-start mt-5 mb-3">Register now to manage your account details, preferences and communication settings.</p>
                            <hr />
                            <div className="CustomshadowCard mt-4">
                                <form className="needs-validation">
                                    <div className="bookTripLoginForm">
                                        <h1>New to Dream Journey? Register Now</h1>
                                        <div className="row">

                                            <div className="col-lg-4">
                                                <input
                                                    name="first_name"
                                                    type="text"
                                                    className="simpleInput form-control mt-3"
                                                    placeholder="First Name"
                                                    autoComplete="off"
                                                    value={formData.first_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <input
                                                    name="last_name"
                                                    type="text"
                                                    className="simpleInput form-control mt-3"
                                                    placeholder="Last Name"
                                                    autoComplete="off"
                                                    value={formData.last_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <input
                                                    name="phone_number"
                                                    type="text"
                                                    className="simpleInput form-control mt-3"
                                                    placeholder="Phone Number"
                                                    autoComplete="off"
                                                    value={formData.phone_number}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="simpleInput form-control mt-3"
                                                    placeholder="Email"
                                                    autoComplete="off"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <input
                                                    name="password"
                                                    type="password"
                                                    className="simpleInput form-control mt-3"
                                                    placeholder="Password"
                                                    autoComplete="off"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <input
                                                    name="confirm_password"
                                                    type="password"
                                                    className="simpleInput form-control mt-3"
                                                    placeholder="Confirm Password"
                                                    autoComplete="off"
                                                    value={formData.confirm_password}
                                                    onChange={handleChange}
                                                />
                                            </div>


                                            <div className="col-lg-12"><div
                                                onClick={() => registerUser()}
                                                className="btn primary-btn mt-3 w-100">Register</div></div>


                                            {errors.length > 0 && (
                                                <div className="alert alert-danger mt-3">
                                                    <ul>
                                                        {errors.map((error, index) => (
                                                            <li key={index}>{error}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </form>
                                <div className="commonTxt text-center my-4">Already have an account? <Link to="/login">Login Now</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GetOffersDeals />
            <Footer />
        </div>
    );
};

export default Register;