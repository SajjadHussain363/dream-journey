import React, { useEffect, useState, useCallback, useMemo, useRef} from 'react';
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
import {LocalStorageProvider, useLocalStorageContext } from '../../hooks/LocalStorageContext';





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

    const bookNow = ()=>{
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
                                                                <AvailabilityAccordion key={index} option={option} bookNow={bookNow} onTimeChange={onTimeChange}/>
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