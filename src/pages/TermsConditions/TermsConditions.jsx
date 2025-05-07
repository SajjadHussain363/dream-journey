import React from 'react';
import "./TermsConditions.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
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
                        - <span className="breadcrumb_child">Terms of Use</span>
                    </div>
                    <div className="cart-wrapper">
                        <div className="termsOfUse">
                            <h6 className="heading-primary-sm">Term of Use</h6>
                            <p className="body-text-XS mb-0 pt-1">
                                General Terms of Use of Dream Journey Tourism LLC, Dubai, UAE.
                            </p>
                        </div>
                        <h6 className="special-tags">Introduction</h6>
                        <p className="body-text-XS">
                            Dream Journey Tourism LLC is an inbound tour operator providing a
                            comprehensive bouquet of travel-related services catering to both leisure
                            and business travellers within the United Arab Emirates.
                        </p>
                        <div className="termsList">
                            <div>
                                <h6 className="special-tags">1. Application of the Terms of Use</h6>
                                <p className="body-text-XS">
                                    By visiting http://dreamjourney.ae/ (hereinafter referred to as
                                    “Website”), Visitors (hereinafter referred to as “Users”) accept these
                                    Terms of Use in entirety and as per the most recent updated version.
                                    Users of the Website may continue to use the Website, or any part of
                                    it implies that they have read and understood the Terms of Use and
                                    agree always to be bound by all parts of the Terms of Use. <br />
                                    <br /> Dream Journey Tourism LLC (hereinafter referred to as
                                    “Company”) reserves the right to change the content, structure,
                                    functions, and other features of the Website, including addition or
                                    deletion of new functions, or partially or fully suspending existing
                                    content and functions either temporarily or permanently, as well as
                                    attaching selected functions subject to the fulfilments of certain
                                    conditions, at any time without prior notice. Company reserves the
                                    right to block access partially or wholly to the Website for
                                    particular Users.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">2. No Warranty</h6>
                                <p className="body-text-XS">
                                    The information on this Website is purely for general information
                                    purposes only. Information on this Website does not constitute an
                                    offer binding to us. The Company tries to ensure that the information
                                    on or through the Website is accurate, it does not provide any
                                    warranties, express or implied, in relation to its correctness,
                                    completeness, current, reliability, suitability for any purpose or
                                    otherwise (including for any information provided by third-parties).
                                    Company may change, add, or remove information on the Website and its
                                    structure and functions at any time at its sole discretion, without
                                    explicitly informing of any such change, and without eliminating
                                    outdated information or characterising it as such. Company does not
                                    provide any warranties, express or implied, in relation to the
                                    availability of the Website or its functions, that the Website is free
                                    from defects, or that the Website and the infrastructure on which it
                                    runs is free from viruses and other harmful software. Moreover, the
                                    Company does not guarantee that information available on the Website
                                    has not been altered through technical defects or by unauthorised
                                    third-parties.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">3. Limitations of Liability</h6>
                                <p className="body-text-XS">
                                    Company strives to keep the Website up-to-date. Notwithstanding, the
                                    Company excludes its liability, and that of its agents and independent
                                    contractors, and its and their employees and officers, and its
                                    sub-agents or distribution partners for the correctness and timeliness
                                    of the information displayed on the Website. Users are using or
                                    refraining from the use of the information at their own
                                    responsibility. Company excludes liability for damages relating to
                                    accessing (or not being able to access) or using the Website including
                                    all the therein contained information and data.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">4. Copyright</h6>
                                <p className="body-text-XS">
                                    The entire content of the Website is protected by the applicable
                                    copyright and/or any other intellectual property rights laws and
                                    regulations. Names, titles, logos, texts, pictures, designs, and so
                                    on, may not be copied, modified, transferred, reproduced, and so on,
                                    for any commercial or non-personal purposes without prior written
                                    consent.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">
                                    5. Third-party Content and Links to other Websites
                                </h6>
                                <p className="body-text-XS">
                                    Company does not assume any responsibility for third-party content
                                    (including any activities available for booking requests, and
                                    information relating to such activities) that may be available through
                                    the Website, and for content linked to the Website or which are linked
                                    from it or referred to. Company does not recommend or endorse such
                                    content or conduct of these Websites and will not have any liability
                                    relating to it. Users are recommended to read the policies of relevant
                                    Websites and review how these policies will affect their experience or
                                    process personally identifiable data relating to Users. <br /> <br />{" "}
                                    Under certain circumstances, the Company is obliged to pass on or make
                                    specific information available to authorities for the smooth
                                    functioning of the Website. The circumstances include the transfer of
                                    necessary data for payment processing to be provided to an external
                                    payment provider and when signing up for the e-mail newsletter, the
                                    data will be transferred to an external e-mail marketing service
                                    provider. Company reserves the right to pass on the relevant
                                    information to third-parties, authorities, and any other external
                                    legal entities as required to do so to ward off claims and demands of
                                    all kinds.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">6. Self-responsibility of Insurance</h6>
                                <p className="body-text-XS">
                                    The price quoted for the services on the Website does not provide for
                                    insurance for Users in any form. Users are responsible for providing
                                    sufficient insurance protection. The requirement for insurance
                                    coverage is subject to the nature of the activity booked.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">7. Amendments to the Terms of Use</h6>
                                <p className="body-text-XS">
                                    The Company may amend these Terms of Use at any time and with
                                    immediate effect. If amendments are made to the Terms of Use, they
                                    apply as on the date of their publication on the Website. Company
                                    expects Users to regularly refer to the Terms of Use to make sure they
                                    are familiar with the applicable Terms of Use. Any further use of the
                                    Website following such amendments implies that Users consent to the
                                    amendment and the relevant updated version of the Terms of Use.
                                </p>
                            </div>
                            <div>
                                <h6 className="special-tags">8. Applicable Law and Jurisdiction</h6>
                                <p className="body-text-XS">
                                    The use of the Website is subject to the laws and regulations
                                    governing the Emirate of Dubai, United Arab Emirates. Any dispute
                                    arising between the Website and the Users will be subject to legal
                                    proceedings as conducted by the Courts of Dubai, United Arab Emirates.
                                </p>
                            </div>
                        </div>
                        <div className="warning-text text-dark">
                            (Terms of Use were last updated on 10.4.19)
                        </div>
                    </div>
                </div>;

            </section>
            <GetOffersDeals />
            <Footer />
        </div>
    );
};
export default TermsConditions;
