import { useState, useRef, useEffect } from 'react';

const AnimatedDropdown = ({ 
  label = "Toggle Dropdown", 
  items = [], 
  className = "", 
  dropdownClassName = "",
  iconPosition = "right"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // SVG Icon component
  const ToggleIcon = () => (
    <span className="flex items-center ml-2">
      <svg 
        stroke="currentColor" 
        fill="none" 
        strokeWidth="2" 
        viewBox="0 0 24 24"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={isOpen ? "M14 17H5" : "M20 7h-9"}></path>
        <path d={isOpen ? "M20 7h-9" : "M14 17H5"}></path>
        <circle cx={isOpen ? "17" : "7"} cy={isOpen ? "17" : "7"} r="3"></circle>
        <circle cx={isOpen ? "7" : "17"} cy={isOpen ? "7" : "17"} r="3"></circle>
      </svg>
    </span>
  );
  
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center justify-between px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {iconPosition === "left" && <ToggleIcon />}
        {label}
        {iconPosition === "right" && <ToggleIcon />}
      </button>
      
      <div 
        className={`absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden transition-all duration-300 ${dropdownClassName} ${
          isOpen 
            ? 'max-h-60 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <ul className="py-1">
          {items.map((item, index) => (
            <li 
              key={index}
              onClick={() => {
                if (item.onClick) item.onClick();
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Example usage
export default function App() {
  const dropdownItems = [
    { label: "Profile", onClick: () => console.log("Profile clicked") },
    { label: "Settings", onClick: () => console.log("Settings clicked") },
    { label: "Help", onClick: () => console.log("Help clicked") },
    { label: "Logout", onClick: () => console.log("Logout clicked") }
  ];

  return (
    <div className="flex flex-col space-y-4 p-8">
      <h2 className="text-lg font-semibold">Animated Dropdown Examples</h2>
      
      <div className="flex space-x-4">
        <AnimatedDropdown 
          label="Menu (Right Icon)" 
          items={dropdownItems} 
        />
        
        <AnimatedDropdown 
          label="Options (Left Icon)" 
          items={dropdownItems}
          iconPosition="left"
        />
      </div>
    </div>
  );
}