import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./ThingsToDo.css";
import { Link } from "react-router-dom";
import HeroSectionExp from "../../assets/images/ThingsToDoHeroSection.png";
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';
import AllTTodoResultCards from '../../components/AllThingsTodoCards/AllTTodoResultCards';
import FilterAllThingsTodo from '../../components/AllThingsTodoCards/FilterAllThingsTodo';
import DJMoments from '../../components/DJMoments/DJMoments';

const ThingsToDo = () => {

    return (
        <>
            <Header />
            <section>
                <div className="ThingsToDoHeroWrapper">
                    <img src={HeroSectionExp} alt="HeroSectionExp" className="img-fluid ThingsToDoHero" />
                    <div className="ThingsToDoHeading">
                        <h1>Things to do in <br /> United Arab Emirates</h1>
                    </div>
                </div>
                <Container className="mt-3">
                    <Row>
                        <Col>
                            <div className="ThingsToDobreadcrumbs">
                                <p><Link to="/" className="TtDOHomeBcrums">Home</Link> - <Link to="/" className="TtDOUAES">United Arab Emirates</Link> - <Link to="/" className="TtDO">Things to do</Link></p>
                            </div>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="ThingsToDoWrapperTags">
                                <div className="PopularExperiencesTagesWraper">
                                    <Link to="#" className="btn btn-custom" data-discover="true">Safaris</Link>
                                    <Link to="#" className="btn btn-custom" data-discover="true">Yacht Cruises</Link>
                                    <Link to="#" className="btn btn-custom" data-discover="true">Day Trips</Link>
                                    <Link to="#" className="btn btn-custom" data-discover="true">Adventure</Link>
                                    <Link to="#" className="btn btn-custom" data-discover="true">Couple</Link>
                                    <Link to="#" className="btn btn-custom" data-discover="true">4WD Trips</Link>
                                    <Link to="#" className="btn btn-custom" data-discover="true">Private Tours</Link>
                                    <Link to="#" className="btn btn-custom" data-discover="true">Sightseeing Tours</Link>
                                    <Link to="#" className="btn btn-custom" data-discover="true">Theme Parks</Link>
                                    <Link to="#" className="btn btn-custom" data-discover="true">Indoor Attractions</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={4}>
                            <div className="AllThingToDoWrapper">
                                <FilterAllThingsTodo />
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="AllThingToDoHeading">
                                <h2>All Things To Do</h2>
                            </div>
                            <div>
                                <AllTTodoResultCards />
                                <div className="PopularExperiencesTagesWraper mt-5 mb-5">
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Theme Parks</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Private & Luxury</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">City Tours</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Safaris</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Observation Deck</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Museums</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Culture & Heritage</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Beach & Cruises</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Extreme Sports</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Day Trips</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Sand & Desert</a>
                                    <a className="btn btn-custom" data-discover="true" href="/all-todo">Half-day Tours</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <DJMoments style={{backgroundColor: "#ffffff"}} />
            </section>
            <GetOffersDeals />

            <Footer />


        </>
    )
}

export default ThingsToDo;