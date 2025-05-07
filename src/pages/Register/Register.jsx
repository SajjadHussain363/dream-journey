import React from "react";
import "./Register.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import GetOffersDeals from "../../components/GetOffersDeals/GetOffersDeals";

const Register = () => {
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
                                            <div className="col-lg-4"><input name="first_name" type="text" className="simpleInput form-control mt-3 undefined" placeholder="First Name" autocomplete="false" /></div>
                                            <div className="col-lg-4"><input name="last_name" type="text" className="simpleInput form-control mt-3 undefined" placeholder="Last Name" autocomplete="false" /></div>
                                            <div className="col-lg-4"><input name="phone_number" type="text" className="simpleInput form-control mt-3 undefined" placeholder="Phone Number" autocomplete="false" /></div>
                                            <div className="col-lg-4"><input name="email" type="email" className="simpleInput form-control mt-3 undefined" placeholder="Email" autocomplete="false" /></div>
                                            <div className="col-lg-4"><input name="password" type="password" className="simpleInput form-control mt-3 undefined" placeholder="Password" autocomplete="false" /></div>
                                            <div className="col-lg-4"><input name="confirm_password" type="password" className="simpleInput form-control mt-3 undefined" placeholder="Confirm Password" autocomplete="false" /></div>
                                            <div className="col-lg-12"><button type="submit" className="btn primary-btn mt-3 w-100">Register</button></div>
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