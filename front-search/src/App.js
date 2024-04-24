// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults'; // Ensure the path is correct

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
