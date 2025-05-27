import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { GET } from '../../apicController/apiController';

import './Customers.css';

function Customers() {

    const [fethingData, setFetchingData] =  useState();
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState();


    useEffect(()=>{
        fetchProfileData();
    },[]);
    


    const fetchProfileData = async ()=>{
        try {
            setFetchingData(true);
            var response = await GET("profile");   
            setFormData(response);
            setFetchingData(false);
        } catch (error) {
            console.log(error);
            setFetchingData(false);
        } finally {
            setFetchingData(false);
        }
    };


    

    const [originalData, setOriginalData] = useState(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        setOriginalData(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(originalData);
        setIsEditing(false);
    };

    return (
        <div className='customers-wrappers'>
            <Header />
            <Container>
            <Row>
                    <Col md={12}>
                        <div className="cs_breadcrub mt-5">
                            <Link className="breadcrumb_parent" to="/">Home</Link> - <span className="breadcrumb_child">Account</span>
                        </div>

                        <div className="customers-wrapper">
                            <div className="Customer_headings mt-3">
                                <h6 className="heading-primary">Account Details</h6>
                                <p className="body-text-XS mb-0 pt-1">
                                    Manage your account details, preferences and communication settings.
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 mb-5">
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="profile" title="Profile">
                                    <div className="tab-contentInnerOne mt-3">

                                        <div className="editBtn mb-4" onClick={handleEdit}>
                                            ✏️ Edit personal details
                                        </div>

                                        {isEditing ? (
                                            <div className="edit-form">
                                                <div className="row gy-2 pt-2">
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            className="form-control"
                                                            value={formData.first_name}
                                                            onChange={handleChange}
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            className="form-control"
                                                            value={formData.last_name}
                                                            onChange={handleChange}
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            className="form-control"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            placeholder="Phone"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-control"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-3 d-flex gap-3">
                                                    <button className="update-btn" onClick={handleUpdate}>Update</button>
                                                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                            {fethingData ? <>Loader aithy laaao...</> : <>
                                            <h4>{formData?.first_name} {formData?.last_name}</h4>
                                                <div className="row gy-2 pt-2">
                                                    <div className="col-md-6 medium-text-normal">Phone: {formData?.phone}</div>
                                                    <div className="col-md-6 medium-text-normal">Email: {formData?.email}</div>
                                                </div>
                                            
                                            </>}
                                                
                                            </>
                                        )}
                                    </div>

                                    <div className="tab-contentInnerOne mt-4">
                                        <div className="p-2 pt-0">
                                            <div className="special-tags pb-3">Communication Preference</div>
                                            <div className="pt-2 d-flex flex-column gap-3">
                                                <label className="position-relative d-flex align-item-center">
                                                    <input type="checkbox" className="customCheckbox" />
                                                    <span className="checkmark" />
                                                    <span className="body-text-XS ps-2">Send me Promotion and Offers</span>
                                                </label>
                                                <label className="position-relative d-flex align-item-center">
                                                    <input type="checkbox" className="customCheckbox" />
                                                    <span className="checkmark" />
                                                    <span className="body-text-XS ps-2">Send me news about travel</span>
                                                </label>
                                                <label className="position-relative d-flex align-item-center">
                                                    <input type="checkbox" className="customCheckbox" />
                                                    <span className="checkmark" />
                                                    <span className="body-text-XS ps-2">Send me booking updates and notifications</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab eventKey="upcomingbooking" title="Upcoming Booking">
                                    <div className="tab-contentInnerOne">
                                    <h4>Active Trips</h4>
                                    <p>Records Not Found</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="pastbooking" title="Past Booking">
                                    <div className="tab-contentInnerOne">
                                        <h4>Past Trips</h4>
                                        <p>Records Not Found</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="refunds" title="Refunds">
                                    <div className="tab-contentInnerOne">
                                    <h4>Refunds</h4>
                                    <p>Records Not Found</p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            <Footer />
        </div>
    );
}

export default Customers;
