import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './CheckOutRegistrationFormMix.css';

const UserInformation = () => {
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
        <div>
              {/* User Information Section */}
                  <div className="registration-card">
                    <h2 className="section-title">User Information</h2>
                    <div className="form-group">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="form-input"
                        placeholder="john.doe@email.com"
                      />
                    </div>
                    
                    <div className="phone-row">
                      <div className="phone-country">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => handleInputChange('countryCode', e.target.value)}
                          className="form-select"
                        >
                          <option value="Germany (+49)">Germany (+49)</option>
                          <option value="USA (+1)">USA (+1)</option>
                          <option value="UK (+44)">UK (+44)</option>
                        </select>
                        <ChevronDown className="select-arrow" />
                      </div>
                      <div className="phone-number">
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="form-input"
                          placeholder="301234567"
                        />
                      </div>
                    </div>
                    
                    <p className="privacy-text">
                      We need your email to send the confirmation and phone to contact you for this trip. 
                      <a href="#" className="privacy-link">Privacy Policy</a>
                    </p>
                  </div>
        </div>
    );
};

export default UserInformation;