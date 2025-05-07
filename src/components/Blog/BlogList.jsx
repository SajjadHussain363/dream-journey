import React, { useEffect, useState, useRef } from 'react';
import './BlogList.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { GET } from '../../apicController/apiController';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await GET("blogs", {}, {
          Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
          Accept: "application/json",
        });
        if (result && Array.isArray(result.data)) {
          setBlogs(result.data);
          setFilteredBlogs(result.data);
          
          // Extract unique categories from blogs
          const uniqueCategories = [...new Set(result.data.map(blog => blog.category))];
          setCategories(uniqueCategories);
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

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const truncateWords = (text, wordLimit) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  const handleLoadMore = () => {
    setVisibleBlogs(prev => prev + 6);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const filtered = blogs.filter(blog => blog.category === category);
    setFilteredBlogs(filtered);
    setVisibleBlogs(6);
    setIsDropdownOpen(false);
    setSearchText(category); // Update input field
  };

  const handleClearFilter = () => {
    setSelectedCategory(null);
    setFilteredBlogs(blogs);
    setSearchText(''); // Clear input field
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredCategories = categories.filter(category => 
    category.toLowerCase().includes(searchText.toLowerCase()) ||
    !searchText
  );

  return (
    <section>
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <div className='Latest_Heading_wrapper'>
              <h1 className='heading-primary'>Travel Blogs</h1>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column">
              <div className="d-flex sortedBlgDrpdown justify-content-end align-items-center mt-2">
                <div className="custom-dropdown" ref={dropdownRef}>
                  <div 
                    className="custom-dropdown-header position-relative" 
                    onClick={toggleDropdown}
                  >
                    <input
                      type="text"
                      className="custom-dropdown-input"
                      placeholder="Sort by"
                      value={searchText}
                      onChange={e => setSearchText(e.target.value)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsDropdownOpen(true);
                      }}
                      readOnly={false}
                    />
                  </div>
                  {isDropdownOpen && (
                    <div className="custom-dropdown-content">
                      <div 
                        className="custom-dropdown-item"
                        onClick={() => {
                          handleClearFilter();
                          setIsDropdownOpen(false);
                        }}
                      >
                        All Categories
                      </div>
                      {filteredCategories.map((category) => (
                        <div 
                          key={category} 
                          className="custom-dropdown-item"
                          onClick={() => handleCategoryClick(category)}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  )}
                  <span className="ms-2 d-flex align-items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                    strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </span>
                </div>
                
              </div>
              
              {selectedCategory && (
                <div className="FilterSortybyStyl d-flex justify-content-between align-items-center mt-2">
                  <div className="text-muted">Filtered by: <strong>{selectedCategory}</strong></div>
                  <Button variant="outline-secondary" size="sm" onClick={handleClearFilter}>Clear</Button>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {error && <p className="text-danger">{error}</p>}
        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          <>
            <Row className="g-4 mt-2">
              {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
                <Col key={blog.slug} xs={12} sm={6} md={4}>
                  <div className="BlgCrdWpres position-relative h-100 hover:shadow-lg transition">
                    <Link to={`/blogs/${blog.slug}`} className="block text-decoration-none text-dark">
                      <img
                        src={blog.featured_image}
                        alt={blog.name}
                        className="w-100 img-fluid h-48 object-cover blgPddg2 mb-3"
                      />
                      <p
                        className='categoryBlg  cursor-pointer'
                        style={{ cursor: 'pointer' }}
                        onClick={(e) => {
                          e.preventDefault(); // prevent Link trigger
                          handleCategoryClick(blog.category);
                        }}
                      >
                        {blog.category}
                      </p>
                      <h2 className="text-xl font-bold mb-1 blgPddg">{blog.name}</h2>
                      {/* <p className="text-sm text-muted mb-2">{blog.timestamp}</p> */}
                      <p className="text-gray-700 blgPddg">{truncateWords(blog.description, 30)}</p>
                    </Link>
                    <div className="d-flex mt-2">
                      <Link className="read-moreBlgs blgPddg" to={`/blogs/${blog.slug}`}>Read More 
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                      </svg>
                      </Link>   
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {visibleBlogs < filteredBlogs.length && (
              <div className="text-center mt-4">
                <Button variant="primary" onClick={handleLoadMore}>Load More</Button>
              </div>
            )}
          </>
        )}
      </Container>
      
    </section>
  );
};

export default BlogList;