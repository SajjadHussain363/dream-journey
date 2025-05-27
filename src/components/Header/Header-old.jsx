import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import phoneIcon from "../../assets/images/phone.png";
import chatIcon from "../../assets/images/chat.png";
import searchIcon from "../../assets/images/search.png";
import logo from "../../assets/images/logo.png";
import loginIcon from "../../assets/images/login.jpg";
import "../Header/Header.css";
import { Link } from 'react-router-dom';
import { useLocalStorageContext } from '../../hooks/LocalStorageContext';


const Header = () => {
  const navStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#f69d1d" : "#000",
  });

  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const { storedValue, setValue, getCount } = useLocalStorageContext();

  return (
    <div className={`headertops ${scrolled ? 'scrolled' : ''}`}>
      <div className="mainWrpperHeader bgColor text-white py-1 px-3 d-none d-lg-flex justify-content-between align-items-center small">
        <div className="d-flex align-items-center zindexshow">
          <img src={phoneIcon} alt="phone" className='HeaderPhoneImage' />
          <NavLink to="tel:+97142959630" className='FontBoldNumber text-white'>+971 4 29 59 630</NavLink>
          <div className="ms-4 me-2 d-flex" />
          <NavLink to="/chat" className="text-white FontBoldNumber">
            <img src={chatIcon} alt="chat" className='HeaderChatIcon' /> Chat with us
          </NavLink>
        </div>
        <div className='navLinksTop'>
          <NavLink to="/mice360" className="text-white me-3">MICE360</NavLink>
          <NavLink to="/about" className="text-white me-3">About Us</NavLink>
          <NavLink to="/contact-us" className="text-white">Help Center</NavLink>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg navbar-light ${scrolled ? 'header scrolled' : 'header'} py-3 px-4`}>
        <NavLink to="/" className="navbar-brand fw-bold text-uppercase">
          <img src={logo} alt="logo" className="HeaderLogo" />
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto my-2 my-lg-0 d-flex align-items-center bg-body-tertiary p-2 rounded-pill shadow-sm flex-lg-row flex-column">
            <li className="nav-item"><NavLink className="nav-link px-3" style={navStyle} to="/experiences">Experiences</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link px-3" style={navStyle} to="/things-to-do">Things to do</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link px-3" style={navStyle} to="/blog">Travel Blog</NavLink></li>
            <li className="nav-item mt-2 mt-lg-0">
              <button className="btn SearchBtn text-white ms-lg-2">
                <img src={searchIcon} alt="search" className="HeaderSearchImage" />
              </button>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto align-items-lg-center flex-lg-row flex-column mt-3 mt-lg-0">
            <li className="nav-item d-lg-none text-center mb-2">
              <span className="d-block text-dark small">+971 4 29 59 630</span>
              <span className="d-block text-dark small">Chat with us</span>
            </li>
            <li className="nav-item d-lg-none text-center mb-2">
              <NavLink to="/blog" className="nav-link text-dark">Travel Blog</NavLink>
              <NavLink to="/about" className="nav-link text-dark">About Us</NavLink>
              <NavLink to="/contact-us" className="nav-link text-dark">Help Center</NavLink>
            </li>
            <li className="nav-item position-relative me-lg-3">
              <Link to="/cart">
                <span className="CounterHeader position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{getCount()}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M8.40002 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.51003C4.00003 22 3.24002 19.99 3.54002 17.53L4.44003 10.03C4.66003 8.09 5.00002 6.5 8.40002 6.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.41 17.0298H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>

            {/* Login Button with Dropdown */}
            <li className="nav-item HeaderLogin d-flex position-relative" ref={dropdownRef}>
              <div onClick={() => setDropdownOpen(!dropdownOpen)} className="d-flex align-items-center cursor-pointer">
                <Link className='d-flex align-items-center'>
                <img src={loginIcon} alt="login" className="HeaderLoginImage" height={30} />
                <span className="text-white d-flex mt-2 mt-lg-0">Login</span>
                </Link>
              </div>

              {dropdownOpen && (
                <div className="dropdown-box">
                  <div className="dropdown-item"><Link to="/customers">Profile</Link></div>
                  <div className="dropdown-item"><Link to="/customers">Upcoming Bookings</Link></div>
                  <div className="dropdown-item"><Link to="/customers">Past Bookings</Link></div>
                  <div className="dropdown-item"><Link to="/customers">Refunds</Link></div>
                  <div className="dropdown-item"><Link to="/customers"><i class="bi bi-box-arrow-in-left"></i> Logout</Link></div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
