import React, { useState, useEffect } from 'react';
import { GET } from "../../apicController/apiController";
import slidrss from "../../assets/images/commanslider.png";
import { Link } from "react-router-dom";
import "./ProductsCardAllTours.css";
import SearchableDropdown from '../../components/Dropdown/Dropdown';

const ProductsCardAllTours = () => {
  // Code for Dropdown start
  const priceOptions = ['Under $50', '$50 - $100', '$100 - $200', 'Above $200'];
  const availabilityOptions = ['In Stock', 'Out of Stock', 'Limited Availability'];
  const timeOptions = ['Morning', 'Afternoon', 'Evening', 'Night'];
  const filterOptions = ['Free Cancellation', 'Instant Confirmation', 'Private Tours'];
  const sortByOptions = [
    'Dream Journey Recommended',
    'Most Popular',
    'Recently Added',
    'Limited Time Deals',
    'Price (Low to High)',
    'Price (High to Low)'
  ];

  // Code for Dropdown end

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GET("products", {}, {
          Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
          Accept: "application/json",
        });

        if (result && Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          setError("No product data found.");
        }
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl || "https://www.youtube.com/embed/qmGYnJgCW1o");
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };




  return (
    <>
      <section>
        <div className="ProductsCardAllTours">
          <div className="AllTourFiveFiltersWrapper">
            <div className="container">
              <div className="row">
                <div className="d-flex">
                  <div className='FiltrsDrpDwns_wrper customDropdownOne'>

                  </div>
                  <div className='FiltrsDrpDwns_wrper customDropdownTwo'>
                    <div className="d-flex gap-3">
                      <div className="FiltrsDrpDwns_wrper customDropdownOne d-flex flex-wrap gap-3">
                        <SearchableDropdown
                          options={priceOptions}
                          placeholder="Select Price"
                          onSelect={(value) => console.log('Price selected:', value)}
                        />

                        <SearchableDropdown
                          options={availabilityOptions}
                          placeholder="Select Availability"
                          onSelect={(value) => console.log('Availability selected:', value)}
                        />

                        <SearchableDropdown
                          options={timeOptions}
                          placeholder="Select Time"
                          onSelect={(value) => console.log('Time selected:', value)}
                        />

                        <SearchableDropdown
                          options={filterOptions}
                          placeholder="Select Filter"
                          onSelect={(value) => console.log('Filter selected:', value)}
                        />

                        <SearchableDropdown
                          options={sortByOptions}
                          placeholder="Sort By"
                          onSelect={(value) => console.log('Sort selected:', value)}
                        />

                      </div>

                    </div>
                  </div>

                </div>
              </div>

              <div className="row" style={{ marginTop: '40px' }}>
                {loading ? (
                  <p>Loading Api Data...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  products.map((product, idx) => (
                    <div key={idx} className="col-md-6 mb-4">
                      <div
                        className="ProductscardsAllTours"
                        style={{
                          border: '1px solid #ccc',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        }}
                      >
                        {/* Image with Play Icon */}
                        <div
                          style={{
                            position: 'relative',
                            width: '100%',
                            paddingTop: '56.25%', // 16:9 ratio
                            cursor: 'pointer',
                            backgroundColor: '#000',
                          }}
                          onClick={() => openModal(product.video_source)}
                        >
                          <img
                            src={product.image || slidrss}
                            alt={product.name || "Product"}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                          <i
                            className="bi bi-play-circle"
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              fontSize: '64px',
                              color: 'white',
                              opacity: 0.8,
                            }}
                          ></i>
                        </div>

                        {/* Card Content */}
                        <div className="card_body_Wrapper">
                          <div className="card-body">
                            <div className="d-flex">
                              <h5 className="card-title"><Link>{product.name || "No Title"}</Link></h5>
                              <Link> <i className="bi bi-heart" style={{ color: "gray", marginRight: "8px" }}></i></Link>
                            </div>


                            <p className="card-text">
                              {product.listing_highlight_display
                                ? product.listing_highlight_display.slice(0, 100) + '...'
                                : "No Highlight Available"}
                            </p>
                          </div>

                          {/* Items */}
                          <ul className="list-group list-group-flush">

                            <li className="list-group-item"><b>Item 1:</b> Theme: {product.theme || "N/A"}</li>
                            <li className="list-group-item"><b>Item 1:</b> Availability: {product.availability || "N/A"}</li>

                            <li className="list-group-item"><b>Item 1:</b> Category: {product.category || "N/A"}</li>
                            <li className="list-group-item"><b>Item 2:</b> Price: ₹{product.price || "N/A"}</li>

                            <li className="list-group-item"><b>Item 4:</b> Duration: {product.duration || "N/A"}</li>
                            {/* <li className="list-group-item"><b>Item 5:</b> Languages: {product.languages?.join(", ") || "N/A"}</li> */}

                            <li className="list-group-item"><b>Item 7:</b> Instant Confirmation: {product.is_instant_confirmation ? "Yes" : "No"}</li>
                            <li className="list-group-item"><b>Item 8:</b> Free Cancellation: {product.free_cancellation ? "Yes" : "No"}</li>

                            <li className="list-group-item"><b>Item 6:</b> Average Rating: {product.average_rating || "N/A"}</li>
                            {/* <li className="list-group-item"><b>Item 9:</b> Number of Reviews: {product.number_of_reviews || "0"}</li> */}

                            <li className="list-group-item"><b>Item 10:</b> New Product: {product.is_new_product ? "Yes" : "No"}</li>
                            <li className="list-group-item"><b>Item 11:</b> Options Count: {product.product_options_count || "0"}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Video */}
      {selectedVideo && (
        <div
          className="modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1050,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: 'relative',
              width: '80%',
              maxWidth: '800px',
            }}
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <iframe
              width="100%"
              height="450"
              src={selectedVideo}
              title="Product Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsCardAllTours;
