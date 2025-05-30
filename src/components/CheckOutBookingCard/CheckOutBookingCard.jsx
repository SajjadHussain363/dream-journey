import React, { useState, useEffect } from "react";
import TripAdvisorLogo from '../../assets/images/cardimghr.png';
import DeleteIcon from "../../assets/images/icons/delete.png";
import EditIcon from "../../assets/images/icons/edit.png";
import { Row } from 'react-bootstrap';
import { FaEdit, FaTrash } from "react-icons/fa";
import "./CheckOutBookingCard.css";
import { Link } from "react-router-dom";
import {useLocalStorageContext} from '../../hooks/LocalStorageContext';

const CheckOutBookingCard = ({grandTotal}) => {
    const [myAppData, setMyAppData] = useState([]);
    const [phone, setPhone] = useState("");
    const {storedValue, setValue, getCount, removeItem} = useLocalStorageContext();

    const [subtotal, setSubtotal] = useState(0);
    const [vat, setVat] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const subtotal = storedValue.reduce((sum, item) => sum + item.totalAmount, 0);
        const vat = subtotal * 0.05;
        const total = subtotal + vat;
        setSubtotal(subtotal);
        setVat(vat);
        setTotal(total);
        grandTotal(total);
    }, [getCount()]);

    useEffect(() => {
        const appData = localStorage.getItem("myAppData");
        if (appData) {
            const parsedAppData = JSON.parse(appData);
            setMyAppData(parsedAppData);
        }
    }, []);

    const deleteItem = (indexToDelete) => {
        removeItem(indexToDelete);
    };


    const formatDate = (isoDateString) => {
        if (!isoDateString) return "Invalid date";

        const date = new Date(isoDateString);
        return date.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    };

    const formatTime = (timeStr) => {
        if (!timeStr || !timeStr.includes(":")) return "Invalid time";

        const [hour, minute] = timeStr.split(":");
        const date = new Date();
        date.setHours(hour, minute);
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };



    return (
        <>
        {storedValue?.map((item, index) => (

        <div className="Checout_Card_wrapper mb-5">
            <div className="row">
                <div className="card-body">
                    
                        <div className="mb-4" key={index}>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-4 me-3">
                                    {item.img && (
                                        <img src={item.img} alt={item.title} className="img-fluid rounded " />
                                    )}
                                </div>
                                <div className="col-md-8 ">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="card_title">{item.title}</h3>
                                        <div className="d-flex me-3">
                                            <FaEdit className="icon" role="button" aria-label="Edit" />
                                            <FaTrash onClick={() => deleteItem(index)} className="icon me-3" role="button" aria-label="Delete" width="20" height="20" />
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <p className="me-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" color="#aba7af" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                                            <span className="ms-2"> {formatDate(item.date)}</span>
                                        </p>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" color="#aba7af" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                            <span className="ms-2"> {formatTime(item.time)}</span>
                                        </p>

                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" color="#aba7af" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin me-1"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                        <span> PickUp: {item.pickup || "Sheraton Hotel Deira"}</span>
                                    </div>
                                    <div className="mt-5">
                                        <h6>Booked for : {item.adults || "2"} Adult{item.adults > 1 ? "s" : ""}</h6>
                                    </div>



                                </div> {/* col-md-8 */}




                                <p className="textSize12 d-flex align-items-center">
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span className="ms-2">Pickup: {item.pickup || "Sheraton Hotel Deira"}</span>
                                </p>

                                <p><strong>Booked for: {item.adults || "2"} Adult{item.adults > 1 ? "s" : ""}</strong></p>
                            </div>
                        </div>
            
                </div>


            </div>

            <hr />
            <Row>
                <div className="d-flex">
                    <p className="textSize12 freeCancelReserve me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" color="#fff" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check-icon lucide-check me-1"><path d="M20 6 9 17l-5-5" /></svg>
                        Reserve Now, Pay Later
                    </p>
                    <p className="textSize12 freeCancelReserve">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" color="#fff" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check-icon lucide-check me-1"><path d="M20 6 9 17l-5-5" /></svg>
                        Free Cancelation
                    </p>
                </div>
                <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert-icon lucide-circle-alert me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg><span>
                    Cancel before 24 hours for a full refund</span>
                </div>
            </Row>
            <hr/>
            <Row className="mt-4 mb-3">
                <div className="PriceDetails">
                    <h4>Price Details</h4>
                    <div className="d-flex justify-content-between">
                        <p>Subtotal</p>
                        <p>AED {item.totalAmount.toFixed(2)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Vat 5%</p>
                        <p>AED {(item.totalAmount * 0.05).toFixed(2)}</p>
                    </div>
                </div>
            </Row>

            <hr />

            <Row className="mb-4">
                <div className="d-flex justify-content-between">
                    <p><strong>Total</strong></p>
                    <p><strong>AED {(item.totalAmount + (item.totalAmount * 0.05)).toFixed(2) || "0.00"}</strong></p>
                </div>
            </Row>

           
        </div>
        ))}
        </>
    );
};

export default CheckOutBookingCard;
