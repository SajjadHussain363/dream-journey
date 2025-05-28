import React, { useState, useEffect } from "react";
import { GET } from "../../apicController/apiController";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Columns, Grid } from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const AddCheckout = () => {
    const [fetchingData, setFetchingData] = useState(true);
    const [allProducts, setAllProducts] = useState();

    useEffect(()=>{
        getOtherProducts();
    },[]);


    const getOtherProducts = async ()=>{
        setFetchingData(true);

        const response = await GET("products");
        setAllProducts(response.data);
        setFetchingData(false);

    };





    const otherProducts= ()=>{

        return <div>
                {fetchingData ? <>Loader aithy laaao</> : <div>{allProducts.map((product, index)=>{
                    return <div key = {index}>
                        
                        <Link to={`/top-pick-details/${product.uid}`} className="Products_card_title text-decoration-none">
                                                        <h3 className="card-title mt-2">{product.name}</h3>
                                                    </Link>
                        
                        </div>
                })} </div>}



        </div>


    };




    return (
        <div className="mt-5">
            <Header/>


            <div className="mt-5">&nbsp;</div>

            <div className="mt-5">&nbsp;</div>
            <div className="mt-5">&nbsp;</div>
            <h1>AddCheckout</h1>

            <Container>
                <Row>
                    <Col md="6">{otherProducts()}</Col>
                    <Col md= "6">two</Col>
                    </Row>

            </Container>

            <div className="mt-5"></div>
            <Footer/>
        </div>
    );
};


export default AddCheckout;