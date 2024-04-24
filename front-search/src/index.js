import React from 'react';  // Import React base library for building components
import ReactDOM from 'react-dom/client'; // Import the new ReactDOM client for React 18 which supports concurrent features
import App from './App';  // Importing the main App component from the local file App.js
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter to handle routing within the web application



// Getting the root DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Check if the root element exists to avoid rendering errors
if (rootElement) {


  // Creating a root container instance in the DOM using ReactDOM.createRoot()
  const root = ReactDOM.createRoot(rootElement); // The createRoot method mounts the React app on the root DOM element

  // Rendering the React application within the root DOM element
  // React.StrictMode is a tool for highlighting potential problems in an application.
   // BrowserRouter wraps the App component, enabling routing capabilities.
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />  {/* The App component is rendered here as the root component of our application*/}
      </BrowserRouter>
    </React.StrictMode>
  );
} else {

  // If the root element is not found, log an error in the console.
  // This provides feedback in the console if the 'root' element does not exist in the HTML

  console.error('Failed to find the root element');
}
