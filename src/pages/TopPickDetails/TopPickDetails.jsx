import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET } from '../../apicController/apiController';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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
            <Header/>
            {loading ? <>SKeleton</> : <div className='mt-5 py-5'>{product.name}</div>}
            <Footer/>


    </div>;
}


export default TopPickDetails;