import React from 'react';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-header">
        <h2>Thank you for booking with us!</h2>
        <p>Your booking has been completed and we're thrilled to make your trip a memorable experience. You can check and download booking confirmation below. Please keep a copy of this confirmation with you for verification on the day of your trip.</p>
      </div>
      <div className="confirmation-card">
        <div className="tour-details">
          <h3>Tour 1</h3>
          <h4>Premium Red Dune Safari with Camel Ride & BBQ Dinner in Bedouin Camp</h4>
          <button className="download-btn">Download Confirmation</button>
          <p className="price">$134.08</p>
        </div>
        <div className="actions">
          <a href="#" className="view-itinerary">View Full Itinerary →</a>
        </div>
        <div className="tour-info">
          <div className="info-item">
            <span className="icon calendar"></span>
            <span>Tour Date: Wednesday, 9 August 2023</span>
          </div>
          <div className="info-item">
            <span className="icon clock"></span>
            <span>Starting Time: 03:15 PM</span>
          </div>
          <div className="info-item">
            <span className="icon users"></span>
            <span>Travelers: 2 Adults</span>
          </div>
          <div className="info-item">
            <span className="icon reference"></span>
            <span>Booking Reference: ABC1234EFG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;