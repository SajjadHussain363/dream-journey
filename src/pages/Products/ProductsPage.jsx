import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./Products.css";
import ProHeroSection from "../../assets/images/ProHeroSection.png";
import { Link } from "react-router-dom";
import ProductsSearchByFilter from "../../components/Products/ProductsSearchByFilter";
import ProductsCardAllTours from "../../components/Products/ProductsCardAllTours";
const ProductsPage = () => {

   

    return (
        <>
            <Header />
            <section>
            <div className="DJ_Products_HeroWrapper">
                <img src={ProHeroSection} alt="ProHeroSection" className="img-fluid DJ_Products_Hero" />
                <div className="DJ_Products_Heading text-center">
                    <h1>Products</h1>
                    <p>Wandering and Wondering</p>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="Products_Breadcrumb mt-3">
                            <Link>Home - <span>Experiences</span></Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                    {/* <div>Search By Filter  </div> */}
                    <ProductsSearchByFilter />
                    </Col>
                    <Col lg={8}>
                    <div className="AllTours_Heading">All Tours  </div>
                    <ProductsCardAllTours />
                    </Col>
                </Row>
            </Container>
            </section>
            <br />
            <br />
            <br />
            <Footer />
        </>
    );
};

export default ProductsPage;