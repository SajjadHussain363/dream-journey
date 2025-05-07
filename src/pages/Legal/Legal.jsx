import React from 'react';
import "./Legal.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';
import { Link } from 'react-router-dom';

const Legal = () => {
    return (
        <div className="Bgclrs">
            <Header />
            <section>
                <div className="container">
                    <div className="spaceForHeader" />
                    <div className="cs_breadcrumb">
                        <Link className="breadcrumb_parent" to="/">
                            Home
                        </Link>{" "}
                        - <span className="breadcrumb_child">legal</span>
                    </div>
                    <div className="cart-wrapper">
                        <div className="termsOfUse">
                            <h6 className="heading-primary-sm">Legal Summary</h6>
                        </div>
                        <div className="legal">
                            <div className="legalItem">
                                <div className="medium-tag">Website Host</div>
                                <div className="body-sm-text">Dreamjourney.ae</div>
                            </div>
                            <div className="legalItem">
                                <div className="medium-tag">Name of the Company</div>
                                <div className="body-sm-text">Dream Journey Tourism LLC</div>
                            </div>
                            <div className="legalItem">
                                <div className="medium-tag">Management</div>
                                <div className="body-sm-text">Dreamjourney.ae</div>
                            </div>
                            <div className="legalItem">
                                <div className="medium-tag">Website Host</div>
                                <div className="body-sm-text">
                                    Managing Director, Syed Hasnain Haider
                                </div>
                            </div>
                            <div className="legalItem">
                                <div className="medium-tag">Address</div>
                                <div className="body-sm-text">
                                    Dubai, Airport Road, UAE Enterprise Building, Office #304
                                </div>
                            </div>
                            <div className="legalItem">
                                <div className="medium-tag">Contact Information</div>
                                <div className="body-sm-text">+971 4 29 59 630</div>
                            </div>
                            <div className="legalItem">
                                <div className="medium-tag">Company Registration</div>
                                <div className="body-sm-text">Dubai, UAE</div>
                            </div>
                            <div className="legalItem">
                                <div className="medium-tag">VAT Registration No.</div>
                                <div className="body-sm-text">00335782700003</div>
                            </div>
                        </div>
                    </div>
                </div>;


            </section>
            <GetOffersDeals />
            <Footer />
        </div>
    );
};
export default Legal;
