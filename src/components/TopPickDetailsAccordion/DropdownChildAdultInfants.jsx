import React, { useState, useEffect, useRef } from 'react';
import './DropdownChildAdultInfants.css';
import { Container, Row, Col } from 'react-bootstrap';

const DropdownChildAdultInfants = ({selectedTravelers}) => {
    // Data from Dropdown Child Adult and Infants start
    const [isOpen, setIsOpen] = useState(false);
    const [travelers, setTravelers] = useState({
        adults: 0,
        children: 0,
        infants: 0
    });
    const dropdownRef = useRef(null);

    useEffect(()=>{
        selectedTravelers(travelers);
    },[travelers]);

    // Calculate total travelers
    const totalTravelers = travelers.adults + travelers.children + travelers.infants;

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleIncrement = (type) => {
        setTravelers(prev => {
            // Apply max limits for each traveler type
            const maxLimits = {
                adults: 9,
                children: 8,
                infants: 4
            };

            if (prev[type] < maxLimits[type]) {
                return { ...prev, [type]: prev[type] + 1 };
            }
            return prev;
        });
    };

    const handleDecrement = (type) => {
        setTravelers(prev => {
            // Ensure at least 1 adult
            if (type === 'adults' && prev.adults <= 1) {
                return prev;
            }

            if (prev[type] > 0) {
                return { ...prev, [type]: prev[type] - 1 };
            }
            return prev;
        });
    };

    const handleConfirm = () => {
        // Here you would typically handle the confirmation
        // For now, we'll just close the dropdown
        setIsOpen(false);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Format display text for the input
    const getDisplayText = () => {
        const parts = [];

        if (travelers.adults) {
            parts.push(`${travelers.adults} Adult${travelers.adults !== 1 ? 's' : ''}`);
        }

        if (travelers.children) {
            parts.push(`${travelers.children} Child${travelers.children !== 1 ? 'ren' : ''}`);
        }

        if (travelers.infants) {
            parts.push(`${travelers.infants} Infant${travelers.infants !== 1 ? 's' : ''}`);
        }

        return parts.join(', ');
    };

    // Data from Dropdown Child Adult and Infants end
    return (
        <div>
            <div className="Check_AvailibilityTourPackages">
                
                <div className="w-64 mx-auto mt-8 font-sans">
                    <div className="relative" ref={dropdownRef}>
                        {/* Input with dropdown toggle */}
                        <div
                            className="widthAdjusts d-flex justify-content-between  w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            <div className="flex-grow">
                                <div className="inputFont">{getDisplayText()}</div>
                            </div>
                            <div className="text-gray-500 hover:text-gray-700 d-flex align-items-end flex-column">

                                {/* Chevron down/up using HTML entities and CSS */}
                                {/* <span className="block text-lg" aria-hidden="true">
                                                                    {isOpen ? '▲' : '▼'}
                                                                </span> */}
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="inputIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 1 0-16 0"></path></svg>
                            </div>
                        </div>

                        {/* Dropdown menu */}
                        {isOpen && (
                            <div className="NumbrOfTravelersDropdown absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">Number of Travelers</h2>

                                    {/* Adults Counter */}
                                    <div className="Numbr_Of_Trvlrs_Drpdown_Inner">
                                        <div className=' gap-2 '>
                                            <Row>
                                                <Col md={6}>
                                                    <div className="font-medium">Adult <span>(13 and over)</span></div>
                                                    <small>Minimum 1 required</small>
                                                </Col>
                                                <Col md={6} className='d-flex align-items-end flex-column'>
                                                    <div className="countrInners flex items-center space-x-3 ">
                                                        <button
                                                            className={`adltBtns flex items-center justify-center rounded-full  ${travelers.adults <= 1 ? ' text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                                                                }`}
                                                            onClick={() => handleDecrement('adults')}
                                                            disabled={travelers.adults <= 1}
                                                        >
                                                            <span className="text-lg font-medium" aria-hidden="true">−</span>
                                                        </button>
                                                        <span className="w-6 text-center">{travelers.adults}</span>
                                                        <button
                                                            className={`adltBtns flex items-center justify-center rounded-full  ${travelers.adults >= 9 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                                                                }`}
                                                            onClick={() => handleIncrement('adults')}
                                                            disabled={travelers.adults >= 9}
                                                        >
                                                            <span className="text-lg font-medium" aria-hidden="true">+</span>
                                                        </button>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                        </div>
                                    </div>

                                    {/* Children Counter */}
                                    <div className="Numbr_Of_Trvlrs_Drpdown_Inner">
                                        <div className=' gap-2 '>
                                            <Row>
                                                <Col md={6}>
                                                    <div className="font-medium">Child <span>(4-12)</span></div>
                                                    <small>Optional</small>
                                                </Col>
                                                <Col md={6} className='d-flex align-items-end flex-column'>
                                                    <div className="countrInners flex items-center space-x-3 ">
                                                        <button
                                                            className={`adltBtns flex items-center justify-center rounded-full   ${travelers.children <= 0 ? ' text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                                                                }`}
                                                            onClick={() => handleDecrement('children')}
                                                            disabled={travelers.children <= 0}>
                                                            <span className="text-lg font-medium" aria-hidden="true">−</span>
                                                        </button>
                                                        <span className="w-6 text-center">{travelers.children}</span>
                                                        <button
                                                            className={`adltBtns flex items-center justify-center rounded-full   ${travelers.children >= 8 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                                                                }`}
                                                            onClick={() => handleIncrement('children')}
                                                            disabled={travelers.children >= 8}>
                                                            <span className="text-lg font-medium" aria-hidden="true">+</span>
                                                        </button>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                        </div>
                                    </div>
                                    {/* Infants Counter */}

                                    <div className="Numbr_Of_Trvlrs_Drpdown_Inner">
                                        <div className=' gap-2 '>
                                            <Row>
                                                <Col md={6}>
                                                    <div className="font-medium">Infant <span>(Under 2)</span></div>
                                                    <small>Optional</small>
                                                </Col>
                                                <Col md={6} className='d-flex align-items-end flex-column'>
                                                    <div className="countrInners flex items-center space-x-3 ">
                                                        <button
                                                            className={`adltBtns flex items-center justify-center rounded-full  ${travelers.infants <= 0 ? ' text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                                                                }`}
                                                            onClick={() => handleDecrement('infants')}
                                                            disabled={travelers.infants <= 0}>
                                                            <span className="text-lg font-medium" aria-hidden="true">−</span>
                                                        </button>
                                                        <span className="w-6 text-center">{travelers.infants}</span>
                                                        <button
                                                            className={`adltBtns flex items-center justify-center rounded-full    ${travelers.infants >= 4 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                                                                }`}
                                                            onClick={() => handleIncrement('infants')}
                                                            disabled={travelers.infants >= 4}>
                                                            <span className="text-lg font-medium" aria-hidden="true">+</span>
                                                        </button>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                        </div>
                                    </div>
                                    {/* Confirm Button */}
                                    <button
                                        className="TPD_ConfirmBtnDrpdown"
                                        onClick={handleConfirm}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Display summary */}
                    {/* <div className="mt-4 p-2 bg-gray-50 border border-gray-200 rounded-md">
                            <span className="text-sm text-gray-700">Total Travelers: </span>
                            <span className="font-medium text-gray-900">{totalTravelers}</span>
                        </div> */}
                </div>
            </div>
        </div>
    );
};

export default DropdownChildAdultInfants;




