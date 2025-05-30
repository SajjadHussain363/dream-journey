import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './CheckOutRegistrationFormMix.css'
import UserInformation from './UserInformation';
import RegisterWithSocialAccount from './RegisterWithSocialAccount';


export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    countryCode: 'Germany (+49)',
    phone: '301234567',
    country: 'Germany',
    state: 'Berlin',
    city: 'Berlin',
    zipCode: '10249',
    address: 'Landsberger Allee 26'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialRegister = (provider) => {
    console.log(`Register with ${provider}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <div className="registration-container">
      <UserInformation />
      <RegisterWithSocialAccount />

    

      {/* Address Information Section */}
      <div className="registration-card">
        <h2 className="section-title">Address Information</h2>
        <div className="form-group">
          <div className="select-wrapper">
            <select
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className="form-select"
            >
              <option value="Germany">Germany</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            <ChevronDown className="select-arrow" />
          </div>
        </div>
        
        <div className="form-group">
          <div className="select-wrapper">
            <select
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className="form-select"
            >
              <option value="Berlin">Berlin</option>
              <option value="Munich">Munich</option>
              <option value="Hamburg">Hamburg</option>
            </select>
            <ChevronDown className="select-arrow" />
          </div>
        </div>
        
        <div className="form-group">
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            className="form-input"
            placeholder="Berlin"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
            className="form-input"
            placeholder="10249"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="form-input"
            placeholder="Landsberger Allee 26"
          />
        </div>
        
        <button className="register-btn" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}