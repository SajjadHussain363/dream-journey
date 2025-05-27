import React, { useState, useEffect } from 'react';
import './FilterAllThingsTodo.css';
import { GET } from "../../apicController/apiController";

const FilterAllThingsTodo = () => {
  const [categories, setCategories] = useState([]);
  const [themes, setThemes] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingThemes, setLoadingThemes] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await GET("categories", {}, {
          Authorization: "Bearer 4|kmudIKPRt4bXIg3B4Vw9d58yipL5gECSv2k1NujOf516758f",
          Accept: "application/json",
        });
        if (result && Array.isArray(result.data)) {
          setCategories(result.data.map(item => item.name));
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
          setThemes(result.data.map(item => item.name));
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
          setProducts(result.data); // You can use product.theme.join from this
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchCategories();
    fetchThemes();
    fetchProducts();
  }, []);

  const destinations = ['Abu Dhabi', 'Dubai', 'Fujairah', 'Sharjah', 'Ras Al Khaimah'];
  const durations = [
    'Quick Activity (1 hour or less)', 'Short Excursion (2-4 hours)', 'Half-day (4-6 hours)',
    'Full-day (up to 10 hours)', 'Day and Night Tour (24 hours)'
  ];

  const [filters, setFilters] = useState({
    ProductType: { Tours: false, Activities: false, Attractions: false },
    Categories: {},
    Destinations: {},
    Themes: {},
    Duration: {},
  });

  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (section, item) => {
    setFilters(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [item]: !prev[section][item],
      },
    }));
  };

  const resetAllFilters = () => {
    setFilters({
      ProductType: { Tours: false, Activities: false, Attractions: false },
      Categories: {},
      Destinations: {},
      Themes: {},
      Duration: {},
    });
    setTags([]);
  };

  const renderCheckboxes = (section, items, loading = false) => {
    if (loading) return <p>Loading...</p>;
    return items.map((item, idx) => (
      <div className="form-check" key={idx}>
        <input
          className="form-check-input"
          type="checkbox"
          id={`${section}-${item}`}
          checked={filters[section][item] || false}
          onChange={() => handleCheckboxChange(section, item)}
        />
        <label className="form-check-label" htmlFor={`${section}-${item}`}>
          {item}
        </label>
      </div>
    ));
  };

  return (
    <section className="FilterResultWrapper">
      <div className="FilterResultWrapper__heading">
        <h4>Filter Results</h4>
      </div>

      <div className="FilterResultWrapper__input-group d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Filter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span className="FilterResultWrapper__search-icon">
          <i className="bi bi-search"></i>
        </span>
      </div>

      <div className="FilterResultWrapper__tags form-control d-flex flex-wrap">
        {tags.map((tag, index) => (
          <div className="FilterResultWrapper__tag" key={index}>
            {tag}
            <span className="FilterResultWrapper__remove" onClick={() => removeTag(index)}>
              &times;
            </span>
          </div>
        ))}
      </div>

      <div className="FilterResultWrapper__reset-btn-wrapper text-end mt-2">
        <button className="FilterResultWrapper__reset-btn" onClick={() => setTags([])}>
          Reset Filters
        </button>
      </div>

      <div className='FilterResultWrapper__hr'></div>

      <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
        {[
          { id: 'One', label: 'Product Type', items: Object.keys(filters.ProductType), section: 'ProductType' },
          { id: 'Two', label: 'Categories', items: categories, section: 'Categories', loading: loadingCategories },
          { id: 'Three', label: 'Destinations', items: destinations, section: 'Destinations' },
          { id: 'Four', label: 'Themes', items: themes, section: 'Themes', loading: loadingThemes },
          { id: 'Five', label: 'Duration', items: durations, section: 'Duration' },
        ].map(({ id, label, items, section, loading }) => (
          <div className="accordion-item" key={id}>
            <h2 className="accordion-header" id={`flush-heading${id}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${id}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${id}`}
              >
                {label}
              </button>
            </h2>
            <div
              id={`flush-collapse${id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading${id}`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {renderCheckboxes(section, items, loading)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-4">
        <button className="FilterResultWrapper__reset-btn" onClick={resetAllFilters}>
          Clear All
        </button>
      </div>
    </section>
  );
};

export default FilterAllThingsTodo;
