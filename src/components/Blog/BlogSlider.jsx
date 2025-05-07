import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BlogSlider.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET } from "../../apicController/apiController";
import Blog1 from "../../assets/images/blog.png"; // fallback image

const BlogSlider  = () => {
  const sliderRef = useRef(null);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [disableArrows, setDisableArrows] = useState(false);

  const updateDeviceState = () => {
    const width = window.innerWidth;
    setIsMobile(width < 576);
    setIsTablet(width >= 576 && width < 992);
  };

  useEffect(() => {
    updateDeviceState();
    window.addEventListener("resize", updateDeviceState);
    return () => window.removeEventListener("resize", updateDeviceState);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await GET("blogs", {}, {
          Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
          Accept: "application/json",
        });

        if (result && Array.isArray(result.data)) {
          setBlogs(result.data);
          const visibleSlides = isMobile ? 1 : isTablet ? 2 : 3;
          setDisableArrows(result.data.length <= visibleSlides);
        } else {
          setError("No blog data found.");
        }
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [isMobile, isTablet]); // <-- added mobile, tablet in dependency so recalculate

  const settings = {
    infinite: true,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    centerMode: false,
    speed: 500,
    autoplay: true,
    arrows: false, // your arrows are outside
    slidesToScroll: 1,
  };

  const goToPrev = () => {
    if (!disableArrows) sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    if (!disableArrows) sliderRef.current?.slickNext();
  };

  return (
    <section className="travel-blog-section">
      <Container>
        <Row className="align-items-center mb-4 justify-content-between">
          <Col md={8}>
            <div className="section-heading">
              <h2 className="section-title">Travel Blog</h2>
              <p className="section-subtitle">
                Discover, Explore, Experience - Unveiling the Exclusive Wonders!
              </p>
            </div>
          </Col>
          <Col md={4} className="text-end">
            <div className="blog-arrows-container">
              <button className="blog-arrow" onClick={goToPrev} disabled={disableArrows}>
                <i className="bi bi-chevron-left"></i>
              </button>
              <button className="blog-arrow" onClick={goToNext} disabled={disableArrows}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </Col>
        </Row>

        <div className="blog-slider-wrapper">
          {loading ? (
            <p>Loading Blogs...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <Slider {...settings} ref={sliderRef}>
              {blogs.map((blog, index) => (
                <div key={index} className="blog-slide-item">
                  <div className="blog-post-card">
                    <img
                      src={blog.featured_image || Blog1}
                      alt={blog.name || "Blog"}
                      className="post-image"
                      style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    />
                    <div className="travelTip">Travel Tip</div>
                    <div className="post-content">
                      <h3 className="post-title">{blog.name || "No Title"}</h3>
                      <p className="post-excerpt">
                        {blog.description ? blog.description.slice(0, 100) + "..." : "No description available."}
                      </p>
                      <Link to={`/blogs/${blog.slug}`} className="post-category">
                        Read more <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogSlider;
