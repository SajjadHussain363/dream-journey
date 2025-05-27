import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DJMoments from "../../components/DJMoments/DJMoments";
import GetOffersDeals from "../../components/GetOffersDeals/GetOffersDeals";
import { GET } from "../../apicController/apiController";
import HeroSectionExp from "../../assets/images/ThingsToDoHeroSection.png";
import "./ThingsToDo.css";
import "../../components/AllThingsTodoCards/AllTTodoResultCards.css";

const ThingsToDo = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [recommendedOption, setRecommendedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRecommendedDropdownOpen, setIsRecommendedDropdownOpen] = useState(false);

  const [filters, setFilters] = useState({
    ProductType: {},
    Categories: {},
    Destinations: {},
    Themes: {},
    Duration: {},
  });

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingThemes, setLoadingThemes] = useState(true);
  const [loadingTypes, setLoadingTypes] = useState(true);

  const dropdownRef = useRef(null);
  const recommendedDropdownRef = useRef(null);

  const destinations = ['Abu Dhabi', 'Dubai', 'Fujairah', 'Sharjah', 'Ras Al Khaimah'];
  const durations = [
    'Quick Activity (1 hour or less)',
    'Short Excursion (2-4 hours)',
    'Half-day (4-6 hours)',
    'Full-day (up to 10 hours)',
    'Day and Night Tour (24 hours)'
  ];

  const sortOptions = [
    { key: "priceLowHigh", label: "Price: Low to High" },
    { key: "priceHighLow", label: "Price: High to Low" },
    { key: "ratingHighLow", label: "Top Rated" }
  ];

  const recommendedOptions = [
    { key: "featured", label: "Featured" },
    { key: "popular", label: "Most Popular" },
    { key: "newest", label: "Newest First" },
    { key: "bestSeller", label: "Best Seller" },
    { key: "trending", label: "Trending Now" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (recommendedDropdownRef.current && !recommendedDropdownRef.current.contains(event.target)) {
        setIsRecommendedDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (section, item) => {
    setFilters(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [item]: !prev[section][item],
      },
    }));
  };

  const resetAllFilters = () => {
    setFilters({
      ProductType: Object.fromEntries(Object.keys(filters.ProductType).map(key => [key, false])),
      Categories: Object.fromEntries(categories.map(c => [c, false])),
      Destinations: Object.fromEntries(destinations.map(d => [d, false])),
      Themes: Object.fromEntries(themes.map(t => [t, false])),
      Duration: Object.fromEntries(durations.map(d => [d, false])),
    });
    setTags([]);
  };

  const handleSortSelect = (option) => {
    setSortOption(option.key);
    setIsDropdownOpen(false);
  };

  const handleRecommendedSelect = (option) => {
    setRecommendedOption(option.key);
    setIsRecommendedDropdownOpen(false);
  };

  const renderCheckboxes = (section, items, loading = false) => {
    if (loading) return <p>Loading...</p>;
    return items.map((item, idx) => (
      <div className="form-check" key={idx}>
        <input
          className="form-check-input"
          type="checkbox"
          id={`${section}-${item}`}
          checked={filters[section][item] || false}
          onChange={() => handleCheckboxChange(section, item)}
        />
        <label className="form-check-label" htmlFor={`${section}-${item}`}>
          {item}
        </label>
      </div>
    ));
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [categoriesRes, themesRes, productsRes] = await Promise.all([
          GET("categories", {}, { Authorization: "Bearer YOUR_TOKEN", Accept: "application/json" }),
          GET("themes", {}, { Authorization: "Bearer YOUR_TOKEN", Accept: "application/json" }),
          GET("products", {}, { Authorization: "Bearer YOUR_TOKEN", Accept: "application/json" })
        ]);

        if (categoriesRes?.data) {
          const cats = categoriesRes.data.map(c => c.name);
          setCategories(cats);
          setFilters(prev => ({
            ...prev,
            Categories: Object.fromEntries(cats.map(c => [c, false]))
          }));
        }

        if (themesRes?.data) {
          const thms = themesRes.data.map(t => t.name);
          setThemes(thms);
          setFilters(prev => ({
            ...prev,
            Themes: Object.fromEntries(thms.map(t => [t, false]))
          }));
        }

        if (productsRes?.data) {
          const prods = productsRes.data;
          setProducts(prods);

          const types = [...new Set(prods.map(p => p.type))];
          setFilters(prev => ({
            ...prev,
            ProductType: Object.fromEntries(types.map(t => [t, false]))
          }));
        }
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
        setLoadingCategories(false);
        setLoadingThemes(false);
        setLoadingTypes(false);
      }
    };

    fetchAll();
  }, []);

  let filteredProducts = products.filter((product) => {
    const isMatch = (section, value) => {
      return Object.entries(filters[section]).every(([key, checked]) => {
        if (!checked) return true;
        if (section === 'Categories') return product.category === key;
        if (section === 'Themes') return product.theme?.includes(key);
        if (section === 'ProductType') return product.type === key;
        if (section === 'Destinations') return product.destination === key;
        if (section === 'Duration') return product.duration === key;
        return true;
      });
    };

    return ["ProductType", "Categories", "Themes", "Destinations", "Duration"].every((section) =>
      isMatch(section, filters[section])
    );
  });

  // Sort functionality
  if (sortOption === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "ratingHighLow") {
    filteredProducts.sort((a, b) => b.average_rating - a.average_rating);
  }

  // Recommended sorting (you can implement your own logic here)
  if (recommendedOption === "featured") {
    filteredProducts.sort((a, b) => (b.featured || 0) - (a.featured || 0));
  } else if (recommendedOption === "popular") {
    filteredProducts.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  } else if (recommendedOption === "newest") {
    filteredProducts.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
  } else if (recommendedOption === "bestSeller") {
    filteredProducts.sort((a, b) => (b.sales_count || 0) - (a.sales_count || 0));
  } else if (recommendedOption === "trending") {
    filteredProducts.sort((a, b) => (b.trending_score || 0) - (a.trending_score || 0));
  }

  const selectedSortLabel = sortOptions.find(opt => opt.key === sortOption)?.label || "Sort By";
  const selectedRecommendedLabel = recommendedOptions.find(opt => opt.key === recommendedOption)?.label || "Recommended";

  return (
    <>
      <Header />
      <section>
        <div className="ThingsToDoHeroWrapper">
          <img src={HeroSectionExp} alt="HeroSectionExp" className="img-fluid ThingsToDoHero" />
          <div className="ThingsToDoHeading">
            <h1>Things to do in <br /> United Arab Emirates</h1>
          </div>
        </div>
        <Container>
          <Row>
            <div className="mt-5 mb-5">
              <a className="breadcrumb_parent" href="/">Home</a> - <span className="breadcrumb_child">Things to do in United Arab Emirates</span>
            </div>
            <hr />
          </Row>
          <Row className="mb-5 p-0">
            <Col md={12}>
              <div className="TTD_TagesWraper">
                {["Safaris", "Yachts & Cruises", "Day Trips", "Adventure", "Couple", "4WD Trips", "Private Tours", "Sightseeing Tours", "Theme Parks", "Indoor Attractions"].map((tag, i) => (
                  <Link className="btn btn-custom" to="/" data-discover="true" key={i}>{tag}</Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-3">
          <Row>
            <Col md={4}>
              <div className="FilterResultWrapper">
                <h3>Filter Results</h3>
                <div className="FilterSearch enhanced-search-container">
                  <div className="search-input-wrapper">
                    <input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Search By Filters"
                      className="form-control enhanced-search-input"
                    />
                    <i className="bi bi-search search-icon"></i>
                  </div>
                </div>
                <div className="FilterTagsResults enhanced-tags-container">
                  {tags.map((tag, i) => (
                    <span key={i} className="enhanced-tag">
                      {tag} 
                      <button 
                        className="enhanced-remove-btn" 
                        onClick={() => removeTag(i)}
                        aria-label="Remove tag"
                      >
                        <i className="bi bi-x"></i>
                      </button>
                    </span>
                  ))}
                </div>
                <div className="FiltrsRestBtns">
                  <button className="FltRstBtns enhanced-reset-btn" onClick={resetAllFilters}>
                    Reset Filters
                  </button>
                </div>
                <Accordion defaultActiveKey="0" className="TTD_accordion_Wrappr">
                  {[
                    { label: 'Product Type', items: Object.keys(filters.ProductType), section: 'ProductType', loading: loadingTypes },
                    { label: 'Categories', items: categories, section: 'Categories', loading: loadingCategories },
                    { label: 'Destinations', items: destinations, section: 'Destinations' },
                    { label: 'Themes', items: themes, section: 'Themes', loading: loadingThemes },
                    { label: 'Duration', items: durations, section: 'Duration' }
                  ].map(({ label, items, section, loading }, index) => (
                    <Accordion.Item eventKey={String(index)} key={label}>
                      <Accordion.Header>{label}</Accordion.Header>
                      <Accordion.Body>
                        {renderCheckboxes(section, items, loading)}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
                <div className="FiltrsRestBtns2">
                  <button className="FltRstBtns2 enhanced-clear-btn" onClick={resetAllFilters}>
                    Clear All
                  </button>
                </div>
              </div>
            </Col>

            <Col md={8}>
              {loading && <p>Loading...</p>}
              {error && <p className="text-danger">{error}</p>}
              {!loading && (
                <>
                  <div className="TTD_sort_Dropdwn_wrpr d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                       {/* Sort By Dropdown */}
                       <div className="enhanced-dropdown-container" ref={dropdownRef}>
                        <button 
                          className="enhanced-dropdown-toggle"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          aria-expanded={isDropdownOpen}
                        >
                          <span>{selectedSortLabel}</span>
                          <i className={`bi bi-sliders ${isDropdownOpen ? 'rotated' : ''}`}></i>
                        </button>
                        <div className={`enhanced-dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                          {sortOptions.map((option) => (
                            <button
                              key={option.key}
                              className={`enhanced-dropdown-item ${sortOption === option.key ? 'active' : ''}`}
                              onClick={() => handleSortSelect(option)}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      {/* Recommended Dropdown */}
                      <div className="enhanced-dropdown-container" ref={recommendedDropdownRef}>
                        <button 
                          className="enhanced-dropdown-toggle recmnd"
                          onClick={() => setIsRecommendedDropdownOpen(!isRecommendedDropdownOpen)}
                          aria-expanded={isRecommendedDropdownOpen}
                        >
                          <span>{selectedRecommendedLabel}</span>
                          <i className={`bi bi-chevron-down dropdown-arrow ${isRecommendedDropdownOpen ? 'rotated' : ''}`}></i>
                        </button>
                        <div className={`enhanced-dropdown-menu ${isRecommendedDropdownOpen ? 'show' : ''}`}>
                          {recommendedOptions.map((option) => (
                            <button
                              key={option.key}
                              className={`enhanced-dropdown-item ${recommendedOption === option.key ? 'active' : ''}`}
                              onClick={() => handleRecommendedSelect(option)}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>

                     
                    </div>
                    
                    <p className="results-count">Showing {filteredProducts.length} of {products.length} results</p>
                  </div>

                  {filteredProducts.map(product => (
                    <div key={product.uid} className="TTD_product-card mb-5 d-flex gap-4">
                      <div className="TDC_img">
                        <img src={product.product_image} alt={product.name} />
                      </div>
                      <div>
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="TTD_headings">{product.name}</h3>
                          <button className="btn wishlist-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                              <path d="M14.7233 24.2784C14.3266 24.4184 13.6733 24.4184 13.2766 24.2784C9.89325 23.1234 2.33325 18.305 2.33325 10.1384C2.33325 6.53337 5.23825 3.6167 8.81992 3.6167C10.9433 3.6167 12.8216 4.64337 13.9999 6.23003C15.1783 4.64337 17.0683 3.6167 19.1799 3.6167C22.7616 3.6167 25.6666 6.53337 25.6666 10.1384C25.6666 18.305 18.1066 23.1234 14.7233 24.2784Z" stroke="#1A141F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </button>
                        </div>

                        <div className="Locationgeo d-flex flex-wrap gap-2 mt-2">
                          <span><i className="bi bi-geo-alt"></i> {product.destination || "Dubai"}</span>
                          {product.theme?.length > 0 && (
                            <span className="CatgryNtruWildlife">{product.theme.join(", ")}</span>
                          )}
                        </div>
                        <div className="ReviewRatingCardWprCards d-flex flex-wrap align-items-center mt-2">
                          <span className="ReviewRatingStar d-flex align-items-center me-3">
                            {parseFloat(product.average_rating) > 2 ? (
                              [...Array(Math.min(5, Math.floor(product.average_rating)))].map((_, idx) => (
                                <i key={idx} className="bi bi-star-fill me-1 text-warning"></i>
                              ))
                            ) : (
                              <>
                                <i className="bi bi-star-fill text-warning me-1"></i>
                                <span>New</span>
                              </>
                            )}
                          </span>
                          {product.duration && (
                            <span className="d-flex align-items-center">
                              <i className="bi bi-clock me-1"></i> {product.duration}
                            </span>
                          )}
                        </div>
                        <div className="freeCancelation&Tour mt-2">
                          <span><i className="bi bi-check-circle"></i> Free Cancellation: {product.free_cancellation ? "Yes" : "No"}</span>
                          &nbsp;&nbsp;
                          <span><i className="bi bi-ticket-perforated"></i> {product.type}</span>
                        </div>
                        <div className="CardCuttingPrice mt-4">
                          <span>From</span> <del>AED {parseFloat(product.price) + 50}</del>
                        </div>
                        <div className="comnCardPricewpr d-flex justify-content-between mt-2 flex-wrap">
                          <div>
                            <span className="OrignalPrice">AED {product.price} /</span>
                            <span className="PersonRgroup">Person</span>
                          </div>
                          <div>{product.listing_highlight_display || "1 option available"}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Col>
          </Row>
        </Container>
        <DJMoments />
        <GetOffersDeals />
        <Footer />
      </section>

     
    </>
  );
};

export default ThingsToDo;