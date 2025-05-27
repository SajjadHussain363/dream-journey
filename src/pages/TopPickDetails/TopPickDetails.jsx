import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { GET } from '../../apicController/apiController';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SkeletonComponent from '../../components/Skeleton/Skeleton';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';
import TripAdvisorLogo from '../../assets/images/TripAdvisor_Logo 1.png';
import './TopPickDetails.css';
import Accordion from 'react-bootstrap/Accordion';
import SocialShareIcons from '../../components/SocialShareIcons/SocialShareIcons';
import ClanderDropdownTourDatePicker from '../../components/TopPickDetailsAccordion/ClanderDropdown';
import DropdownChildAdultInfants from '../../components/TopPickDetailsAccordion/DropdownChildAdultInfants';
import AvailabilityAccordion from '../../components/TopPickDetailsAccordion/AvailabilityAccordion';
import SimpleSlider from '../../components/UAEExplorerCarousel/ProductSlider';
import Reviews from '../../components/Reviews/Reviews';
import { LocalStorageProvider, useLocalStorageContext } from '../../hooks/LocalStorageContext';





// Custom hook for image preloading
const useImagePreloader = (imageUrls) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);



    useEffect(() => {
        if (!imageUrls || imageUrls.length === 0) {
            setImagesLoaded(true);
            return;
        }

        let loadedCount = 0;
        const totalImages = imageUrls.length;

        const preloadImages = imageUrls.map((url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = () => {
                    loadedCount++;
                    setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
                    resolve(url);
                };
                img.onerror = () => {
                    loadedCount++;
                    setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
                    resolve(null);
                };
            });
        });

        Promise.all(preloadImages)
            .then(() => {
                setImagesLoaded(true);
            })
            .catch(() => {
                // In case of errors, still consider images as loaded
                setImagesLoaded(true);
            });
    }, [imageUrls]);

    return { imagesLoaded, loadingProgress };
};

const TopPickDetails = ({ apiData }) => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [selectedTravelers, setSelectedTravelers] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [callingApi, setCallingApi] = useState(false);
    const [showError, setShowError] = useState(false);
    const [optionsData, setOptionsData] = useState([]);
    const [selectedTime, onTimeChange] = useState();


    // Extract image URLs with useMemo to prevent unnecessary recalculations
    const imageUrls = useMemo(() => images.map(item => item.image), [images]);

    // Use the custom preloader hook
    const { imagesLoaded, loadingProgress } = useImagePreloader(imageUrls);
    const { storedValue, setValue, getCount } = useLocalStorageContext();

    useEffect(() => {
        const loadData = async () => {
            try {
                // Fetch product details and images in parallel for better performance
                const [productRes, imagesRes] = await Promise.all([
                    GET(`products/details?product_uid=${slug}`),
                    GET(`products/images?product_uid=${slug}`)
                ]);

                if (productRes?.data?.length > 0) {
                    setProduct(productRes.data[0]);
                }

                if (Array.isArray(imagesRes.data)) {
                    setImages(imagesRes.data);
                }
            } catch (err) {
                console.error('Error loading product:', err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [slug]);

    // Handle opening the lightbox with proper checks
    const openLightbox = useCallback((index) => {
        if (imagesLoaded) {
            setPhotoIndex(index);
            setLightboxOpen(true);
        }
    }, [imagesLoaded]);

    // Function to format highlights with bullet points
    const renderHighlights = (highlightsText) => {
        if (!highlightsText) return null;

        // Split by asterisks or any common delimiter in your data
        const highlightItems = highlightsText.split('*').filter(item => item.trim().length > 0);

        if (highlightItems.length <= 1) {
            return <p>{highlightsText}</p>;
        }

        return (
            <div className="highlights-section">
                <ul className="highlights-list">
                    {highlightItems.map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                    ))}
                </ul>
            </div>
        );
    };

    const handleCheckAvailability = async () => {
        setShowError(null);
        if (selectedDate === null) {
            setShowError("Please select a Date");
        }
        else if (selectedTravelers.adults === 0 && selectedTravelers.children === 0 && selectedTravelers.infants === 0) {
            setShowError("Please select a Traveler");
        }
        else {
            setCallingApi(true);
            const formattedDate = new Date(selectedDate).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).split('/').join('-');
            var resopnse = await GET(`products/options?productId=15b9bb88-d8a5-11ef-8004-6ed2ba5aa858&date=${formattedDate}&adults=${selectedTravelers.adults}&children=${selectedTravelers.children}&infants=${selectedTravelers.infants}`);
            setOptionsData(resopnse.options);
            console.log(resopnse.options);
            setCallingApi(false);

        }
    }

    const bookNow = () => {
        var allTitle = "";
        optionsData.forEach((item) => {
            allTitle += item.title + ", ";
        });
        const obj = {
            img: imageUrls[0],
            slug: slug,
            title: allTitle,
            travelers: selectedTravelers,
            date: selectedDate,
            time: selectedTime,
            duration: optionsData[0].duration,
            totalAmount: optionsData[0].total_cost,

        };
        setValue(obj);
        navigate("/cart")
    };




    return (
        <div>
            <Header />

            <div className="TopPickDetails-section">
                {loading ? (
                    <SkeletonComponent />
                ) : (
                    <Container>
                        {/* Breadcrumb */}
                        <Row className="mt-5">
                            <div className="container cs_breadcrub">
                                <Link to="/" className="breadcrumb_parent">Home</Link> -{" "}
                                <span className="breadcrumb_parent">Experiences</span> -{" "}
                                <span className="breadcrumb_parent">Sand & Desert</span> -{" "}
                                <span className="breadcrumb_child">{product.name}</span>
                            </div>
                        </Row>

                        {/* Product Info */}
                        <Row>
                            <Col lg={12}>
                                <div className="blog-herosection mt-5">
                                    <div className="d-flex justify-content-between align-items-center PriceHedings">
                                        <h1>{product.name}</h1>
                                        <span className="cutPrice d-flex align-items-center">
                                            <span>AED {product.price}&nbsp;</span>
                                            <del>AED {parseFloat(product.price) + 50}</del> / <small className="persns">person</small>
                                        </span>
                                    </div>

                                    {/* Reviews and Cancellation */}
                                    <div className="reviewsTrip my-3">
                                        <div className="d-flex align-items-center gap-2 userReview">
                                            <img src={TripAdvisorLogo} alt="TripAdvisor" style={{ width: "140px" }} className="d-none d-sm-block" />
                                            <p>{product.reviews_count} Reviews</p>
                                        </div>

                                    </div>

                                    {/* Reserve Now  and Free Cancellation */}
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <div className='col-lg-4 col-12 blackBtn d-flex gap-sm-3 gap-1 justify-content-sm-start justify-content-center align-items-center '>
                                            <div className='TDS_ResurveNowbtn'>Reserve Now: {product.is_allow_pay_later ? "Pay Later" : "No"}</div>
                                            <div className='TDS_ResurveNowbtn d-flex align-items-center gap-2'><i className="bi bi-check-circle"></i> Free Cancellation: {product.free_cancellation ? "Yes" : "No"}</div>
                                        </div>
                                        <div className='col-xl-8 d-lg-flex gap-3 align-items-center justify-content-xl-end order-6 d-none'>
                                            <button className="TPD_BookNowbtn">Book Now</button>
                                        </div>
                                    </div>

                                    {/* Image Gallery - Optimized Version */}
                                    {imageUrls.length > 0 && (
                                        <div className="tourLandGrid rounded-4 overflow-hidden mt-4  position-relative ">
                                            {/* Loading Indicator */}
                                            {!imagesLoaded && (
                                                <div className="image-loading-indicator">
                                                    <div className="progress mb-3">
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: `${loadingProgress}%` }}
                                                            aria-valuenow={loadingProgress}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        >
                                                            {loadingProgress}%
                                                        </div>
                                                    </div>
                                                    <p className="text-center">Loading images...</p>
                                                </div>
                                            )}

                                            <div className="d-flex flex-lg-row flex-column gap-3">
                                                <div className="col-lg-6">
                                                    {imageUrls[0] && (
                                                        <div className="main-image-container position-relative">
                                                            <img
                                                                src={imageUrls[0]}
                                                                alt="Main"
                                                                className="_main_image_4xybo_1"
                                                                width="100%"
                                                                onClick={() => openLightbox(0)}
                                                                style={{
                                                                    cursor: imagesLoaded ? 'pointer' : 'wait',
                                                                    opacity: imagesLoaded ? 1 : 0.7,
                                                                    transition: 'opacity 0.3s ease'
                                                                }}
                                                            />
                                                            {!imagesLoaded && (
                                                                <div className="position-absolute top-50 start-50 translate-middle">
                                                                    <div className="spinner-border text-primary" role="status">
                                                                        <span className="visually-hidden">Loading...</span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="row gy-2">
                                                        {imageUrls.slice(1, 5).map((img, idx) => (
                                                            <div className="col-6" key={idx}>
                                                                <div className="thumbnail-container position-relative">
                                                                    <img
                                                                        src={img}
                                                                        alt={`Sub ${idx + 1}`}
                                                                        className="_sub_image_4xybo_8"
                                                                        style={{
                                                                            width: '100%',
                                                                            cursor: imagesLoaded ? 'pointer' : 'wait',
                                                                            opacity: imagesLoaded ? 1 : 0.7,
                                                                            transition: 'opacity 0.3s ease'
                                                                        }}
                                                                        onClick={() => openLightbox(idx + 1)}
                                                                    />
                                                                    {!imagesLoaded && (
                                                                        <div className="position-absolute top-50 start-50 translate-middle">
                                                                            <div className="spinner-border spinner-border-sm text-primary" role="status">
                                                                                <span className="visually-hidden">Loading...</span>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="TPD_VAllPhotos_wrpper">
                                                    <button onClick={() => openLightbox(0)} disabled={!imagesLoaded}>
                                                        {imagesLoaded ? 'View all photos' : 'Loading photos...'}
                                                    </button>
                                                </div>
                                            </div>


                                        </div>
                                    )}
                                    <Row>
                                        <Col lg={8}>
                                            <div className="TPD_Produc_Extra_DetailsWrapper mt-3">
                                                <div className="d-flex justify-content-md-start justify-content-between align-items-center flex-wrap gap-md-5 gap-">
                                                    <div className="tourLandStaticItem text-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={32}
                                                            height={32}
                                                            viewBox="0 0 32 32"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M15.9998 29.8334C8.36931 29.8334 2.1665 23.6305 2.1665 16C2.1665 8.3695 8.36931 2.16669 15.9998 2.16669C23.6304 2.16669 29.8332 8.3695 29.8332 16C29.8332 23.6305 23.6304 29.8334 15.9998 29.8334ZM15.9998 3.16669C8.9237 3.16669 3.1665 8.92388 3.1665 16C3.1665 23.0762 8.9237 28.8334 15.9998 28.8334C23.076 28.8334 28.8332 23.0762 28.8332 16C28.8332 8.92388 23.076 3.16669 15.9998 3.16669Z"
                                                                fill="#ABA7AF"
                                                                stroke="#ABA7AF"
                                                            />
                                                            <path
                                                                d="M20.7174 20.6773L20.707 20.6704L20.6962 20.6639L16.5631 18.1974C16.563 18.1974 16.563 18.1973 16.5629 18.1973C15.6878 17.6743 15.02 16.491 15.02 15.48V10.0133C15.02 9.74278 15.2495 9.51331 15.52 9.51331C15.7905 9.51331 16.02 9.74278 16.02 10.0133V15.48C16.02 15.8383 16.1615 16.2219 16.3371 16.5305C16.5117 16.8375 16.7686 17.1558 17.0794 17.3374L21.2105 19.8027L21.2104 19.8027L21.2148 19.8052C21.443 19.9383 21.5275 20.2366 21.3852 20.4881C21.276 20.6582 21.1049 20.74 20.9467 20.74C20.8531 20.74 20.7808 20.7195 20.7174 20.6773Z"
                                                                fill="#ABA7AF"
                                                                stroke="#ABA7AF"
                                                            />
                                                        </svg>
                                                        <p className="mb-0">Durations</p>
                                                        <h6>{product.duration} </h6>
                                                    </div>
                                                    <div className="tourLandStaticItem text-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={32}
                                                            height={32}
                                                            viewBox="0 0 32 32"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M30.037 15.0049C30.3693 15.7445 30.2428 16.5757 29.7042 17.19C29.7041 17.1901 29.704 17.1902 29.7039 17.1903L19.6113 28.6562C19.6112 28.6562 19.6112 28.6563 19.6111 28.6563C19.2161 29.1046 18.6613 29.34 18.0931 29.34C17.8452 29.34 17.5971 29.297 17.3593 29.2108C16.5583 28.9109 16.0465 28.1664 16.0465 27.3067V18.7067V18.2067H15.5465H12.4265C11.6108 18.2067 10.9089 17.7496 10.5759 17.0084C10.2436 16.2688 10.3701 15.4375 10.9088 14.8233C10.9089 14.8232 10.9089 14.8231 10.909 14.8231L21.0012 3.35769C21.0013 3.35757 21.0014 3.35744 21.0015 3.35732C21.5728 2.71083 22.4458 2.49022 23.2461 2.79969L23.2461 2.79972L23.2516 2.80176C24.0537 3.10122 24.5664 3.84617 24.5664 4.70667V13.3067V13.8067H25.0664H28.1865C29.0021 13.8067 29.704 14.2637 30.037 15.0049ZM17.7176 28.2948L17.8931 27.8267L17.7176 28.2948C17.884 28.3572 18.4339 28.5058 18.8584 28.0066L28.9468 16.5322C28.9471 16.5318 28.9475 16.5315 28.9478 16.5311C29.3556 16.0713 29.1924 15.5846 29.126 15.4297C29.0537 15.2609 28.7892 14.8067 28.1731 14.8067H24.0531C23.7826 14.8067 23.5531 14.5772 23.5531 14.3067V4.70667C23.5531 4.1093 23.1341 3.84011 22.9243 3.74898C22.8423 3.70662 22.7636 3.6881 22.715 3.67884C22.644 3.6653 22.572 3.66 22.5065 3.66C22.27 3.66 21.9715 3.74353 21.7393 4.02222L11.6527 15.4945C11.6524 15.4949 11.6521 15.4953 11.6517 15.4956C11.244 15.9555 11.4072 16.4421 11.4736 16.597C11.5459 16.7658 11.8104 17.22 12.4265 17.22H16.5465C16.817 17.22 17.0465 17.4495 17.0465 17.72V27.32C17.0465 27.9609 17.5288 28.224 17.7176 28.2948Z"
                                                                fill="#ABA7AF"
                                                                stroke="#ABA7AF"
                                                            />
                                                            <path
                                                                d="M11.3333 5.83331H2C1.72948 5.83331 1.5 5.60384 1.5 5.33331C1.5 5.06279 1.72948 4.83331 2 4.83331H11.3333C11.6039 4.83331 11.8333 5.06279 11.8333 5.33331C11.8333 5.60384 11.6039 5.83331 11.3333 5.83331Z"
                                                                fill="#ABA7AF"
                                                                stroke="#ABA7AF"
                                                            />
                                                            <path
                                                                d="M10 27.6667H2C1.45333 27.6667 1 27.2134 1 26.6667C1 26.12 1.45333 25.6667 2 25.6667H10C10.5467 25.6667 11 26.12 11 26.6667C11 27.2134 10.5467 27.6667 10 27.6667Z"
                                                                fill="#ABA7AF"
                                                            />
                                                            <path
                                                                d="M6 17H2C1.45333 17 1 16.5467 1 16C1 15.4533 1.45333 15 2 15H6C6.54667 15 7 15.4533 7 16C7 16.5467 6.54667 17 6 17Z"
                                                                fill="#ABA7AF"
                                                            />
                                                        </svg>
                                                        <p className="mb-0">Confirmation</p>
                                                        <h6> {product.is_instant_confirmation ? 'Instant' : 'Not Instant'}</h6>
                                                    </div>
                                                    <div className="tourLandStaticItem text-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={32}
                                                            height={32}
                                                            viewBox="0 0 32 32"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M22.6528 12.4466H9.34619C9.07567 12.4466 8.84619 12.2171 8.84619 11.9466C8.84619 11.6761 9.07567 11.4466 9.34619 11.4466H22.6528C22.9234 11.4466 23.1528 11.6761 23.1528 11.9466C23.1528 12.2171 22.9234 12.4466 22.6528 12.4466Z"
                                                                fill="#ABA7AF"
                                                                stroke="#ABA7AF"
                                                            />
                                                            <path
                                                                d="M16 12.4467C15.7295 12.4467 15.5 12.2172 15.5 11.9467V9.70673C15.5 9.4362 15.7295 9.20673 16 9.20673C16.2705 9.20673 16.5 9.4362 16.5 9.70673V11.9467C16.5 12.2172 16.2705 12.4467 16 12.4467Z"
                                                                fill="#ABA7AF"
                                                                stroke="#ABA7AF"
                                                            />
                                                            <path
                                                                d="M9.3335 23.2932C8.78683 23.2932 8.3335 22.8399 8.3335 22.2932C8.3335 21.7465 8.78683 21.2932 9.3335 21.2932C14.2935 21.2932 18.3335 17.0933 18.3335 11.9199C18.3335 11.3733 18.7868 10.9199 19.3335 10.9199C19.8802 10.9199 20.3335 11.3733 20.3335 11.9199C20.3335 18.1999 15.4002 23.2932 9.3335 23.2932Z"
                                                                fill="#ABA7AF"
                                                            />
                                                            <path
                                                                d="M22.667 23.2933C20.0403 23.2933 17.6003 21.9867 15.8136 19.6001C15.4803 19.1601 15.5737 18.5334 16.0137 18.2001C16.4537 17.8667 17.0803 17.96 17.4136 18.4C18.827 20.2667 20.6937 21.2933 22.6803 21.2933C23.227 21.2933 23.6803 21.7467 23.6803 22.2933C23.6803 22.84 23.2137 23.2933 22.667 23.2933Z"
                                                                fill="#ABA7AF"
                                                            />
                                                            <path
                                                                d="M19.9998 30.3334H11.9998C4.75984 30.3334 1.6665 27.24 1.6665 20V12C1.6665 4.76002 4.75984 1.66669 11.9998 1.66669H19.9998C27.2398 1.66669 30.3332 4.76002 30.3332 12V20C30.3332 27.24 27.2398 30.3334 19.9998 30.3334ZM11.9998 3.66669C5.85317 3.66669 3.6665 5.85335 3.6665 12V20C3.6665 26.1467 5.85317 28.3334 11.9998 28.3334H19.9998C26.1465 28.3334 28.3332 26.1467 28.3332 20V12C28.3332 5.85335 26.1465 3.66669 19.9998 3.66669H11.9998Z"
                                                                fill="#ABA7AF"
                                                            />
                                                        </svg>
                                                        <p className="mb-0">Languages</p>
                                                        <h6 className="text-nowrap">{product.languages.join(' / ')}</h6>
                                                    </div>
                                                    <div className="tourLandStaticItem text-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ABA7AF" class="bi bi-calendar4" viewBox="0 0 16 16">
                                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                                        </svg>
                                                        <p className="mb-0">Availability</p>
                                                        <h6 className="text-nowrap">{product.availability}</h6>
                                                    </div>
                                                    <div className="tourLandStaticItem text-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ABA7AF" class="bi bi-car-front" viewBox="0 0 16 16">
                                                            <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276" />
                                                            <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.8.8 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155s4.037-.084 5.592-.155A1.48 1.48 0 0 0 15 9.611v-.413q0-.148-.03-.294l-.335-1.68a.8.8 0 0 0-.43-.563 1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3z" />
                                                        </svg>
                                                        <p className="mb-0">Pickup Details</p>
                                                        <h6 className="text-nowrap">{product.pickup_details || 'N/A'}</h6>
                                                    </div>
                                                </div>

                                            </div>
                                            
                                        </Col>
                                        <Col lg={4}>
                                            <div className='wishlistAndShareBtn d-flex align-items-end flex-column  mt-3'>
                                                <div className="shareButtons d-flex align-items-center  gap-3">
                                                    <div className="shareButtonsItem">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" className="iconItem" height="20" viewBox="0 0 28 28" fill="none"><path d="M14.7233 24.2784C14.3266 24.4184 13.6733 24.4184 13.2766 24.2784C9.89325 23.1234 2.33325 18.305 2.33325 10.1384C2.33325 6.53337 5.23825 3.6167 8.81992 3.6167C10.9433 3.6167 12.8216 4.64337 13.9999 6.23003C15.1783 4.64337 17.0683 3.6167 19.1799 3.6167C22.7616 3.6167 25.6666 6.53337 25.6666 10.1384C25.6666 18.305 18.1066 23.1234 14.7233 24.2784Z" stroke="black" className="iconItem" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </div>
                                                    <div>

                                                        <div className="shareButtonsItem">
                                                            {/* <p><strong>Meta Tags:</strong> {product.meta_tags}</p> */}
                                                            <SocialShareIcons />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                    </Row>

                                    {/* Lightbox Modal - Only render when needed and images are loaded */}
                                    {lightboxOpen && imagesLoaded && imageUrls.length > 0 && (
                                        <Lightbox
                                            mainSrc={imageUrls[photoIndex]}
                                            nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
                                            prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
                                            onCloseRequest={() => setLightboxOpen(false)}
                                            onMovePrevRequest={() => setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)}
                                            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imageUrls.length)}
                                            imageTitle={`Image ${photoIndex + 1} of ${imageUrls.length}`}
                                            enableZoom={true}
                                        />
                                    )}

                                    {/* Product Details */}
                                    <Row className='mt-5'>
                                        <Col lg={7}>
                                            <div className="mt-4">
                                                {/* Modified Highlights section that parses highlights from API */}
                                                <div>
                                                    <h1 class="heading-primary-sm">Highlights</h1>
                                                    {product.highlights && product.highlights.length > 0 ? (
                                                        <ul className="highlights-list">
                                                            {(() => {
                                                                try {
                                                                    const highlightsArray = Array.isArray(product.highlights)
                                                                        ? product.highlights
                                                                        : JSON.parse(product.highlights);

                                                                    return highlightsArray.map((item, index) => (
                                                                        <li key={index}>{item}</li>
                                                                    ));
                                                                } catch (error) {
                                                                    return <li>{product.highlights}</li>;
                                                                }
                                                            })()}
                                                        </ul>
                                                    ) : (
                                                        <p>No highlights available</p>
                                                    )}

                                                </div>
                                                <h1 class="heading-primary-sm mt-5 mb-5">Tour Details</h1>

                                                <Accordion defaultActiveKey="0">
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header><strong>Overview:</strong></Accordion.Header>
                                                        <Accordion.Body>
                                                            {product.short_description}
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    {product.what_you_can_expect && (
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header><strong>What You Can Expect:</strong></Accordion.Header>
                                                            <Accordion.Body>
                                                                <div dangerouslySetInnerHTML={{ __html: product.what_you_can_expect }} />
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    )}

                                                    {product.exclusions?.length > 0 && (
                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header><strong>What’s not included:</strong></Accordion.Header>
                                                            <Accordion.Body>
                                                                <ul>
                                                                    {product.exclusions.map((item, index) => (
                                                                        <li key={index}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    )}

                                                    {product.inclusions?.length > 0 && (
                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header><strong>What’s is included:</strong></Accordion.Header>
                                                            <Accordion.Body>
                                                                <ul>
                                                                    {product.inclusions.map((item, index) => (
                                                                        <li key={index}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    )}

                                                    <Accordion.Item eventKey="4">
                                                        <Accordion.Header><strong>Duration:</strong></Accordion.Header>
                                                        <Accordion.Body>
                                                            {product.duration}
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    {/* Meeting Point Accordion */}
                                                    <Accordion.Item eventKey="5">
                                                        <Accordion.Header><strong>Meeting Point</strong></Accordion.Header>
                                                        <Accordion.Body>
                                                            {product.meeting_point_lat && product.meeting_point_long ? (
                                                                <div style={{ height: '300px', width: '100%' }}>
                                                                    <iframe
                                                                        width="100%"
                                                                        height="100%"
                                                                        frameBorder="0"
                                                                        style={{ border: 0 }}
                                                                        src={`https://www.google.com/maps?q=${product.meeting_point_lat},${product.meeting_point_long}&hl=en&z=14&output=embed`}
                                                                        allowFullScreen
                                                                        title="Meeting Point Map"
                                                                    ></iframe>
                                                                </div>
                                                            ) : (
                                                                <p>No meeting point location available.</p>
                                                            )}
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="6">
                                                        <Accordion.Header><strong>Know before you book:</strong></Accordion.Header>
                                                        <Accordion.Body>
                                                            {product.additional_information ? (
                                                                <div dangerouslySetInnerHTML={{ __html: product.additional_information }} />
                                                            ) : (
                                                                <p>No additional information available.</p>
                                                            )}
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    {product.not_suitable_for?.length > 0 ? (
                                                        <Accordion.Item eventKey="7">
                                                            <Accordion.Header><strong>Not Suitable For:</strong></Accordion.Header>
                                                            <Accordion.Body>
                                                                <ul>
                                                                    {product.not_suitable_for.map((item, index) => (
                                                                        <li key={index}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    ) : (
                                                        <Accordion.Item eventKey="8">
                                                            <Accordion.Header><strong>Not Suitable For:</strong></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>No specific exclusions provided.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    )}

                                                    {product.custom_cancellation_policy_details && (
                                                        <Accordion.Item eventKey="9">
                                                            <Accordion.Header><strong>Custom Cancellation Policy Details:</strong></Accordion.Header>
                                                            <Accordion.Body>
                                                                {product.custom_cancellation_policy_details.replace(/<[^>]+>/g, '')}
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    )}
                                                </Accordion>


                                            </div>
                                        </Col>

                                        <Col lg={5}>
                                            <div className="AvailibilityTourPackagesWrapprs">
                                                <h1 className='Check_AvailibilityHeadings mb-3'>Availibility & Tour Packages</h1>
                                                <div className='d-flex flex-xl-row flex-lg-column flex-md-row flex-column gap-3 py-3 '>
                                                    <DropdownChildAdultInfants selectedTravelers={setSelectedTravelers} />
                                                    <ClanderDropdownTourDatePicker onDateChnage={setSelectedDate} />
                                                </div>
                                                <div className="pb-3 tourPackages_avaliable_btn">
                                                    {/* Check Availability Button */}
                                                    <div className="pb-3">
                                                        <button
                                                            className="btn btn-rounded-secondary w-100"
                                                            onClick={() => handleCheckAvailability()}
                                                        >
                                                            Check Availability
                                                        </button>
                                                        <div className="mt-3 mb-3">
                                                            {showError && <p className="SelectDate">{showError}</p>}
                                                            {callingApi && <div className="loading-spinner">
                                                                <center>
                                                                    <span>Checking Availability...</span>
                                                                    <div className="spinner-border text-warning" role="status">
                                                                        <span className="sr-only"></span>
                                                                    </div>
                                                                </center>
                                                            </div>}
                                                        </div>
                                                    </div>
                                                    {optionsData.length > 0 ?
                                                        optionsData?.map((option, index) => {
                                                            return (<div>
                                                                <AvailabilityAccordion key={index} option={option} bookNow={bookNow} onTimeChange={onTimeChange} />
                                                            </div>);
                                                        })
                                                        :
                                                        <div className="text-center NoOptionsAvailbl">No options available</div>
                                                    }


                                                </div>
                                                <div className="pt-md-5 pt-sm-3">
                                                    <div className="_needHelpBox_g43kk_1">
                                                        <div className="text_26 font-playfair">Do you need help?</div>
                                                        <div className="text_18 font-rubik py-2 text-Grayscale-Border">Our customer service is available every day to answer your questions.</div>
                                                        <div className="border-top pt-md-5 mt-md-5 mt-3 pt-4"><button className="btn btn-transparent w-100" style={{ borderRadius: "1000px" }}>Chat with Us</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col> {/* Column 5 End */}
                                    </Row>

                                </div>
                            </Col>
                        </Row>
                    </Container>

                )}
                <Container className='overflow-hidden'>
                    <Row>
                        <Col>
                            <SimpleSlider />
                        </Col>
                    </Row>

                </Container>
                <section className='Revies_Wrapper'>
                    <Container>
                        <Row>
                            <Col>
                                <div className="reviewsHeader">
                                    <h1 className="heading-primary text-light">Traveler's Experiences</h1>
                                    <p className="paragraph-primary-sm ">Here some awesome feedback from our travelers</p>
                                </div>
                                <Reviews />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>

            <GetOffersDeals />
            <Footer />
        </div>
    );
};

export default TopPickDetails;