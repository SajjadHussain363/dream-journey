import React from 'react';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import HeaderCarousel from '../../components/HeaderCarousel/HeaderCarousel';
import SimpleSlider from '../../components/UAEExplorerCarousel/ProductSlider';
import UAEDestinationSlider from '../../components/UAEDestinationSlider/UAEDestinationSlider';
import GatwaySection from '../../components/GatwaySection/GatwaySection';
import { Link } from 'react-router-dom'; // ✅ Corrected import
import { Container, Row, Col } from 'react-bootstrap';
import Activities from '../../components/Activities/Activities';
import AwardWinning from '../../components/AwardWinning/AwardWinning';
import DJMoments from '../../components/DJMoments/DJMoments';
import TravelBlog from '../../components/Blog/BlogSlider';
import HelpCentre from '../../components/HelpCentre/HelpCentre';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';

function Home() {
  return (
    <>
      <HeaderCarousel />

      {/* UAE Destination Section */}
      <section className="UAEDestinationSectionWrapper">
        <Container fluid className="UAEDestinationsWrapper">
          <Row className="PaddingAll">
            <Col>
              <div className="heading_border">
                <h1 className="heading-primary">Explore UAE Destinations</h1>
              </div>
              <p className="paragraph-primary-sm">Discover, Explore, Experience - Unveiling the Exclusive Wonders!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <UAEDestinationSlider />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Popular Experiences Section */}
      <section className="ExplorePopularExperiencesWrapper">
        <Container fluid className="UAEDestinationsWrapper">
          <Row className="PaddingAll">
            <Col md={8}>
              <div className="heading_border tagsHeadingSettings">
                <h1 className="headings-primary">Explore Popular Experiences</h1>
              </div>
            </Col>
            <Col md={4}>
              {/* <div className="align-items-end text-end"> */}
              <div className="align-items-end text-end d-flex justify-content-end justify-content-md-end justify-content-center mt-3 mt-md-0">

                <button className="btn btn-custom">View All</button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="PaddingAll">
              <p className="paragraph-primary-sm">
                The United Arab Emirates (UAE) offers a diverse range of experiences, blending modern marvels with rich cultural heritage. Here's a curated list of some of the best experiences to consider during your visit:
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="PaddingAll">
              <div className="PopularExperiencesTagesWraper">
                <Link to="#" className="btn btn-custom">Day Trips</Link>
                <Link to="#" className="btn btn-custom">Sand & Desert</Link>
                <Link to="#" className="btn btn-custom">Half-day Tours</Link>
                <Link to="#" className="btn btn-custom">Full-day Tours</Link>
                <Link to="#" className="btn btn-custom">Water Activities</Link>
                <Link to="#" className="btn btn-custom">Sightseeing Tours</Link>
                <Link to="#" className="btn btn-custom">Nature & Wildlife</Link>
                <Link to="#" className="btn btn-custom">Private Tours</Link>
                <Link to="#" className="btn btn-custom">Family Friendly</Link>
                <Link to="#" className="btn btn-custom">Theme Parks</Link>
                <Link to="#" className="btn btn-custom">Private & Luxury</Link>
                <Link to="#" className="btn btn-custom">City Tours</Link>
                <Link to="#" className="btn btn-custom">Safaris</Link>
                <Link to="#" className="btn btn-custom">Observation Deck</Link>
                <Link to="#" className="btn btn-custom">Museums</Link>
                <Link to="#" className="btn btn-custom">Culture & Heritage</Link>
                <Link to="#" className="btn btn-custom">Beach & Cruises</Link>
                <Link to="#" className="btn btn-custom">Extreme Sports</Link>
              </div>
              <hr className="mt-4" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Slider Section */}
    <SimpleSlider />
      
      <GatwaySection />
      <Activities />
      <AwardWinning />
      <TravelBlog />
      <DJMoments />
      <HelpCentre />
      <GetOffersDeals />
     

      <Footer />
    </>
  );
}

export default Home;
