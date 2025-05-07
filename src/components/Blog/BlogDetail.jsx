import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BlogSlider.css";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET } from "../../apicController/apiController";
import Blog1 from "../../assets/images/blog.png"; // fallback image
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(slug);
    if (slug) {
      getBlogData();
    }
  }, [slug]);

  const getBlogData = async () => {

    try {
      setLoading(true);
      // Fix the API endpoint URL format
      const response = await GET(`blogs?slug=${slug}`);
      
      if (response && response.data && response.data.length > 0) {
        // Find the blog with matching slug
        const foundBlog = response.data.find(item => item.slug === slug);
        
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError('Blog not found');
        }
      } else {
        setError('No blog data found');
      }
    } catch (err) {
      setError('Error fetching blog: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  // Function to safely render HTML content
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  // Loading state UI
  const renderLoadingState = () => {
    return (
      <>
        <Container>
          <Row className="mt-5">
            <Col lg={12} className="text-center mb-4">
              <Skeleton height={50} width="60%" className="mb-3" />
              <Skeleton height={20} width="30%" className="mb-3" />
            </Col>
            <Col lg={12} className="mb-4">
              <Skeleton height={400} className="mb-3" />
            </Col>
            <Col lg={12}>
              <Skeleton count={5} height={20} className="mb-2" />
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  // Error state UI
  const renderErrorState = () => {
    // zaroori comment add kiey
    return (
      <Container>
        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="alert alert-danger">
              <h4>Error Loading Blog</h4>
              <p>{error}</p>
              <Link to="/blog" className="btn btn-outline-primary mt-3">
                Back to Blogs
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  // Blog content UI
  const renderBlogContent = () => {
    if (!blog) return null;
    
    return (
      <Container>
        <Row className="mt-5">
          <Col lg={12} className="mb-4 text-center">
            <h1 className="blog-title">{blog.name}</h1>
            <div className="blog-meta mb-3">
              <span className="me-3"><i className="far fa-clock me-1"></i> {blog.timestamp}</span>
              <span><i className="far fa-folder me-1"></i> {blog.category}</span>
            </div>
          </Col>
          
          {/* Banner Image */}
          {blog.banner_image && (
            <Col lg={12} className="mb-4">
              <div className="blog-banner">
                <img 
                  src={blog.banner_image} 
                  alt={blog.name} 
                  className="img-fluid rounded w-100"
                  onError={(e) => {e.target.src = Blog1; e.target.onerror = null;}}
                />
              </div>
            </Col>
          )}
          
          {/* Keywords */}
          {blog.keywords && (
            <Col lg={12} className="mb-4">
              <div className="blog-keywords">
                <h5>Keywords:</h5>
                <div>
                  {blog.keywords.split(',').map((keyword, index) => (
                    <Badge 
                      key={index} 
                      bg="secondary" 
                      className="me-2 mb-2"
                    >
                      {keyword.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          )}
          
          {/* Blog Content */}
          <Col lg={12} className="mb-4">
            <div className="blog-content">
              {blog.description && (
                <div className="blog-description mb-4">
                  <p className="lead">{blog.description}</p>
                  <hr />
                </div>
              )}
              
              <div 
                className="blog-body"
                dangerouslySetInnerHTML={createMarkup(blog.content)}
              />
            </div>
          </Col>
          
          {/* Tags if available */}
          {blog.tags && blog.tags.length > 0 && blog.tags[0] !== "" && (
            <Col lg={12} className="mb-4">
              <div className="blog-tags">
                <h5>Tags:</h5>
                <div>
                  
                  {blog.tags.map((tag, index) => (
                    <Link to={`/blogs/${tag}`}>
                    <Badge 
                      key={index} 
                      bg="primary" 
                      className="me-2 mb-2"
                    >
                      {tag}
                    </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          )}
          
          {/* Back to blogs button */}
          <Col lg={12} className="text-center mt-4 mb-5">
            <Link to="/blog" className="btn btn-primary">
              Back to All Blogs
            </Link>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <section className="travel-blog-section">
      <Header />
      
      {/* Page Title */}
      <Container> 
        <Row>
          <Col>
            <div className="section-heading text-center mt-5">
              <h2 className="section-title">Blog Detail</h2>
              <p className="section-subtitle">
                Discover, Explore, Experience - Unveiling the Exclusive Wonders!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Blog Content */}
      <div className="blog-detail-wrapper">
        {loading ? renderLoadingState() : 
          error ? renderErrorState() : 
          renderBlogContent()}
      </div>
      
      <Footer />
    </section>
  );
};

export default BlogDetail;