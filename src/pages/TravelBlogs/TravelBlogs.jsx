import React, { useEffect, useState } from 'react';
import './TravelBlogs.css';
import BlogList from '../../components/Blog/BlogList';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from 'react-router-dom';
import AwardWinning from '../../components/AwardWinning/AwardWinning';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';
import ExploreOurTheme from '../../components/ExploreOurTheme/ExploreOurTheme';
import HelpCentre from '../../components/HelpCentre/HelpCentre';
import DJMoments from '../../components/DJMoments/DJMoments';
import { Container, Row, Col } from 'react-bootstrap';
import { GET } from '../../apicController/apiController';
// fallback image
import Blog3 from '../../assets/images/blog/dxb1.webp';
import SkeletonComponent from '../../components/Skeleton/Skeleton';

const Blog = () => {
    const [featuredBlog, setFeaturedBlog] = useState(null);
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const result = await GET("blogs", {}, {
                    Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
                    Accept: "application/json",
                });

                if (result && Array.isArray(result.data)) {
                    setFeaturedBlog(result.data[0]); // Featured blog
                    setRecentBlogs(result.data.slice(1, 4)); // Next 3 blogs
                }
                setLoading(false);
            } catch (error) {
                console.error("Failed to load blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    

    return (
        <>
            <Header />
            {loading ? <> <div className='mt-5' style={{marginTop:"100px"}}><SkeletonComponent/> </div></> : <>
                <section className='Travel_Blog_wrapper'>
                <div className="spaceForHeader bg-Grayscale-Hint_text">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="blog-herosection text-center">
                                    <div>
                                        <h1 className="xl_body_text">Travel Blog</h1>
                                        <p className="medium-text text-light">UAE’s best tour operator trusted by over 150,000 customers.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="container wrapper">
                    <div className="row gx-0 blogSection">
                        <div className="col-lg-6 position-relative">
                            <img src={featuredBlog?.featured_image} alt={featuredBlog?.name} className="w-100 h-100" />
                            <div className="travel_trip">{featuredBlog.category}</div>
                        </div>
                        <div className="col-lg-6 homepage-headings blog-travelTrip">
                            <div className="heading-primary-borderLess">{featuredBlog.name}</div>
                            <p>{featuredBlog.description.slice(0, 200)}...</p>
                            <div className="hover-text d-flex align-items-center">
                                <Link to={`/blogs/${featuredBlog.slug}`}>
                                    Read More{' '}
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic 3-column blog section */}
                    <div className="ThreeClms_wrapper">
                        <div className="row gy-4">
                            {recentBlogs.map((blog, index) => (
                                <div className="col-lg-4 col-md-6 col-12" key={index}>
                                    <div
                                        className="blogTravelTrip"
                                        style={{
                                            backgroundImage: `url(${blog.featured_image || Blog3})`,
                                            backgroundSize: 'cover',
                                            height: '500px'
                                        }}
                                    >
                                        <div className="blogTripContent">
                                            <div className="small-heading">{blog.name}</div>
                                            <div className="hover-text d-flex align-items-center">
                                                <Link to={`/blogs/${blog.slug}`}>
                                                    Read More &nbsp;
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="travel_trip">{blog.category || 'Travel Trip'}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='Latest_blog_Section'>
                    <Container>
                        <Row>
                            <BlogList />
                        </Row>
                    </Container>
                </div>

                <AwardWinning style={{ backgroundColor: "#fff", marginTop: "50px" }} className="AwardWinningFrBlgStyle" />
                <ExploreOurTheme />
                <HelpCentre />
                <DJMoments />
                <GetOffersDeals />

                <br />
                <br />
                <br />
                <br />
                <br />
            </section>
            </>}
            
            <Footer />
        </>
    );
};

export default Blog;
