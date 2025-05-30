import React from 'react';
import { Calendar, MapPin, Clock, Info, Check, X } from 'lucide-react';
import './BookingSummaryCard.css';
import ProductPurchaseHero from '../../assets/images/ProductPurchaseHero.png';

export default function BookingSummary() {
  return (
    <div className="booking-summary">
      <div className="booking-header">
        <img 
          src={ProductPurchaseHero} 
          alt="Desert Safari" 
          className="booking-image"
        />
        <div className="booking-info">
          <div className="booking-title-row">
            <h2 className="booking-title">
              Premium Red Dune Safari with Camel Ride & BBQ Dinner In Bedouin Camp
            </h2>
            <button className="delete-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14zM10 11v6M14 11v6"/>
              </svg>
            </button>
          </div>
          
          <div className="booking-details">
            <div className="detail-item">
              <Calendar className="detail-icon" />
              <span>Wednesday, 9 August 2023</span>
            </div>
            
            <div className="detail-item">
              <Clock className="detail-icon" />
              <span>Starting time: 03:15 PM</span>
            </div>
            
            <div className="detail-item">
              <MapPin className="detail-icon" />
              <span>Pickup: Sheraton Hotel Deira</span>
            </div>
          </div>
          
          <div className="booked-for">
            <span className="booked-text">Booked for: 2 Adults</span>
          </div>
        </div>
      </div>
      
      <div className="booking-features">
        <div className="feature-item">
          <Check className="feature-icon check-icon" />
          <span>Reserve Now, Pay Later</span>
        </div>
        <div className="feature-item">
          <Check className="feature-icon check-icon" />
          <span>Free Cancellation</span>
        </div>
      </div>
      
      <div className="cancellation-policy">
        <Info className="info-icon" />
        <span>Cancel before 10:00am on July 28 for a full refund</span>
      </div>
      
      <div className="price-details">
        <h3 className="price-title">Price Details</h3>
        
        <div className="price-row">
          <span className="price-label">2 Adults x $63.85</span>
          <span className="price-value">$127.70</span>
        </div>
        
        <div className="price-row">
          <span className="price-label">VAT 5%</span>
          <span className="price-value">$6.38</span>
        </div>
        
        <div className="total-row">
          <span className="total-label">Total</span>
          <span className="total-value">$134.08</span>
        </div>
      </div>
    </div>
  );
}