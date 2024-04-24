import React, { useState } from 'react';
import axios from 'axios';
import './SearchResults.css';  // Make sure this path is correct

function SearchResults() {
    const [term, setTerm] = useState('');
    const [media, setMedia] = useState('all');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`http://localhost:5000/api/search?term=${term}&media=${media}`);
            setResults(data.results);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

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
