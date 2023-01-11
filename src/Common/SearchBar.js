import React from "react";
import './Style/SearchBarStyle.css';

const SearchBar = ({value,handleSearchKey,clearSearch,formSubmit}) =>{
    return(
        <div className="searchBar-Wrap">
        <form onSubmit={formSubmit}>
        <input type="text"
        onChange={handleSearchKey}
        placeholder="Search By category"
        value={value}
        />
        {value && <span onClick={clearSearch}>x</span>}
       <button>Go</button>
        </form>

        </div>
    );
}
export default SearchBar;