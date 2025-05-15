import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const AvailabilityAccordion = () => {
  const [showAccordions, setShowAccordions] = useState(false);

  const handleCheckAvailability = () => {
    setShowAccordions(!showAccordions);
  };

  return (
    <div className="availability-container">
      {/* Check Availability Button */}
      <div className="pb-3">
        <button
          className="btn btn-rounded-secondary w-100"
          onClick={handleCheckAvailability}
        >
          Check Availability
        </button>
      </div>

      {/* Accordion */}
      {showAccordions && (
        <div className="accordion-container">
          <Accordion flush defaultActiveKey="0">
            {/* Adults */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Adults</Accordion.Header>
              <Accordion.Body>
                <p>Adult travelers must be 13 years or older.</p>
              </Accordion.Body>
            </Accordion.Item>

            {/* Children */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Children </Accordion.Header>
              <Accordion.Body>
                <p>Child rates apply for passengers between 4–12 years of age.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          
          
        </div>
      )}
    </div>
  );
};

export default AvailabilityAccordion;
