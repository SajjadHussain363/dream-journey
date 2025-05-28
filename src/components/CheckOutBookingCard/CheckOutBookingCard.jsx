import React from 'react'
import TripAdvisorLogo from '../../assets/images/cardimghr.png';
import DeleteIcon from "../../assets/images/icons/delete.png";
import EditIcon from "../../assets/images/icons/edit.png";
import { Container, Row, Col } from 'react-bootstrap';
import "./CheckOutBookingCard.css";

const CheckOutBookingCard = () => {
    return (
        <div>
            <div className="Checout_Card_wrapper">
                <div className="row">
                    <div className="col-md-4">
                        <img src={TripAdvisorLogo} className="img-fluid rounded" alt="No image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h3 className="card_title">Premium Red Dune Safari with Camel Ride & BBQ Dinner in Bedouin Camp</h3>
                                <div className="d-flex">
                                    <img src={DeleteIcon} alt="" className="me-3" width={24} height={24} />
                                    <img src={EditIcon} alt="" width={24} height={24} />
                                </div>
                            </div>
                            <div className="d-flex">
                                <p className='textSize12'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" color="#aba7af" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days me-2"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                                    <span className="me-2">Wednesday, 09 May 2025</span>
                                </p>
                                <p className='textSize12'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" color="#aba7af" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-icon lucide-clock me-2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    <span>Starting time: 03:15 PM</span>
                                </p>
                            </div>
                            <p className='textSize12'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" color="#aba7af" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin me-2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>Pickup: Sheraton Hotel Deira</span>
                            </p>
                            <p><strong>Booked for : 2 Adult</strong></p>
                        </div>
                       
                    </div>
                </div>
                <hr />
                <Row>
                    <div className='d-flex'>
                        <p className='ReservrCancel me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                            <span className='ms-1'>Reserve Now: Pay Later</span>
                            </p>
                        <p  className='ReservrCancel me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                            <span className='ms-1'>Free Cancellations</span>
                            </p>
                        
                    </div>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert-icon lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                        <span className='ms-1'>Cancel before 10:00am on July 28 fpr a full refund</span>
                        </p>
                </Row>
                <hr />
                <Row>
                    <div className='PriceDetails'>
                        <h4>Price Details</h4>
                        <div className='d-flex justify-content-between'>
                        <p>2 Adults X AED68.99</p>
                        <p>AED 127.70</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                       <p>Vat 5%</p>
                       <p>AED 6.38</p>
                       </div>
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className='d-flex justify-content-between'>
                        <p><strong>Total</strong></p>
                        <p><strong>AED 100</strong></p>
                    </div>
                </Row>
            </div>

        </div>
    )
}

export default CheckOutBookingCard;
