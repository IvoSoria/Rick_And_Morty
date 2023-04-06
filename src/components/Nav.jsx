import React from "react";
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";

function Nav({onSearch}) {
    return (
        <nav> 
            <SearchBar onSearch={onSearch} />
            <button>
              <Link to= "/about">About</Link>
            </button>
            <button>
              <Link to= "/home">Home</Link>
            </button>
        </nav>
       
    )
}

export default Nav