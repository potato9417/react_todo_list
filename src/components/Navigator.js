import React from "react";
import { Link } from "react-router-dom";

function Navigator(){
    return (
        <nav id="nav">
            <h2 id="logo">DOING! NOW!</h2>
            <Link to="/">HOME</Link>
            <Link to="/done">DONE</Link>
        </nav>
    )
}

export default Navigator;