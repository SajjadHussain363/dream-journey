import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './PayNowOrLaterCompo.css'
import TourBookingCardHorizontal from '../TourBookingCardHorizontal/TourBookingCardHorizontal';

export default function PaymentSelector() {
  const [selectedOption, setSelectedOption] = useState('payInFull');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log(`Selected: ${option}`);
  };

  return (
    <div className="payment-container">
      <div className="payment-options">
        {/* Pay in Full Option */}
        <div 
          className={`payment-option ${selectedOption === 'payInFull' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('payInFull')}
        >
          <div className="option-content">
            <div className="option-text">
              <h3 className="option-title">Pay in full</h3>
              <p className="option-description">
                Pay the total and you are all set
              </p>
            </div>
            <div className={`radio-button ${selectedOption === 'payInFull' ? 'checked' : ''}`}>
              {selectedOption === 'payInFull' && (
                <Check className="check-icon" />
              )}
            </div>
          </div>
        </div>

        {/* Book Now, Pay Later Option */}
        <div 
          className={`payment-option ${selectedOption === 'bookNowPayLater' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('bookNowPayLater')}
        >
          <div className="option-content">
            <div className="option-text">
              <h3 className="option-title">Book Now, Pay Later</h3>
              <p className="option-description">
                You will be charged on 18 July 2023 at 20:21
              </p>
              <button 
                className="more-info-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  alert('More info about Book Now, Pay Later');
                }}
              >
                More info
              </button>
            </div>
            <div className={`radio-button ${selectedOption === 'bookNowPayLater' ? 'checked' : ''}`}>
              {selectedOption === 'bookNowPayLater' && (
                <Check className="check-icon" />
              )}
            </div>
          </div>
        </div>
      </div>
     
      {/* Display Selected Option */}
      {/* <div className="selected-display">
        <h4 className="selected-title">Selected Payment Method:</h4>
        <p className="selected-text">
          {selectedOption === 'payInFull' ? 'Pay in Full' : 'Book Now, Pay Later'}
        </p>
      </div> */}
       <TourBookingCardHorizontal className='mt-5' />
    </div>
  );
}