import "./Search.css";

import React from 'react'

function Search() {
  return (
    <div
    className="flex">
        <input 
        type="text"
        className="input"
        placeholder="Search a album of your choice"/>
        <button className="button1">
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>
  )
};

export default Search;