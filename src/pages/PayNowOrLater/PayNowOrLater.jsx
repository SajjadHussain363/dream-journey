import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import "./PayNowOrLater.css";
import PayNowOrLaterCompo from '../../components/PayNowOrLaterCompo/PayNowOrLaterCompo';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';
import LoginRegisterCheckoutForm from '../../components/ LoginRegisterCheckoutForm/ LoginRegisterCheckoutForm';
import BookingSummaryCard from '../../components/BookingSummaryCard/BookingSummaryCard';
import AddressInformation from '../../components/CheckOutRegistrationFormMix/AddressInformation';
import GuestForm from '../../components/GuestForm/GuestForm';
import BookingConfirmation from '../../components/BookingConfirmation/BookingConfirmation';


const PayNowOrLater = () => {
    return (
    <>
        <div className='PayNowOrLaterWrapper'>
            <Header />
            
            <Container>
                <Row>
                    <Col md="6">
                        <PayNowOrLaterCompo />
                        <LoginRegisterCheckoutForm className='mt-5' /> <br />
                        <GuestForm className='mt-5' /> <br />
                        <BookingConfirmation className='mt-5' />
                    </Col>
                    <Col md="6">
                       <BookingSummaryCard />
                       <AddressInformation className='mt-5' />
                      
                        </Col>
                </Row>
               
            </Container>
            <GetOffersDeals />
            <Footer />
        </div>
    </>
    );
};

export default PayNowOrLater;