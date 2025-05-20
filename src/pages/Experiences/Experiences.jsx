import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./Experiences.css";
import { Link } from "react-router-dom";
import HeroSectionExp from "../../assets/images/HeroSectionExp.png";
import CommanSlider from '../../components/CommanSlider/CommanSlider';
import Tags from '../../components/Tags/Tags';
import GatwaySection from '../../components/GatwaySection/GatwaySection';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';
import TagCard from "../../components/Tags/TagCards";
import Tag1Pic from "../../assets/images/tags1.png"
import Tag2Pic from "../../assets/images/tags2.png"
import Tag3Pic from "../../assets/images/tags3.png"

import { GET } from "../../apicController/apiController";


// Custom Slider coming from CSD Custom Dynamic Slider page 1 
import CustomDynamicSlider from "../../components/CommanSlider/CustomDynamicSlider";
import slideImage from "../../assets/images/commanslider.png";
import ExploreOurTheme from '../../components/ExploreOurTheme/ExploreOurTheme';
import ExploreAllExperiences from '../../components/ExploreAllExperiences/ExploreAllExperiences';
import Dropdown from '../../components/Dropdown/Dropdown';
const ExperiencesPage = () => {
    

// Custom Slider coming from CSD Custom Dynamic Slider page 2
    const CDSDummyData = [
        {
          image: slideImage,
          title: "Desert Discovery Journey: Red Dunes Desert Safari & BBQ",
          location: "Dubai",
          rating: 5,
          reviews: 3,
          originalPrice: "78.59",
          discountedPrice: "AED 63.99",
          options: 1,
        },
        {
          image: slideImage,
          title: "Evening Desert Safari",
          location: "Abu Dhabi",
          rating: 4,
          reviews: 12,
          originalPrice: "95.00",
          discountedPrice: "AED 70.00",
          options: 2,
        },
        // ...add as many as needed
      ];
      

    
    const tagCardsData = [
        {
            image: Tag1Pic,
            title: 'Tours',
            description: 'Embark on immersive journeys that reveal the heart of every destination.',
            
        },
        {
            image: Tag2Pic,
            title: 'Activities',
            description: 'Dive into adrenaline-pumping adventures and unforgettable local experiences.',
        },
        {
            image: Tag3Pic,
            title: 'Attractions',
            description: 'Discover iconic landmarks and hidden gems that capture the spirit of the UAE.',
            
        },
    ];

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await GET("products", {}, {
              Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
              Accept: "application/json",
            });
    
            if (result && Array.isArray(result.data)) {
              setProducts(result.data);
            } else {
              setError("No product data found.");
            }
          } catch (err) {
            setError("Failed to load products.");
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
    
    return (
        <>
            <Header />
            <div className="HeroSectionExpWrapper text-center">
                <img src={HeroSectionExp} alt="HeroSectionExp" className="img-fluid" style={{width: "100%", height: "auto"}} />
                <div className="headingANDtextExp">
                    <h1>Experiences</h1>
                    <p>Explore our curated list of the best experiences to enjoy in the UAE.</p>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="BreadcrumbsExp mt-4">
                            <Link>Home</Link> -&nbsp; <span>Experiences</span>
                        </div>
                    </Col>
                </Row>
                <CommanSlider />
                <Tags />
                <Row>
                    {tagCardsData.map((card, index) => (
                        <Col md={4} key={index}>
                            <TagCard {...card} />
                        </Col>
                    ))}
                </Row>
            </Container>
           
            <GatwaySection />
            <Container>
                {/* <CustomDynamicSlider /> */}
                {/* // Custom Slider coming from CSD Custom Dynamic Slider page 3 */}
                <CustomDynamicSlider title="Sand & Desert" slides={CDSDummyData} />
                <br />
                <CustomDynamicSlider title="Beach & Cruises" slides={CDSDummyData} />
               
            </Container>
           
            <ExploreOurTheme />
            <ExploreAllExperiences />
            <GetOffersDeals />

            <Footer />


        </>
    )
}

export default ExperiencesPage