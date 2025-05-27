import React, { useState } from 'react';

import "./AllTTodoResultCards.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardimgHorizontal from '../../assets/images/cardimghr.png';


const AllTTodoResultCards = () => {

    const [selected, setSelected] = useState("Recommended");

    const handleSelect = (label) => {
        setSelected(label);
    };

       const handleLoadMore = () => {
        // Your logic to load more items here
        console.log("Load more clicked");
    };
    return (
        <>
            <section className="AllTTodoResultCardsWrapper">
                <Row>
                    <Col>
                        <div className="AllTTodoResultSortResult_Founded d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <div className="SortByInput"> <input type="text" placeholder="Sort by" /> <Link> <span><i className="bi bi-sliders"></i></span></Link></div>
                                <div className="dropdown recommendedDropdown">
                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {selected}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" to="/all-todo" onClick={() => handleSelect("Recommended 1")}>
                                                Recommended 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/all-todo" onClick={() => handleSelect("Recommended 2")}>
                                                Recommended 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/all-todo" onClick={() => handleSelect("Recommended 3")}>
                                                Recommended 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="FoundItemsRecords"><Link to="/all-todo">Found 91 items Out of 900</Link></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="AllTTodoResultCardsWrapper mt-5">
                            <div className="AllTTodoResultCardsinner mb-3" style={{ maxWidth: '100%' }}>
                                <Row className="no-gutters">
                                    <Col md={5}>
                                        <img src={CardimgHorizontal} className="img-fluid" alt="..." />
                                    </Col>
                                    <Col md={7}>
                                        <div className="cardBdyWrpper">
                                            <div className="d-flex justify-content-between">
                                                <h5 className="card-title">Desert Discovery Journey: Red Dunes Desert Safari & BBQ</h5>
                                                <span><i className="bi bi-heart WishHeartLike"></i></span>
                                            </div>
                                            <div className="Locationgeo d-flex">
                                                <span><i class="bi bi-geo-alt"></i></span> <span>Dubai</span> <span className="CatgryNtruWildlife">Nature & WildLife</span>
                                            </div>

                                            <div className="ReviewRatingCardWprCards  d-flex">
                                                <span className="ReviewRatingStar"><i class="bi bi-star-fill"></i>
                                                    New</span> &nbsp;  &nbsp;
                                                <span><i class="bi bi-clock"></i> 4 hours</span>
                                            </div>
                                            <div className="freeCancelation&Tour">
                                                <span><i class="bi bi-check-circle"></i> Free Cancelation</span> &nbsp;  &nbsp;
                                                <span><i class="bi bi-ticket-perforated"></i> Tour</span>
                                            </div>
                                            <div className="CardCuttingPrice mt-5">
                                                <span>From</span> <del>78.59</del>
                                            </div>
                                            <div className="comnCardPricewpr d-flex justify-content-between">
                                                <div><span className="OrignalPrice">AED 63.99 /</span> <span className="PersonRgroup">Person</span></div>
                                                <div>1 option available</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                
                <div className='ShowingResults text-center mt-3'>
                <div className="FoundItemsRecords"><Link to="/all-todo">Found 91 items Out of 900</Link></div>
                <div className="d-flex justify-content-center mt-4">
                    <Link to="#" onClick={handleLoadMore} className="LoadMoresClick px-4 py-2">
                        Load More
                    </Link>
                </div>

                </div>
                <hr />
                
            </section>
        </>
    )
}

export default AllTTodoResultCards