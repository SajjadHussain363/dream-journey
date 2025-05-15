// Reviews.js
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import './Reviews.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TripAdvisorLogo from '../../assets/images/trip_posted.png';
import { GET } from "../../apicController/apiController";

// Arrow components
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      ➤
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      ←
    </div>
  );
}

// Star logic
const renderStars = (rating) => {
  const rate = parseInt(rating);
  if (rate === 1) {
    return <span>★ New</span>;
  }
  return [...Array(rate)].map((_, i) => <span key={i}>★</span>);
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GET("reviews", {}, {
          Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
          Accept: "application/json",
        });

        if (result && Array.isArray(result.data)) {
          setReviews(result.data);
        } else {
          setError("No reviews data found.");
        }
      } catch (err) {
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: reviews.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: reviews.length > 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: reviews.length > 1,
        },
      },
    ],
  };

  return (
    <div className="reviews-wrapper">
      {loading ? (
        <p>Loading reviews...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Slider {...settings}>
          {reviews.map((review) => (
            <div className="slide-item" key={review.uid}>
               <div className="review-list"> <span>{renderStars(review.rating)}</span></div>
             <div className="d-flex align-items-center justify-content-between ">
                <h5>{review.customer}</h5>
                <img src={TripAdvisorLogo} alt="Activity" />
             </div>
             <p> {review.timestamp}</p>
              <ul className="review-list mt-3">
                {/* <li><strong>Product:</strong> {review.product}</li> */}
                <li><strong><i class="bi bi-person-standing"></i> </strong> {review.comment}</li>
              </ul>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Reviews;
