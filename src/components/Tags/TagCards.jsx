import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './TagCards.css';

const TagCard = ({ image, title, description }) => {
    return (
        <div className="TagsBoxesWrapper">``
            <div className="TagsBoxes">
                <Card className="p-3 shadow-sm border-0">
                    <Row className="g-0 align-items-center flex-column flex-sm-row">
                        <Col xs={12} sm={4} className="mb-3 mb-sm-0">
                            <img src={image} className="img-fluid rounded-start w-100 h-100 object-fit-cover" alt={title} />
                        </Col>
                        <Col xs={12} sm={8} className="TagsBoxesWrapperCardInner">
                            <Card.Body>
                                <h3 className="card-title">{title}</h3>
                                <p className="card-text">{description}</p>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    );
};
{/* <Col md={4}>
                        <div className="TagsBoxesWrapper">
                            <div className="TagsBoxes">
                                <div className="card p-3 shadow-sm border-0">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-md-4">
                                            <img src={Tag1Pic} className="img-fluid rounded-start w-100" alt="Example Image" />
                                        </div>
                                        <div className="col-md-8 TagsBoxesWrapperCardInner">
                                            <div className="card-body">
                                                <h3 className="card-title">Activities</h3>
                                                <p className="card-text">Dive into adrenaline-pumping adventures and unforgettable local experiences.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="TagsBoxesWrapper">
                            <div className="TagsBoxes">
                                <div className="card p-3 shadow-sm border-0">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-md-4">
                                            <img src={Tag2Pic} className="img-fluid rounded-start w-100" alt="Example Image" />
                                        </div>
                                        <div className="col-md-8 TagsBoxesWrapperCardInner">
                                            <div className="card-body">
                                                <h3 className="card-title">Attractions</h3>
                                                <p className="card-text">Discover iconic landmarks and hidden gems that capture the spirit of the UAE.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="TagsBoxesWrapper">
                            <div className="TagsBoxes">
                                <div className="card p-3 shadow-sm border-0">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-md-4">
                                            <img src={Tag3Pic} className="img-fluid rounded-start w-100" alt="Example Image" />
                                        </div>
                                        <div className="col-md-8 TagsBoxesWrapperCardInner">
                                            <div className="card-body">
                                                <h3 className="card-title">Tours</h3>
                                                <p className="card-text">Embark on immersive journeys that reveal the heart of every destination.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col> */}

export default TagCard;
