// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults'; /// Importing the SearchResults component from the specified path


// Define the App component
function App() {
  return (
    // Wrapping div with a class "App" that can be used for styling
    // The Routes container from react-router-dom that holds all the route configurations
     // path="/" specifies that this is the route for the root URL
        // element={<SearchResults />} tells React Router what component to render when the route matches the path
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
