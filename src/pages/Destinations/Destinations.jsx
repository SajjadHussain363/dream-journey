import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import "./Destinations.css";
import { useParams } from 'react-router-dom';
import { GET } from '../../apicController/apiController';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Destinations = () => {
    const { cityName } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);  // Initialize as empty array instead of undefined
    const [error, setError] = useState(null);

    useEffect(() => {
        if (cityName) {
            getCityData();
        }
    }, [cityName]);

    const getCityData = async () => {
        try {
            setLoading(true);
            const response = await GET(`products?point_of_interest=${cityName}`);
            
            // Check if response has data and it's an array
            if (response && response.data && Array.isArray(response.data)) {
                setData(response.data);
            } else {
                // Handle case where data isn't available or isn't an array
                setData([]);
                setError("No destinations found for this city");
            }
        } catch (err) {
            setError("Error loading destinations: " + (err.message || "Unknown error"));
            setData([]);  // Reset data on error
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <section className="DestinationsSectionWrapper">
                <Container fluid className="asf text-center">
                    <Row>
                        <Col>
                            <h1>Destinations</h1>
                            <p>Discover the UAE's most popular destinations, from the bustling streets of Dubai to the serene beaches of Abu Dhabi.</p>
                        </Col>
                    </Row>
                </Container>
                
                <Container className="mt-4">
                    {loading ? (
                        <Row>
                            <Col>
                                <Skeleton count={5} height={100} className="mb-3" />
                            </Col>
                        </Row>
                    ) : error ? (
                        <Row>
                            <Col className="text-center">
                                <div className="alert alert-info">
                                    {error}
                                </div>
                            </Col>
                        </Row>
                    ) : data && data.length > 0 ? (
                        <Row>
                            {data.map((item, index) => (
                                <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                                    <div className="destination-card">
                                        {item.name}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <Row>
                            <Col className="text-center">
                                <div className="alert alert-info">
                                    No destinations found for {cityName}
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Destinations;