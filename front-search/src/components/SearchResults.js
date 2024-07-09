import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests to external services
import './SearchResults.css'; // Assuming CSS is properly set up

// Define the functional component SearchResults
function SearchResults() {
    const [term, setTerm] = useState(''); // State variable 'term' to store the search term entered by the user
    const [media, setMedia] = useState('all'); // State variable 'media' to store the type of media to search for
    const [results, setResults] = useState([]);  // State variable 'results' to store the search results from the iTunes API
    const [favourites, setFavourites] = useState([]); // State variable 'favourites' to store the user's favourite items

    // Function to handle the search request
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`https://itune-app-server.onrender.com/api/search?term=${term}&media=${media}`); // Perform a GET request using axios to fetch data from the iTunes API
            setResults(data.results);// Update the 'results' state with the fetched data
        } catch (error) {
            console.error('Error fetching data: ', error);// Log error if the request fails
        }
    };

    // Function to add an item to the favourites list
    const addToFavourites = (item) => {
        setFavourites([...favourites, item]);
    }; // Add the selected item to the 'favourites' state array

    // Function to remove an item from the favourites list
    const removeFromFavourites = (id) => {
        setFavourites(favourites.filter(item => item.trackId !== id));
    }; // Filter out the item by 'trackId' and update the state

    // Render the component
    return (
        <div className='search-container'>
            <h1>iTune Media Search</h1>
            <form className='search-form' onSubmit={handleSearch}>
                <input
                    className='search-input'
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Search iTunes"
                />
                <select value={media} onChange={(e) => setMedia(e.target.value)}>
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
                <button type="submit">Search</button>
            </form>
            <div className='resFav'>
                <div>
                    <h2>Results</h2>
                    <ul>
                        {results.map((item, index) => (
                            <li className='resultList' key={item.trackId || index}>
                                {item.trackName || item.collectionName}
                                <button className='addBtn' onClick={() => addToFavourites(item)}>Add to Favourites</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='favourites'>
                    <h2>Favourites</h2>
                    <ul>
                        {favourites.map((item, index) => (
                            <li key={item.trackId || index}>
                                {item.trackName || item.collectionName}
                                <button className='removeBtn' onClick={() => removeFromFavourites(item.trackId)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;
