import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure this is imported in your project
import './Dropdown.css';

const SearchableDropdown = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [inputValue, setInputValue] = useState('');
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
    setIsOpen(true);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="MultiUserDropdownWrapper position-relative" ref={dropdownRef}>
      <div className="input-wrapper d-flex align-items-center position-relative">
        <input
          type="text"
          className="form-control sort-option-btn w-100 pe-4"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onClick={() => setIsOpen(true)}
        />
        <i className="bi bi-clock-history position-absolute end-0 me-2 text-muted"></i>
      </div>

      {isOpen && (
        <div className="customDropdown overflow-hidden mt-1 w-100">
          <div className="customDropdownList">
            <ul>
              {filteredOptions.map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option)}>
                  {option}
                </li>
              ))}
              {filteredOptions.length === 0 && (
                <li style={{ opacity: 0.5 }}>No results found</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
