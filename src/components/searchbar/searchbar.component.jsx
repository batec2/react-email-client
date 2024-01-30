import React from "react";
import './searchbar.styles.css';

const SearchBar = ({placeholder, handleSearch}) => {
    return (
        <div className='search-bar-container'>
            <input 
            className='search-input' 
            type = 'search'
            placeholder={placeholder}
            onChange={handleSearch}/>
        </div>
    )
}

export default SearchBar;