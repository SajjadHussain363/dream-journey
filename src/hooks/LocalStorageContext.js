import { createContext, useContext } from 'react';
import useLocalStorage from './useLocalStorage';

// Create the context
const LocalStorageContext = createContext();

// Create the provider component
export function LocalStorageProvider({ children, storageKey = 'appData', initialValue = [] }) {
  const [storedValue, setValue, getCount, removeItem] = useLocalStorage(storageKey, initialValue);

  // The value to be provided to consumers
  const contextValue = {
    storedValue,
    setValue,
    getCount,
    removeItem,
  };

  return (
    <LocalStorageContext.Provider value={contextValue}>
      {children}
    </LocalStorageContext.Provider>
  );
}

// Custom hook to use the context
export function useLocalStorageContext() {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error('useLocalStorageContext must be used within a LocalStorageProvider');
  }
  return context;
}