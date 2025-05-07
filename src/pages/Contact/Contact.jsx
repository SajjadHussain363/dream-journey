import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AwardWinning from '../../components/AwardWinning/AwardWinning';
import HelpCentre from '../../components/HelpCentre/HelpCentre';
import OurPartners from '../../components/OurPartners/OurPartners';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='Bgclrs'>
            <Header />
            <div className="spaceForHeader"></div>
            <div className="cart-wrapper position-relative">
                <div className="container">
                    <div className="row  gx-md-5 gy-5">
                        <div className="col-xl-6 flex-fill">
                            <div>
                                <div>
                                    <div className="cs_breadcrumb">
                                        <a className="breadcrumb_parent" href="/">
                                            Home
                                        </a>{" "}
                                        - <span className="breadcrumb_child">Contact Us</span>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="xl_body_text pt-4">Contact Us</h1>
                                    <p className="special-tags">Send us a message</p>
                                    <div className="body-sm-text ">
                                        Our support team is highly skilled and experienced in resolving
                                        your queries related to your booking or helping out with your tour
                                        questions.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 contactUsCard flex-fill">
                            <div className="contactUsCardForm ">
                                <form className="contactUsCardFormInput">
                                    <div className="body-text-XS d-flex align-items-center">
                                        Do you have a booking with us?{" "}
                                        <input
                                            type="radio"
                                            name=""
                                            id=""
                                            className="ms-sm-4 ms-2 me-2 customRadio2"
                                            defaultValue="yes"
                                            defaultChecked=""
                                        />{" "}
                                        Yes
                                        <input
                                            type="radio"
                                            name=""
                                            className="ms-sm-4 ms-2 me-2 customRadio2"
                                            defaultValue="no"
                                        />{" "}
                                        No
                                    </div>
                                    <input
                                        type="text"
                                        className="simpleInput"
                                        placeholder="Booking Number"
                                        name="booking_number"
                                    />
                                    <div className="d-flex flex-md-row flex-column gap-2">
                                        <div className="w-full" style={{ width: "100%" }}>
                                            <input
                                                type="text"
                                                className="simpleInput"
                                                placeholder="First Name"
                                                name="first_name"
                                            />
                                        </div>
                                        <div className="w-full" style={{ width: "100%" }}>
                                            <input
                                                type="text"
                                                className="simpleInput"
                                                placeholder="Last Name"
                                                name="last_name"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-md-row flex-column  gap-2">
                                        <div className="" style={{ width: "100%" }}>
                                            <input
                                                type="email"
                                                className="simpleInput"
                                                placeholder="Email Address"
                                                name="email"
                                            />
                                        </div>
                                        <div className="" style={{ width: "100%" }}>
                                            <input
                                                type="text"
                                                className="simpleInput"
                                                placeholder="Phone Number"
                                                name="phone"
                                            />
                                        </div>
                                    </div>
                                    <textarea
                                        className="simpleInput"
                                        placeholder="Your Message"
                                        rows={12}
                                        name="message"
                                        defaultValue={""}
                                    />
                                    <div>
                                        <span className="small-tag me-2"> 6 + 12 </span>
                                        <input
                                            type="text"
                                            className="simpleInput"
                                            placeholder="Result?"
                                            style={{ width: 120 }}
                                        />
                                    </div>
                                    <button type="submit" className="primary-btn">
                                        {" "}
                                        Send Message{" "}
                                    </button>
                                </form>
                                <div className="contactUsBorder" />
                                <div className="contactUsBackground" />
                                <div className="contactUsDots">
                                    <svg
                                        width={200}
                                        height={200}
                                        viewBox="0 0 230 230"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <ellipse cx="5.00003" cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={5} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={5} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={5} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={5} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={5} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={5} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={25} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={25} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={25} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={25} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={25} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={25} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={45} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={45} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={45} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={45} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={45} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={45} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={65} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={65} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={65} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={65} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={65} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={65} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={85} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={85} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={85} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={85} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={85} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={85} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="5.00003" cy={105} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="24.9998" cy={105} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="44.9983" cy={105} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="65.0006" cy={105} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="85.0004" cy={105} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="105.001" cy={105} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="125.001" cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="145.002" cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="165.001" cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={185} cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="205.003" cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={225} cy={125} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="125.001" cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="145.002" cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="165.001" cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={185} cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="205.003" cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={225} cy={145} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="125.001" cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="145.002" cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="165.001" cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={185} cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="205.003" cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={225} cy={165} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="125.001" cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="145.002" cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="165.001" cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={185} cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="205.003" cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={225} cy={185} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="125.001" cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="145.002" cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="165.001" cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={185} cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="205.003" cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={225} cy={205} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="125.001" cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="145.002" cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="165.001" cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={185} cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx="205.003" cy={225} rx="5.00003" ry={5} fill="#fff" />
                                        <ellipse cx={225} cy={225} rx="5.00003" ry={5} fill="#fff" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contactUsCardFormSpace" />
                </div>
            </div>
            <AwardWinning style={{ backgroundColor: "#fff", marginTop: "50px" }} />
            <HelpCentre />
            <Container>
                <Row>
                    <Col>
                    <div className="or-break text-center mb-sm-4 ">Or talk to us</div>
            <div className="container wrapper">
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <div className="contact_us_option">
                            <Link    to="tel:  +971 4 29 59 630">
                                <svg
                                    className="me-1"
                                    fill="currentColor"
                                    height="1em"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 256 256"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M146.2,46.45a6,6,0,0,1,7.35-4.25,84.24,84.24,0,0,1,60.25,60.25,6,6,0,0,1-4.25,7.35,5.94,5.94,0,0,1-1.55.2,6,6,0,0,1-5.8-4.45A72.34,72.34,0,0,0,150.45,53.8,6,6,0,0,1,146.2,46.45ZM142.45,85.8C157,89.68,166.32,99,170.2,113.55A6,6,0,0,0,176,118a5.94,5.94,0,0,0,1.55-.2,6,6,0,0,0,4.25-7.35c-5-18.71-17.54-31.25-36.25-36.25a6,6,0,1,0-3.1,11.6Zm79.44,97A54.25,54.25,0,0,1,168,230C89.7,230,26,166.3,26,88A54.25,54.25,0,0,1,73.17,34.11,14,14,0,0,1,87.73,42.5l21.1,47.1a14,14,0,0,1-1.12,13.28,6,6,0,0,1-.42.57L86.22,128.51a1.89,1.89,0,0,0,0,1.67c7.66,15.68,24.1,32,40,39.65a1.88,1.88,0,0,0,1.68-.06l24.69-21a4.81,4.81,0,0,1,.56-.42,14,14,0,0,1,13.28-1.22l47.24,21.17A14,14,0,0,1,221.89,182.83ZM210,181.32a2,2,0,0,0-1.21-2l-47.25-21.17a1.92,1.92,0,0,0-1.6.1l-24.68,21c-.18.15-.37.29-.56.42a14,14,0,0,1-13.77,1c-18.36-8.87-36.66-27-45.53-45.19a14,14,0,0,1,.91-13.73,4.73,4.73,0,0,1,.43-.57L97.79,96.09a2,2,0,0,0,0-1.67L76.74,47.31A2,2,0,0,0,74.9,46h-.23A42.24,42.24,0,0,0,38,88c0,71.68,58.32,130,130,130A42.24,42.24,0,0,0,210,181.32Z" />
                                </svg>
                                +971 4 29 59 630
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact_us_option">
                            <Link to="tel:  +971 4 29 59 630">
                                <svg
                                    className=" "
                                    fill="currentColor"
                                    height="1em"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 256 256"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M142,140a10,10,0,1,1-10-10A10,10,0,0,1,142,140Zm46-10a10,10,0,1,0,10,10A10,10,0,0,0,188,130Zm49.42,82A14,14,0,0,1,220,229.42l-25.46-7.49A78,78,0,0,1,87.84,181.58a77,77,0,0,1-26.42-7.65L36,181.42A14,14,0,0,1,18.58,164l7.49-25.46A78,78,0,1,1,168.19,74.43a78,78,0,0,1,61.74,112.15ZM83.86,168.87a77.92,77.92,0,0,1,71-94.68,66,66,0,1,0-117.1,60.94,6.05,6.05,0,0,1,.47,4.53l-8.17,27.76a2,2,0,0,0,2.48,2.49l27.77-8.17a6.06,6.06,0,0,1,4.53.47A65.2,65.2,0,0,0,83.86,168.87Zm134.35,14.26a66,66,0,1,0-27.08,27.08,6.06,6.06,0,0,1,4.53-.47l27.77,8.17a2,2,0,0,0,2.48-2.48l-8.17-27.77A6.05,6.05,0,0,1,218.21,183.13Z" />
                                </svg>
                                Chat With Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
                    </Col>
                </Row>
            </Container>

            <OurPartners />
            <GetOffersDeals />

            <Footer />
        </div>
    );
};

export default Contact;