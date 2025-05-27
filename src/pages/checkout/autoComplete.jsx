import React, { useState } from 'react';
import { Autocomplete, LoadScript } from '@react-google-maps/api';
import './PickupLocation.css';

const libraries = ['places'];

export default function PickupLocation({ onLocationSelect }) {
  const [pickup, setPickup] = useState('');
  const [undecided, setUndecided] = useState(false);

  const handlePlaceChanged = (autocomplete) => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      const locationData = {
        address: place.formatted_address || place.name,
        lat: place.geometry?.location?.lat(),
        lng: place.geometry?.location?.lng(),
        placeId: place.place_id,
        name: place.name
      };
      
      setPickup(locationData.address);
      
      // Pass location data to parent component
      if (onLocationSelect) {
        onLocationSelect(locationData);
      }
    }
  };

  const handleUndecidedChange = () => {
    const newUndecided = !undecided;
    setUndecided(newUndecided);
    
    if (newUndecided) {
      setPickup('');
      // Clear location data when undecided is checked
      if (onLocationSelect) {
        onLocationSelect(null);
      }
    }
  };

  return (
    <div className="pickup-container">
      <h2>Pickup Location</h2>
      <div className="pickup-note">
        <span className="info-icon">ℹ️</span>
        <span>Please enter your hotel name so we can arrange your pickup.</span>
      </div>

      <LoadScript
        googleMapsApiKey="AIzaSyBBHNqsXFQqg_-f6BkI5UH7X7nXK2KQzk8"
        libraries={libraries}
      >
        <Autocomplete
          onLoad={autocomplete => (window.autocomplete = autocomplete)}
          onPlaceChanged={() => handlePlaceChanged(window.autocomplete)}
        >
          <input
            type="text"
            placeholder="Enter your pickup location"
            className="pickup-input"
            disabled={undecided}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </Autocomplete>
      </LoadScript>

      <div className="checkbox-container">
        <input
          type="checkbox"
          id="undecided"
          checked={undecided}
          onChange={handleUndecidedChange}
        />
        <label htmlFor="undecided">I haven't decided my pickup yet</label>
      </div>
    </div>
  );
}