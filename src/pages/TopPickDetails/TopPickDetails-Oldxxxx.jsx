import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET } from '../../apicController/apiController';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';

import './TopPickDetails.css';
import SkeletonComponent from '../../components/Skeleton/Skeleton';

const TopPickDetails = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [product, setProducts] = useState();
    console.log(slug);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await GET(`products/details?product_uid=${slug}`);

                if (result && Array.isArray(result.data)) {
                    setProducts(result.data[0]);
                } else {
                    setError("No product data found.");
                }
            } catch (err) {
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return <div>
        <Header />

        <div className="TopPickDetails-section">
            {loading ?
                <>
                    <SkeletonComponent />
                </> :
                <Container>
                    <Row className='mt-5'>
                    <div class="container cs_breadcrub">
                        <a class="breadcrumb_parent" href="/">Home</a> - <span class="breadcrumb_parent">Experiences</span> - <span class="breadcrumb_parent">Sand &amp; Desert </span>- <span class="breadcrumb_child">{product.name}</span>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="blog-herosection">
                                <div>
                                    <div className='d-flex align-items-center justify-content-between mt-5 PriceHedings'>
                                    <h1>{product.name}</h1>
                                        <span className="cutPrice align-items-center d-flex "> <span>AED {product.price} &nbsp; </span> <del>AED {parseFloat(product.price) + 50} </del> / <small className='persns'>person</small> </span>
                                    </div>
                                    <div className='col-lg-4 col-12 blackBtn d-flex gap-sm-3 gap-1 justify-content-sm-start justify-content-center align-items-center order-lg-4 order-5'>
                                    <div><i class="bi bi-check-circle"></i> Free Cancellation : {product.free_cancellation ? "Yes" : "No"}</div> &nbsp;
                                    </div>
                                    <div className='col-xl-8 d-lg-flex gap-3 align-items-center justify-content-xl-end order-6 d-none'>
                                    <p>{product.average_rating} Reviews</p> &nbsp;
                                    <p>Reserve Now : {product.is_allow_pay_later ? "Pay Later" : "No"}</p> &nbsp;
                                    <button>Book Now</button>
                                    </div>
                                    <img src={product.product_image} alt="" width={"100%"} className='img-fluid mt-5' />
                                    
                                    <p>meta_tags = {product.meta_tags}</p>
                                    <p>{product.description}</p>
                                    <p>highlights = {product.highlights}</p>
                                    <p>short_description = {product.short_description}</p>
                                    <p>inclusions = {product.inclusions}</p>
                                    <p>exclusions = {product.exclusions}</p>
                                    <p>pickup_details = {product.pickup_details}</p>
                                   
                                    <p>duration = {product.duration}</p>
                                    <p>category = {product.category}</p>
                                    <p>theme = {product.theme}</p>
                                    <p>type = {product.type}</p>
                                   
                                    <p>is_new_product = {product.is_new_product}</p>
                                   
                                    <p>listing_highlight_display = {product.listing_highlight_display}</p>
                                    
                                    
                                    <p>availability = {product.availability}</p>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            }
        </div>
        <GetOffersDeals />
        <Footer />


    </div>;
}


export default TopPickDetails;