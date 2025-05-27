import React from 'react';
import Home from '../pages/Home/Home';
import ExperiencesPage from '../pages/Experiences/Experiences';
import ThingsToDo from '../pages/ThingsToDo/ThingsToDo';
import ProductsPage from '../pages/Products/ProductsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About/About';
import BlogDetail from '../components/Blog/BlogDetail';
import Blog from '../pages/TravelBlogs/TravelBlogs';
import Destinations from '../pages/Destinations/Destinations';
import Login from '../pages/Login/Login';
import BlogDetails from '../components/Blog/BlogDetail';
import Register from '../pages/Register/Register';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from '../pages/TermsConditions/TermsConditions';
import Legal from '../pages/Legal/Legal';
import Contact from '../pages/Contact/Contact';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import TopPickDetails from '../pages/TopPickDetails/TopPickDetails';
import Customers from '../pages/Customers/Customer';
import Cart from '../pages/Cart/Cart';
import CheckoutLogin from '../pages/checkout-login/checkoutLogin';
import Checkout from '../pages/checkout/checkout';

const Index = () => {
  return (
   
    <React.Fragment>
    <ScrollToTop />
     <Routes>
      <Route path="/" Component={Home} />
      <Route path="/experiences" Component={ExperiencesPage} />
      <Route path="/things-to-do" Component={ThingsToDo} />
      <Route path="/products" Component={ProductsPage} />
      <Route path="/about" Component={About} />
      <Route path="/blog" Component={Blog} />
      <Route path="/blogs/:slug" element={<BlogDetail />} />
      <Route path="/destinations/:cityName" Component={Destinations} />
      <Route path="/login" Component={Login} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/register" Component={Register} />
      <Route path="/privacy-policy" Component={PrivacyPolicy} />
      <Route path="/terms-conditions" Component={TermsConditions} />
      <Route path="/legal" Component={Legal} />
      <Route path="/contact-us" Component={Contact} />
      <Route path="/top-pick-details/:slug" Component={TopPickDetails} />
      <Route path="/customers" Component={Customers} />
      <Route path="/cart" Component={Cart} />
      <Route path="/checkout-login" Component={CheckoutLogin} />
      <Route path="/checkout" Component={Checkout} />

      
    
     </Routes>
  </React.Fragment>
    );
  };
  
  export default Index;
  