   import React from 'react';

   function SearchBar({ onSearch }) {
     return (
       <input
         type="text"
         className="search-bar"
         placeholder="Søk etter insekter..."
         onChange={(e) => onSearch(e.target.value)}
       />
     );
   }

   export default SearchBar;
