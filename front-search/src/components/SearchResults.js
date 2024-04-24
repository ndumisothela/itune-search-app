import React, { useState } from 'react';
import axios from 'axios';
import './SearchResults.css';  // Make sure this path is correct


//// State hooks to store the search term, media type, and search results
function SearchResults() {
    const [term, setTerm] = useState(''); // Holds the search term entered by the user
    const [media, setMedia] = useState('all');  // Holds the type of media to search for, defaults to 'all'
    const [results, setResults] = useState([]);  // Array to store search results


    // Function to handle the search operation.
// Prevents the default form submit behavior (page reload) 
    const handleSearch = async (e) => {
        e.preventDefault(); 
        try {

            // Sending a GET request to the server with parameters for term and media 
            const { data } = await axios.get(`http://localhost:5000/api/search?term=${term}&media=${media}`);
            setResults(data.results); // Update the results state with response data*/}
        } catch (error) {
        
            console.error('Error fetching data: ', error);     // Logs error to the console if the request fails
        }
    };

  // Render method returns the UI for the component
    return (
        <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    className="search-input"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Search iTunes"
                />
                <select className="search-select" value={media} onChange={(e) => setMedia(e.target.value)}>
                    <option value="all">All</option>
                    <option value="music">Music</option>
                    <option value="movie">Movies</option>
                    <option value="podcast">Podcasts</option>
                    <option value="audiobook">Audiobooks</option>
                    <option value="shortFilm">Short Films</option>
                    <option value="tvShow">TV Shows</option>
                    <option value="software">Software</option>
                    <option value="ebook">eBooks</option>
                </select>
                <button type="submit" className="search-button">Search</button>
            </form>
            <ul className="results-list">
                {results.map((item, index) => (
                    <li key={index} className="result-item">
                        {item.trackName || item.collectionName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;
// Exports the component for use in other parts of the application