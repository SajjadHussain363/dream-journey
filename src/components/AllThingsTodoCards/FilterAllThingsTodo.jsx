import React, { useState } from 'react';
import './FilterAllThingsTodo.css';

const FilterAllThingsTodo = () => {
    // Tags input logic
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

    // Filters
    const categories = [
        'ATV/Quad Tour', 'Adrenaline/ Extreme', 'Adventure', 'Air/Helicopter Tour',
        'Amusement Park', 'Arts/Culture', 'Bus Tour', 'City Tour', 'Culinary',
        'Cultural/Theme Tours', 'Day Trips/Excursion', 'Diving/Snorkelling'
    ];

    const destinations = ['Abu Dhabi', 'Dubai', 'Fujairah', 'Sharjah', 'Ras Al Khaimah'];

    const themes = [
        'Adult only', 'Beach', 'Eco friendly', 'Couples', 'Family friendly', 'Group friendly',
        'Indoor', 'Luxury', 'Outdoor', 'Private experiences', 'Pet friendly', 'Romantic Getaway',
        'Wellness retreat', 'Adventure activities', 'Cultural immersion', 'Historical sites',
        'Festival events', 'Scenic views', 'Culinary experiences', 'Spiritual retreats'
    ];

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

    const handleCheckboxChange = (section, item) => {
        setFilters({
            ...filters,
            [section]: {
                ...filters[section],
                [item]: !filters[section][item],
            },
        });
    };

    const resetAllFilters = () => {
        setFilters({
            ProductType: { Tours: false, Activities: false, Attractions: false },
            Categories: {},
            Destinations: {},
            Themes: {},
            Duration: {},
        });
    };

    const renderCheckboxes = (section, items) => (
        items.map((item, idx) => (
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
        ))
    );

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
                <button
                    className="FilterResultWrapper__reset-btn"
                    onClick={() => setTags([])}
                >
                    Reset Filters
                </button>
            </div>
            <div className='FilterResultWrapper__hr'></div>
            <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
                {[
                    { id: 'One', label: 'Product Type', items: Object.keys(filters.ProductType), section: 'ProductType' },
                    { id: 'Two', label: 'Categories', items: categories, section: 'Categories' },
                    { id: 'Three', label: 'Destinations', items: destinations, section: 'Destinations' },
                    { id: 'Four', label: 'Themes', items: themes, section: 'Themes' },
                    { id: 'Five', label: 'Duration', items: durations, section: 'Duration' },
                ].map(({ id, label, items, section }) => (
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
                                {renderCheckboxes(section, items)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-end mt-4">
                <button className="FilterResultWrapper__reset-btn" onClick={resetAllFilters}>Clear All</button>
            </div>
        </section>
    );
};

export default FilterAllThingsTodo;
