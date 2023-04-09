import React from "react";
import SearchBar from "./SearchBar"
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <nav> 
            <SearchBar onSearch={props.onSearch} />
            <button>
              <Link to= "/about"> About </Link>
            </button>
            <button>
              <Link to= "/home"> Home </Link>
            </button>
            <button onClick={props.logout}>
              Log Out
            </button>
        </nav>    
    )
}

export default Nav