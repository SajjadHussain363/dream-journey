import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import PaymentCards from '../../assets/images/paymentCards.png';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-white  pb-3 mt-auto">
      <div className="container">
        <div className="row footerRowInner row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="Wrapper-footer-list">
            <h5 className="footer-title">Destination</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/dubai">Dubai</NavLink></li>
              <li><NavLink to="/abu-dhabi">Abu Dhabi</NavLink></li>
              <li><NavLink to="/ras-al-khaimah">Ras Al Khaimah</NavLink></li>
              <li><NavLink to="/sharjah">Sharjah</NavLink></li>
              <li><NavLink to="/fujairah">Fujairah</NavLink></li>
            </ul>
          </div>
          <div className="Wrapper-footer-list">
            <h5 className="footer-title">Explore</h5>
            <ul className="list-unstyled footer-list">
              <li><NavLink to="/tours">Tours</NavLink></li>
              <li><NavLink to="/activities">Activities</NavLink></li>
              <li><NavLink to="/attractions">Attractions</NavLink></li>
              <li><NavLink to="/experiences">Experiences</NavLink></li>
            </ul>
          </div>
          <div className="Wrapper-footer-list">
            <h5 className="footer-title">Company</h5>
            <ul className="list-unstyled footer-list">
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/blog">Travel Blog</NavLink></li>
              <li><NavLink to="/mice360">MICE360</NavLink></li>
              <li><NavLink to="/customers">Customers</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
          </div>
          <div className="Wrapper-footer-list">
            <h5 className="footer-title">Support</h5>
            <ul className="list-unstyled footer-list">
              <li><NavLink to="/terms-conditions">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
              <li><NavLink to="/legal">Legal</NavLink></li>
              <li><NavLink to="/contact-us">Help Center</NavLink></li>
              <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
        </div>
      
        <hr className="border-light my-4" />
        <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h6 className="text-white mb-3">Accepted Payment Channels</h6>
            <div className="d-flex flex-wrap gap-2">
              {/* {["visa", "mastercard", "amex", "unionpay", "jcb", "paypal"].map((name) => (
                <img
                  key={name}
                  src={`https://img.icons8.com/color/48/000000/${name}.png`}
                  alt={name}
                  className="payment-icon"
                />
              ))} */}
              <img src={PaymentCards} alt="Payment Cards" className="payment-icon" />
            </div>
          </div>

          <div className="col-md-6">
          <div className="d-flex justify-content-md-end gap-3 ">
            <p className="mb-1 needHelps fw-bold">Need Help?</p>
            <p className="mb-2">
              <FaPhoneAlt className="me-2" />
              +97142959630
            </p>
          </div>
            <div className="d-flex justify-content-md-end gap-3 social-icons">
            <p className="mb-2 reachUs fw-bold">Reach us</p>
              <FaFacebookF />
              <FaWhatsapp />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

       
      </div>
      <hr className="border-light my-4" />
      <Container>
        <Row>
          <Col>
           
            <div className="text-center small">
                2015–{new Date().getFullYear()} Dream Journey Tourism,{" "}
                <span className="madeInDxb">Made in Dubai</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
