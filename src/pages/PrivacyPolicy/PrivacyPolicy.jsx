import React from 'react';
import "./PrivacyPolicy.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div  className="Bgclrs">
            <Header />
            <section>
                <div className="container">
                    <div className="spaceForHeader" />
                    <div className="cs_breadcrumb">
                        <Link className="breadcrumb_parent" to="/">
                            Home
                        </Link>{" "}
                        - <span className="breadcrumb_child">Privacy Policy</span>
                    </div>
                    <div className="cart-wrapper">
                        <div className="termsOfUse">
                            <h6 className="heading-primary-sm">Privacy Policy</h6>
                            <p className="body-text-XS mb-0 pt-1">
                                Dream Journey Tourism LLC (hereinafter referred to as “Company”) takes
                                the protection of your personal data very seriously and endeavours to be
                                transparent in its operations. This Privacy Policy informs you about
                                how, to what extent and for what purposes the Company processes the
                                personal data of its Users using the Website.
                            </p>
                        </div>
                        <div className="termsList pt-0">
                            <div>
                                <h6 className="special-tags">1. Privacy</h6>
                                <p className="body-text-XS">
                                    When Users visit the Website, the Company collects specific technical
                                    data such as, but not limited to, location, demographic details,
                                    device type, etc. for statistical purposes. This data will be
                                    evaluated anonymously to improve the usage and User’s experience of
                                    the Website. In cases where the transfer of data happens to the
                                    Company even without prior registration, Company can evaluate the data
                                    anonymously for statistical purposes. <br />
                                    <br /> When Users register on the Website, you are transferring
                                    personal data such as name, address, date of birth, phone number,
                                    e-mail address and information about interested or booked services to
                                    us. The aforementioned data will be securely stored.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">2. Payment</h6>
                                <p className="body-text-XS">
                                    The payment on the Website will be processed through PayTabs, and all
                                    transactions shall be subject to the Terms of Use
                                    (https://www.paytabs.com/en/terms-of-use) and Privacy Policy
                                    (https://www.paytabs.com/en/privacy-policy) of PayTabs. The Company
                                    does not store any payment-related information of its Users.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">3. Cookies</h6>
                                <p className="body-text-XS">
                                    Company uses cookies to collect information about Users and use this
                                    information to improve upon the browsing experience of the Website.
                                    Users can specify and modify how their browser accept cookies. If
                                    Users choose to disable the cookies, they can still visit the Website;
                                    however, it is possible that certain functions or features cannot be
                                    used to the same extent or that your visit will not be as convenient.{" "}
                                    <br /> <br /> Data collected through cookies or any other means
                                    associated with the Website will be used for contract settlement,
                                    improvement of Website’s functions and its presentation, the design of
                                    pages, as well as for analytics, marketing, and consulting purposes.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">4. E-mail Newsletter</h6>
                                <p className="body-text-XS">
                                    By subscribing to the Company’s e-mail newsletter (hereinafter
                                    referred to as “Subscribers”), the Company is provided with the
                                    permission to allow it to send you regular updates relating to the
                                    promotions of Company activities and other announcements
                                    electronically at the Subscriber’s designated e-mail address.
                                    Subscribers can, at any time, unsubscribe to the e-mail newsletter via
                                    the link included in every newsletter.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">5. Amendments to the Privacy Policy</h6>
                                <p className="body-text-XS">
                                    The Company reserves the right to amend the Privacy Policy at any
                                    time, for any reason, without prior notice to its Users, other than
                                    posting of the amended Privacy Policy on its Website, or, if the Users
                                    have provided the Company with their email address, communicating with
                                    them to notify them of changes and applicability of changes to the
                                    Privacy Policy. Company expects Users to regularly refer to the
                                    Privacy Policy to make sure they are familiar with the applicable
                                    Privacy Policy. Any further use of the Website following such
                                    amendments implies that Users consent to the amendment and the
                                    relevant updated version of the Privacy Policy
                                </p>
                            </div>
                        </div>
                        <div className="warning-text text-dark">
                            (Privacy Policy was last updated on 10.4.19)
                        </div>
                    </div>
                </div>
            </section>
            <GetOffersDeals />
            <Footer />
        </div>
    );
};
export default PrivacyPolicy;
