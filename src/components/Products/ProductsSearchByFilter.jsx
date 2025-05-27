import React, { useState, useEffect } from "react";
import "./ProductsSearchByFilter.css";
import { GET } from "../../apicController/apiController";

const ProductsSearchByFilter = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [currency, setCurrency] = useState("AED");
  const [priceRange, setPriceRange] = useState({ min: 80, max: 2000 });

  const [categories, setCategories] = useState([]);
  const [themes, setThemes] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingThemes, setLoadingThemes] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await GET("categories", {}, {
          Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
          Accept: "application/json",
        });

        if (result && Array.isArray(result.data)) {
          setCategories(result.data.map((item) => item.name));
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    const fetchThemes = async () => {
      try {
        const result = await GET("themes", {}, {
          Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
          Accept: "application/json",
        });

        if (result && Array.isArray(result.data)) {
          setThemes(result.data.map((item) => item.name));
        }
      } catch (error) {
        console.error("Error fetching themes:", error);
      } finally {
        setLoadingThemes(false);
      }
    };


    const fetchProducts = async () => {
      try {
        const result = await GET("products", {}, {
          Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
          Accept: "application/json",
        });

        if (result && Array.isArray(result.data)) {
          setThemes(result.data.map((item) => item.name));
        }
      } catch (error) {
        console.error("Error fetching Products:", error);
      } finally {
        setLoadingProducts(false);
      }
    };




    fetchCategories();
    fetchThemes();
    fetchProducts();
  }, []);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const resetAll = () => {
    setSelectedTags([]);
    setCurrency("AED");
    setPriceRange({ min: 80, max: 2000 });
  };

  const filterSection = (title, items, sectionId) => (
    <div className="accordion-item" key={sectionId}>
      <h2 className="accordion-header" id={`heading-${sectionId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${sectionId}`}
          aria-expanded="false"
          aria-controls={`collapse-${sectionId}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse-${sectionId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${sectionId}`}
      >
        <div className="accordion-body">
          {items.length > 0 ? (
            items.map((item, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`${sectionId}-${item}`}
                  onChange={() => toggleTag(item)}
                  checked={selectedTags.includes(item)}
                />
                <label className="form-check-label" htmlFor={`${sectionId}-${item}`}>
                  {item}
                </label>
              </div>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="ProductsSearchByFilter mt-5 container">
      <div className="Products_SearchByFilter">
        <h2 className="my-4">Search by Filters</h2>
      </div>

      <div className="selected-tags mb-3">
        {selectedTags.map((tag, index) => (
          <span className="badge TgsBG me-2" key={index}>
            {tag}
            <span className="ms-1" style={{ cursor: "pointer" }} onClick={() => toggleTag(tag)}>
              &times;
            </span>
          </span>
        ))}
        {selectedTags.length > 0 && (
          <button className="btn Resetbtn btn-sm ms-2" onClick={resetAll}>Reset All</button>
        )}
      </div>

      <div className="accordion" id="filterAccordion">

        {loadingCategories ? (
          <p>Loading Categories...</p>
        ) : (
          filterSection("Categories", categories, "categories")
        )}

        {loadingThemes ? (
          <p>Loading Themes...</p>
        ) : (
          filterSection("Themes", themes, "themes")
        )}

        {filterSection("Time", [
          "In the morning, 8 AM-12 PM", "In the afternoon, 12 PM-5 PM", "In the evening, 5 PM-12AM"
        ], "time")}

        {filterSection("Point of Interest", [
          "The Palm Jumeirah", "Atlantis, Dubai", "Burj Al Arab", "Burj Khalifa",
          "Dubai Desert Conservation Reserve", "Ain Dubai", "Dubai Spice Souk",
          "Dubai Creek", "Museum of the Future", "Dubai Harbour"
        ], "poi")}

        {/* Price Filter */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading-price">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-price"
              aria-expanded="false"
              aria-controls="collapse-price"
            >
              Price
            </button>
          </h2>
          <div
            id="collapse-price"
            className="accordion-collapse collapse"
            aria-labelledby="heading-price"
          >
            <div className="accordion-body">
              <label>Start Price: {currency} {priceRange.min}</label>
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                className="form-range"
              />
              <label>End Price: {currency} {priceRange.max}</label>
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                className="form-range"
              />
              <label>Select Currency</label>
              <select className="form-select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                {['Dollar', 'Euro', 'AED', 'Pound', 'PKR', 'INR', 'Yuan'].map((cur, i) => (
                  <option key={i} value={cur}>{cur}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filterSection("Languages", ["English", "Arabic", "Hindi", "Urdu"], "languages")}
        {filterSection("Duration", [
          "0-3 hours", "3-5 hours", "5-7 hours", "Full day (7+ hours)"
        ], "duration")}
        {filterSection("Services", [
          "Hotel pickup possible", "Wheelchair accessible", "Small group",
          "Private tour", "Skip the line"
        ], "services")}
      </div>

      <div className="text-end mt-4">
        <button className="Resetbtn me-2" onClick={resetAll}>Reset All</button>
        <button className="ShowResultsBtnFltr">Show Results</button>
      </div>
    </div>
  );
};

export default ProductsSearchByFilter;
