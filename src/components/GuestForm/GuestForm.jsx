import React from 'react';
import './GuestForm.css';
import { Link } from 'react-router-dom';

const GuestForm = () => {
  return (
    <div className="guest-form-container">
      <h2>Guest Information</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <div className="phone-input">
          <input type="text" placeholder="Country Code" />
          <input type="tel" placeholder="Phone Number" />
        </div>
        <p>We need your email to send the confirmation and phone to contact you for this trip. <Link to="#" className='text-decoration-none'>Privacy Policy</Link></p>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default GuestForm;