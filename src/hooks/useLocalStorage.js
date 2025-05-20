import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue = []) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [key, storedValue]);

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      if (Array.isArray(valueToStore)) {
        setStoredValue(valueToStore);
      } else if (valueToStore && typeof valueToStore === 'object' && valueToStore.slug) {
        const existingIndex = storedValue.findIndex(item => item.slug === valueToStore.slug);
        let newValue;
        if (existingIndex !== -1) {
          newValue = [
            ...storedValue.slice(0, existingIndex),
            valueToStore,
            ...storedValue.slice(existingIndex + 1)
          ];
        } else {
          newValue = [...storedValue, valueToStore];
        }
        setStoredValue(newValue);
      } else {
        setStoredValue(valueToStore);
      }
    } catch (error) {
      console.error('Error setting localStorage value:', error);
    }
  };

  const getCount = () => {
    return storedValue.length;
  };

  const removeItem = (index) => {
    try {
      if (index >= 0 && index < storedValue.length) {
        const newValue = storedValue.filter((_, i) => i !== index);
        setStoredValue(newValue);
      } else {
        console.warn(`Index ${index} is out of bounds for storedValue with length ${storedValue.length}`);
      }
    } catch (error) {
      console.error('Error removing item from localStorage:', error);
    }
  };

  return [storedValue, setValue, getCount, removeItem];
}

export default useLocalStorage;