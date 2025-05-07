import React from 'react';
import './Tags.css';
import { Link } from 'react-router-dom';

const Tags = () => {
    return (
        <>
            <section className="ExplorePopularExperiencesWrapper">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="heading_border">
                                <h1 className="heading-primary">Explore Popular Experiences</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="align-items-end text-end d-flex justify-content-end justify-content-md-end justify-content-center mt-3 mt-md-0">
                               <Link to="#">
                                <button className="btn btn-custom">view all</button>
                               </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="paragraph-primary-sm mt-3">The United Arab Emirates (UAE) offers a diverse range of experiences, blending modern marvels with rich cultural heritage. Here's a curated list of some of the best experiences to consider during your visit:</p>
                        </div>
                    </div>
                    <div className="mt-4 row">
                        <div className="col">
                            <div className="PopularExperiencesTagesWraper">
                                <Link to="#" className="btn btn-custom" data-discover="true">Day Trips</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Sand &amp; Desert</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Half-day Tours</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Full-day Tours</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Water Activities</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Sightseeing Tours</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Nature &amp; Wildlife</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Private Tours</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Family Friendly</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Theme Parks</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Private &amp; Luxury</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">City Tours</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Safaris</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Observation Deck</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Museums</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Culture &amp; Heritage</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Beach &amp; Cruises</Link>
                                <Link to="#" className="btn btn-custom" data-discover="true">Extreme Sports</Link>
                            </div>
                            <hr className="mt-5" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Tags;