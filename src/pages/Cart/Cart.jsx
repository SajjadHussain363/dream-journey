import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Cart.css';

const Cart = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Black | Premium Series',
      price: 129.99,
      discount: 0.2,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Silver | Series 7',
      price: 299.99,
      discount: 0,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Wireless Charger',
      description: 'White | 15W Fast Charge',
      price: 49.99,
      discount: 0,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id, delta) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
      )
    );
  };

  const removeItem = id => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const discount = products.reduce((sum, p) => sum + p.price * p.discount * p.quantity, 0);
  const shipping = 5.0;
  const total = subtotal - discount + shipping;

  return (
    <>
        <div className="cart-wrapper bg-light min-vh-100 mt-5 py-5">
        <Header />
        <div className="container">
            <div className="row g-4">
            <div className="col-lg-8">
                <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">Shopping Cart</h4>
                <span className="text-muted">{products.length} items</span>
                </div>

                <div className="d-flex flex-column gap-3">
                {products.map(p => (
                    <div key={p.id} className="product-card p-3 shadow-sm rounded bg-white">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                        <img src={p.image} alt="Product" className="product-image" />
                        </div>
                        <div className="col-md-4">
                        <h6 className="mb-1">{p.name}</h6>
                        <p className="text-muted mb-0">{p.description}</p>
                        {p.discount > 0 && <span className="discount-badge mt-2 d-inline-block">{p.discount * 100}% OFF</span>}
                        </div>
                        <div className="col-md-3">
                        <div className="d-flex align-items-center gap-2">
                            <button className="quantity-btn" onClick={() => updateQuantity(p.id, -1)}>-</button>
                            <input type="number" className="quantity-input" value={p.quantity} readOnly />
                            <button className="quantity-btn" onClick={() => updateQuantity(p.id, 1)}>+</button>
                        </div>
                        </div>
                        <div className="col-md-2">
                        <span className="fw-bold">${(p.price * p.quantity).toFixed(2)}</span>
                        </div>
                        <div className="col-md-1">
                        <i className="bi bi-trash remove-btn" onClick={() => removeItem(p.id)}></i>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="col-lg-4">
                <div className="summary-card p-4 shadow-sm rounded bg-white sticky-top">
                <h5 className="mb-4">Order Summary</h5>

                <div className="d-flex justify-content-between mb-3">
                    <span className="text-muted">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <span className="text-muted">Discount</span>
                    <span className="text-success">-${discount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <span className="text-muted">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                    <span className="fw-bold">Total</span>
                    <span className="fw-bold">${total.toFixed(2)}</span>
                </div>

                <div className="mb-4">
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code" />
                    <button className="btn btn-outline-secondary">Apply</button>
                    </div>
                </div>

                <button className="btn btn-primary checkout-btn w-100 mb-3">
                    Proceed to Checkout
                </button>
                <div className="d-flex justify-content-center gap-2">
                    <i className="bi bi-shield-check text-success"></i>
                    <small className="text-muted">Secure checkout</small>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    </>
  );
};

export default Cart;
