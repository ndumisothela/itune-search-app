import React, { useState } from 'react';
import axios from 'axios';
import './SearchResults.css'; // Assuming CSS is properly set up


// Define the functional component SearchResults
function SearchResults() {
    const [term, setTerm] = useState(''); // State variable 'term' to store the search term entered by the user
    const [media, setMedia] = useState('all'); // State variable 'media' to store the type of media to search for
    const [results, setResults] = useState([]);  // State variable 'results' to store the search results from the iTunes API
    const [favourites, setFavourites] = useState([]); // State variable 'favourites' to store the user's favourite items


    // Function to handle the search request
    // Prevent default form submission behavior

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`http://localhost:5000/api/search?term=${term}&media=${media}`); // Perform a GET request using axios to fetch data from the iTunes API
            setResults(data.results);// Update the 'results' state with the fetched data
        } catch (error) {
            console.error('Error fetching data: ', error);// Log error if the request fails
        }
    };
 // Function to add an item to the favourites list
    const addToFavourites = (item) => {
        setFavourites([...favourites, item]); 
    };// Add the selected item to the 'favourites' state array


     // Function to remove an item from the favourites list
    const removeFromFavourites = (id) => {
        setFavourites(favourites.filter(item => item.trackId !== id));
    };// Filter out the item by 'trackId' and update the state


       // Render the component
    return (
        <div className='search-container'>
            <h1>iTune Media Search</h1>
            {/* Input field for entering the search term*/}
            {/* Input field for entering the search term*/}
{/* Update the 'term' state on every keystroke*/}
            <form className='search-form' onSubmit={handleSearch}>
                <input className='search-input' type="text" 
                 value={term} 
                  onChange={(e) => setTerm(e.target.value)} placeholder="Search iTunes" /> 
                <select value={media} onChange={(e) => setMedia(e.target.value)}>
                    {/* Options for different types of media to search */}
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
                <button type="submit">Search</button> {/* Button to submit the form*/}
            </form>
            <div className='resFav'>
            <div>
                <h2>Results</h2>
                <ul>
                    {/*// Map each search result to an li element*/}
                    {/* Use 'trackId' as a unique key for each list item*/}
                    {/*Display the track or collection name*/}
                    {results.map(item => (
                        <li className='resultList' key={item.trackId}>
                            {item.trackName || item.collectionName}
                            <button className='addBtn' onClick={() => addToFavourites(item)}>Add to Favourites</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='favourites'>
                <h2>Favourites</h2>
                <ul>
                    {/*Map each favourite item to an li element*/}
                    {/*Use 'trackId' as a unique key for each list item */}
                    {/*Display the track or collection name */}
                    {favourites.map(item => (
                        <li key={item.trackId}>
                            {item.trackName || item.collectionName}
                            <button className='removeBtn' onClick={() => removeFromFavourites(item.trackId)}>Remove</button> {/*/ Button to remove item from favourites */}
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
}

export default SearchResults;
