import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BlogDetail.css";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET } from "../../apicController/apiController";
import Blog1 from "../../assets/images/blog.png"; // fallback image
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import SkeletonComponent from "../Skeleton/Skeleton";
import GatwaySection from '../../components/GatwaySection/GatwaySection';
import HelpCentre from '../../components/HelpCentre/HelpCentre';
import DJMoments from '../../components/DJMoments/DJMoments';



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
       <SkeletonComponent/>
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
      <Container className="BlogDetailsWrapper">
        <Row className="mt-5">
          <Col lg={12} className="mb-4 text-center">
            <h1 className="blog-title mb-5 text-capitalize">{blog.name}</h1>
            <div className="blog-meta mb-3 d-flex justify-content-around mb-5">
              <span className="me-3 d-flex align-items-center">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="inputIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="416" height="384" x="48" y="80" fill="none" stroke-linejoin="round" stroke-width="32" rx="48"></rect><circle cx="296" cy="232" r="24"></circle><circle cx="376" cy="232" r="24"></circle><circle cx="296" cy="312" r="24"></circle><circle cx="376" cy="312" r="24"></circle><circle cx="136" cy="312" r="24"></circle><circle cx="216" cy="312" r="24"></circle><circle cx="136" cy="392" r="24"></circle><circle cx="216" cy="392" r="24"></circle><circle cx="296" cy="392" r="24"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 48v32m256-32v32"></path><path fill="none" stroke-linejoin="round" stroke-width="32" d="M464 160H48"></path></svg>
              <span class="">&nbsp; Posted on: </span> &nbsp; <b>{blog.timestamp}</b></span>
              <span> 
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="inputIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"></path><path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"></path></svg>
              <span class="">&nbsp; Category: </span> &nbsp; <span> <b>{blog.category}</b></span></span>
            </div>
          </Col>
          
          {/* Banner Image */}
          {blog.banner_image && (
            <Col lg={12} className="mb-4">
              <div className="blog-banner blogArticleImg">
                <img 
                  src={blog.banner_image} 
                  alt={blog.name} 
                  className="w-100 h-100 rounded-4"
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
                      className="me-2 mb-2 BlogTagsKeywords"
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
            <Link to="/blog" className="BakcBlogkeywords">
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
      <GatwaySection/>
      <HelpCentre/>
      <DJMoments/>
      <Footer />
    </section>
  );
};

export default BlogDetail;