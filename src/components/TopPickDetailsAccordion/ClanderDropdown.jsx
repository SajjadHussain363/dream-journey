import { useState, useRef, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import './ClanderDropdown.css';

export default function TourDatePicker({onDateChnage}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('days'); // 'days', 'months', 'years'
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [yearRange, setYearRange] = useState([currentYear - 8, currentYear + 3]);
  const [animation, setAnimation] = useState('');
  const calendarRef = useRef(null);

  useEffect(()=>{
    onDateChnage(selectedDate);
  },[selectedDate]);

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        closeCalendar();
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Handle opening and closing with animation
  const toggleCalendar = () => {
    if (isOpen) {
      closeCalendar();
    } else {
      setAnimation('animate-slideDown');
      setIsOpen(true);
    }
  };

  const closeCalendar = () => {
    setAnimation('animate-slideUp');
    setTimeout(() => setIsOpen(false), 200);
  };
  
  // Format date for display
  const formatDate = (date) => {
    if (!date) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Generate days for the current month view
  const generateDays = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    
    const days = [];
    
    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        currentMonth: false,
        date: new Date(currentYear, currentMonth - 1, daysInPrevMonth - i)
      });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      days.push({
        day: i,
        currentMonth: true,
        date,
        isToday: new Date().toDateString() === date.toDateString(),
        isTomorrow: new Date(new Date().setDate(new Date().getDate() + 1)).toDateString() === date.toDateString()
      });
    }
    
    // Next month days to fill the grid
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        currentMonth: false,
        date: new Date(currentYear, currentMonth + 1, i)
      });
    }
    
    return days;
  };

  // Generate months for month selection view
  const generateMonths = () => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return monthNames.map((name, index) => ({
      name,
      index,
      isCurrentMonth: index === new Date().getMonth() && currentYear === new Date().getFullYear()
    }));
  };

  // Generate years for year selection view
  const generateYears = () => {
    const years = [];
    for (let year = yearRange[0]; year <= yearRange[1]; year++) {
      years.push({
        year,
        isCurrentYear: year === new Date().getFullYear()
      });
    }
    return years;
  };

  // Navigate through months
  const changeMonth = (increment) => {
    let newMonth = currentMonth + increment;
    let newYear = currentYear;
    
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // Navigate through years in year view
  const changeYearRange = (increment) => {
    const offset = increment * 12;
    setYearRange([yearRange[0] + offset, yearRange[1] + offset]);
  };

  // Handle day selection
  const selectDate = (date) => {
    setSelectedDate(date);
  };

  // Handle month selection
  const selectMonth = (monthIndex) => {
    setCurrentMonth(monthIndex);
    setViewMode('days');
  };

  // Handle year selection
  const selectYear = (year) => {
    setCurrentYear(year);
    setViewMode('months');
  };

  // Handle "Today" and "Tomorrow" quick selections
  const selectToday = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDate(today);
  };

  const selectTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCurrentMonth(tomorrow.getMonth());
    setCurrentYear(tomorrow.getFullYear());
    setSelectedDate(tomorrow);
  };

  // Handle confirmation
  const confirmSelection = () => {
    closeCalendar();
    // Additional confirmation logic would go here
  };

  // Get the month name
  const getMonthName = (month) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
  };

  return (
    <div className="TPDCalendarWrapper" ref={calendarRef}>
      {/* Input field */}
      <div className="relative widthAdjusts">
        <input
          type="text"
          readOnly
          placeholder="Select tour date"
          value={selectedDate ? formatDate(selectedDate) : ''}
          onClick={toggleCalendar}
        />
        <div className="icon-container">
          <Calendar size={20} />
        </div>
      </div>

      {/* Calendar dropdown */}
      {isOpen && (
        <div className={`calendar-dropdown ${animation}`}>
          {/* Header */}
          <div className="calendar-header">
            {viewMode === 'days' && (
              <>
                <button 
                  className="nav-button"
                  onClick={() => changeMonth(-1)}
                >
                  {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path strokeWidth={2} fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                  </svg>  
                   
                </button>
                
                
                <div className="month-year-display">
                  <button 
                    className="month-year-button"
                    onClick={() => setViewMode('months')}
                  >
                    {getMonthName(currentMonth)}
                  </button>
                  <button 
                    className="month-year-button"
                    onClick={() => setViewMode('years')}
                  >
                    {currentYear}
                  </button>
                </div>
                
                <button 
                  className="nav-button"
                  onClick={() => changeMonth(1)}
                >
                  {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    
                  </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path strokeWidth={2} fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </button>
              </>
            )}
            
            {viewMode === 'months' && (
              <div className="w-full text-center">
                <button 
                  className="month-year-button"
                  onClick={() => setViewMode('years')}
                >
                  {currentYear}
                </button>
              </div>
            )}
            
            {viewMode === 'years' && (
              <>
                <button 
                  className="nav-button"
                  onClick={() => changeYearRange(-1)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="font-semibold">
                  {yearRange[0]} - {yearRange[1]}
                </div>
                
                <button 
                  className="nav-button"
                  onClick={() => changeYearRange(1)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Days of week (only in days view) */}
          {viewMode === 'days' && (
            <div className="weekdays-row">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="weekday">
                  {day}
                </div>
              ))}
            </div>
          )}

          {/* Calendar body */}
          <div className="calendar-body">
            {viewMode === 'days' && (
              <div className="days-grid">
                {generateDays().map((day, index) => (
                  <button
                    key={index}
                    className={`
                      day-button
                      ${day.currentMonth ? 'current-month' : 'other-month'}
                      ${selectedDate && day.date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}
                      ${day.isToday && !selectedDate ? 'today' : ''}
                      ${day.isTomorrow && !selectedDate ? 'tomorrow' : ''}
                    `}
                    onClick={() => selectDate(day.date)}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            )}

            {viewMode === 'months' && (
              <div className="months-grid">
                {generateMonths().map((month) => (
                  <button
                    key={month.index}
                    className={`
                      month-button
                      ${month.isCurrentMonth ? 'current-month' : ''}
                      ${currentMonth === month.index ? 'selected-month' : ''}
                    `}
                    onClick={() => selectMonth(month.index)}
                  >
                    {month.name}
                  </button>
                ))}
              </div>
            )}

            {viewMode === 'years' && (
              <div className="years-grid">
                {generateYears().map((yearObj) => (
                  <button
                    key={yearObj.year}
                    className={`
                      year-button
                      ${yearObj.isCurrentYear ? 'current-year' : ''}
                      ${currentYear === yearObj.year ? 'selected-year' : ''}
                    `}
                    onClick={() => selectYear(yearObj.year)}
                  >
                    {yearObj.year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick select options and confirm button */}
          <div className="footer">
            <div className="quick-actions">
              <button
                className="quick-link"
                onClick={selectToday}
              >
                Today
              </button>
              <button
                className="quick-link"
                onClick={selectTomorrow}
              >
                Tomorrow
              </button>
            </div>
            
            <button
              className="confirm-button"
              onClick={confirmSelection}
              disabled={!selectedDate}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}