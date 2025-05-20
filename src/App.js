import './App.css';
import React from 'react';
import Index from './routes/index';

import { LocalStorageProvider } from '../src/hooks/LocalStorageContext';
function App() {
  return (
    <LocalStorageProvider storageKey="myAppData" initialValue={[]}>
    <div className="App">
      <Index/>
    </div>
    </LocalStorageProvider>
  );
}

export default App;



