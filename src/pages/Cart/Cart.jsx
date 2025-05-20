import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import CartImageDummy from "../../assets/images/tourLand4.png";
import './Cart.css';
import {useLocalStorageContext} from '../../hooks/LocalStorageContext';
import { formatDuration as formatDurationFn, intervalToDuration } from 'date-fns';

const Cart = () => {


  const [cartItems, setCartItems] = useState([]);

  const {storedValue, setValue, getCount, removeItem} = useLocalStorageContext();
  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };



  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.0;
  const total = subtotal + shipping;
  const totalItems = cartItems.reduce((count, item) => count + item.quantity, 0);


  useEffect(()=>{
    setCartItems(storedValue);
  },[storedValue]);


  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      weekday: 'long', // e.g., "Friday"
      month: 'long',   // e.g., "May"
      day: 'numeric',  // e.g., "23"
      year: 'numeric'  // e.g., "2025"
    });
  }

  function formatTimeToAmPm(time24) {
    try {
      const [hours, minutes] = time24.split(':').map(Number);
      
      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      console.error('Error formatting time:', error);
      return 'Invalid time';
    }
  }

  function formatDuration(timeStr) {
    try {
      const [hours, minutes, seconds] = timeStr.split(':').map(Number);
      if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || hours < 0 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
        return 'Invalid duration';
      }
      const duration = { hours, minutes, seconds };
      return formatDurationFn(duration, {
        format: ['hours', 'minutes', 'seconds'],
        delimiter: ' and '
      }) || '0 minutes';
    } catch (error) {
      console.error('Error formatting duration:', error);
      return 'Invalid duration';
    }
  }

  return (
    <>
      <Header />
      <div className="cart-wrapper bg-light min-vh-100 py-4">
        <div className="container">
          <div className="mb-3 mt-3">
            <Link className="breadcrumb_parent" to="/">Home</Link> - <span className="breadcrumb_child">Cart</span>
          </div>

          <div className="alert alert-light align-items-center gap-2 mt-5 " role="alert">
           <center>
             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,128a79.85,79.85,0,0,0-27.95-60.68L173,28.43A20,20,0,0,0,153.32,12H102.68A20,20,0,0,0,83,28.43L76,67.32a79.84,79.84,0,0,0,0,121.36l7,38.89A20,20,0,0,0,102.68,244h50.64A20,20,0,0,0,173,227.57l7.05-38.89A79.85,79.85,0,0,0,208,128ZM106,36h44l2.9,16a79.76,79.76,0,0,0-49.76,0Zm44,184H106l-2.9-16a79.76,79.76,0,0,0,49.76,0Zm-22-36a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,184Zm40-56a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V100a12,12,0,0,1,24,0v16h16A12,12,0,0,1,168,128Z"></path></svg>
           <span> We guarantee your booking for the next 30:00 min</span>
           </center>
          </div>

          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-danger position-relative">
              Cart Items
              <span className="badge bg-white text-danger ms-2">{totalItems}</span>
            </button>
          </div>

          <div className="row g-4">
            {/* Cart Items Section */}
            <div className="col-lg-8">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-4">
                <h4 className="mb-2 mb-sm-0 align-items-center d-flex">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M8.40002 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.51003C4.00003 22 3.24002 19.99 3.54002 17.53L4.44003 10.03C4.66003 8.09 5.00002 6.5 8.40002 6.5Z" stroke="#1A141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8" stroke="#1A141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.41 17.0298H8" stroke="#1A141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span> &nbsp; Cart( Items )</span>
                </h4>
                <span className="text-muted">{cartItems.length} items</span>
              </div>

              <div className="d-flex flex-column gap-3">
                {cartItems.map((item, index) => (
                  <div key={index} className="product-card p-3 shadow-sm rounded bg-white">
                    
                    <div className="row align-items-center">
                      <div className="col-4 col-md-2">
                        <img src={item.img} alt={item.name} className="img-fluid rounded" />
                      </div>
                      <div className="col-8 col-md-4">
                        <h6 className="mb-1">{item.name}</h6>
                        <p className="text-muted small mb-1">{item.description}</p>
                      </div>
                      <div className="col-12 col-md-3 mt-2 mt-md-0">
                     <Link to="/edit-cart" className='text-decoration-none'>
                     <i class="bi bi-pencil-square"></i>
                     <span>  Edit</span>
                     </Link>
                      </div>
                      <div className="col-6 col-md-2  mt-md-0">
                        
                      </div>
                      <div className="col-6 col-md-1 text-end">
                        <button className="btn btn-link text-danger p-0" onClick={() => removeItem(index)}>
                          <i className="bi bi-trash fs-5"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <p><i class="bi bi-people"></i> &nbsp; Booked for: {item.travelers.adults} Adults, {item.travelers.children} Children, {item.travelers.infants} Infant</p><hr />
                      <p><i class="bi bi-calendar3"></i> &nbsp; Travel date: {formatDate(item.date)} </p><hr />
                      <p className='StartingTime'><i class="bi bi-watch"></i> &nbsp; Starting time: <strong>{formatTimeToAmPm(item.time)}</strong></p><hr />
                      <p><i class="bi bi-clock"></i> &nbsp; Duration: <strong> {formatDuration(item.duration)}</strong></p><hr />
                      <p><i class="bi bi-check-circle-fill text-success"></i> &nbsp; <strong>Free cancelation:</strong>Before 06:00 am, Friday, May 23, 2025</p><hr />
                     <div className="d-flex justify-content-between gap-2 text_16 font-rubik py-2 cart-product-subtotal">
                     <p>Sub Total: </p>
                     <p className="text-end text-md-end mt-2"> <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
                     </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Section */}
            <div className="col-lg-4">
              <div className="summary-card p-4 shadow-sm rounded bg-white ">
                <h5 className="mb-4">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>${total.toFixed(2)}</strong>
                </div>

                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Promo code" />
                  <button className="btn btn-outline-secondary">Apply</button>
                </div>

                <button className="btn btn-primary w-100 mb-2">Proceed to Checkout</button>
                <div className="text-center">
                  <small className="text-muted">
                    <i className="bi bi-shield-check text-success me-1"></i>Secure checkout
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
