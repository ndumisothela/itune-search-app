const express = require('express');// Import Express to create and manage the web server
const axios = require('axios');// Import Axios for making HTTP requests to external services
const cors = require('cors');// Import CORS (Cross-Origin Resource Sharing) to allow or restrict requested resources on a web server
require('dotenv').config();// Import and configure dotenv to load environment variables from a .env file into process.env


// Creating an instance of express
const app = express();
const PORT = process.env.PORT || 5000; // Setting the port for the server, defaulting to 5000 if not specified in environment variables


// Middleware setup
app.use(cors());  // Enables CORS with default settings allowing all cross-origin requests
app.use(express.json());// Parses incoming requests with JSON payloads


// Define a route for API search requests
app.get('/api/search', async (req, res) => {
    // Extracting search terms and media type from the query parameters
    const { term, media } = req.query;
    try {

        // Performing a GET request to the iTunes search API using axios
        const response = await axios.get(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=${media}`);
           // Sending back the data received from iTunes API as JSON
        res.json(response.data);
    } catch (error) {
        // Error handling: sending a 500 server error response with the error message
        res.status(500).json({ error: error.message });
    }
});
// Start the server listening on the specified PORT
// Logging to the console that the server is running and on which port

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
