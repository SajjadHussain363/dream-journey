import React, { useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import './TourBookingCardHorizontal.css';

const TourBookingCardHorizontal = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleBookNow = () => {
    console.log('Book Now clicked');
    // Add booking logic here
  };

  return (
    <div className="tour-booking-card_horizontal_Wrapper mt-5">
      <div className="tour-booking-content">
        {/* Image Section */}
        <div className="tour-image-container">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Dubai Marina with boats and skyscrapers"
            className="tour-image"
          />
          <div className="discount-badge">
            50% Off
          </div>
        </div>

        {/* Content Section */}
        <div className="tour-content">
          <div>
            {/* Header with title and heart */}
            <div className="tour-header">
              <h2 className="tour-title">
                Small Group Guided Red Dune Safari in Quad Bikes with BBQ Dinner
              </h2>
              <button
                onClick={handleLikeClick}
                className="like-button"
              >
                <Heart
                  className={`heart-icon ${isLiked ? 'liked' : 'unliked'}`}
                />
              </button>
            </div>

            {/* Features List */}
            <ul className="TBCH_feature-item">
              <li className="single-tour-card">
               
                <span className="feature-text">Full-day premium desert safari tour</span>
              </li>
              <li className="single-tour-card">
                
                <span className="feature-text">Enjoy 30-45 minutes of dune-bashing</span>
              </li>
              <li className="single-tour-card">
               
                <span className="feature-text">Try out sand-boarding on desert dunes</span>
              </li>
            </ul>
          </div>

          {/* Price and Book Now Section */}
          <div className="price-book-container">
            <div className="price-container">
              <span className="current-price">
                AED 63.99
              </span>
              <span className="original-price">
                AED 78.59
              </span>
              <span className="price-unit">/Person</span>
            </div>
            
            <button
              onClick={handleBookNow}
              className="book-button"
            >
              Book Now
              <ArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBookingCardHorizontal;