import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './AvailabilityAccordion.css';

const AvailabilityAccordion = ({ key ,option, bookNow, onTimeChange}) => {
  
  return (
    <div className="availability-container" key={key}>
      
      {/* Accordion */}
      {option && (
        <div className="accordion-container">
          <Accordion flush defaultActiveKey="0">
            {/* Adults */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>{option?.title}</Accordion.Header>
              <Accordion.Body>
                <p>{option?.description}</p>
                <div className="AvialAccordionDetails_wrapper">
                  <p><i className="bi bi-clock-history"></i> Duration: <strong>{option.duration} </strong></p>
                  <hr />
                  <div>
                    <p>Select your start time:</p>
                    <div>
                      <div className="d-flex gap-2 flex-wrap align-items-center">
                        {option.slots.map((slot, index) => (
                          <div 
                          onClick={()=>onTimeChange(slot.time)}
                          className="time-tag" key={index}>{slot.time}</div>
                        ))}
                      </div>
                      <hr />
                      <div>
                        <small>Price Breakdown</small> <br />
                        <small>Adult 1 x AED 450</small> <br />
                        <small>Child 0 x AED 450</small> <br />
                        <small>Infants 0 x AED 450</small> <br />
                      </div>
                      <div class="border-top bg-Grayscale_Bg_light_grey tourPakages-accordian-padding">
                        <div class="tourPackageDetail border-bottom d-flex justify-content-between pb-2">
                          <div class="">
                            <div class="price text-wrap">Total</div>
                            <div class="price text-wrap">AED 450</div>
                          </div>
                          <div class="d-flex align-items-center flex-sm-row flex-column-reverse gap-2 gap-sm-4">
                            <div class=" text_16 font-rubik text-Grayscale-Border aDDtOCrt cursor-pointer">Add to Cart</div>
                            <div class="BkkNuw" onClick={()=>{bookNow()}}>Book Now</div>
                          </div>
                        </div>
                        <div class="text_12 font-rubik cancel24Hrs d-flex gap-1 align-items-center py-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z"></path></svg>
                          Cancel before 24 hours for a full refund</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* Children */}
            {/* <Accordion.Item eventKey="1">
              <Accordion.Header>{option?.title}</Accordion.Header>
              <Accordion.Body>
                <p>{option?.description}</p>
                <div className="AvialAccordionDetails_wrapper">
                  <p><i className="bi bi-clock-history"></i> Duration: <strong>{option.duration} </strong></p>
                  <hr />
                  <div>
                    <p>Select your start time:</p>
                    <div>
                      <div className="d-flex gap-2 flex-wrap align-items-center">
                        <div className="time-tag">12:00 am</div>
                        <div className="time-tag-active">08:00 am</div>
                        <div className="time-tag">04:00 pm</div></div>
                      <hr />
                      <div>
                        <small>Price Breakdown</small> <br />
                        <small>Adult 1 x AED 450</small> <br />
                        <small>Child 0 x AED 450</small> <br />
                        <small>Infants 0 x AED 450</small> <br />
                      </div>
                      <div className="border-top bg-Grayscale_Bg_light_grey tourPakages-accordian-padding">
                        <div className="tourPackageDetail border-bottom d-flex justify-content-between pb-2">
                          <div className="">
                            <div className="price text-wrap">Total</div>
                            <div className="price text-wrap">AED 450</div>
                          </div>
                          <div className="d-flex align-items-center flex-sm-row flex-column-reverse gap-2 gap-sm-4">
                            <div className=" text_16 font-rubik text-Grayscale-Border aDDtOCrt cursor-pointer">Add to Cart</div>
                            <div className="BkkNuw" onClick={()=>{
                              alert("Iam here here");
                              // bookNow();
                              }}>Book Now</div>
                          </div>
                        </div>
                        <div className="text_12 font-rubik cancel24Hrs d-flex gap-1 align-items-center py-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z"></path></svg>
                          Cancel before 24 hours for a full refund</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>


        </div>
      )}
    </div>
  );
};

export default AvailabilityAccordion;
