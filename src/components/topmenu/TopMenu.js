import React from "react";
import {NavLink} from "react-router-dom";

function TopMenu() {
    return (
        <ul>
            <div>TopMenu</div>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/random-movie-searcher">Search Movie</NavLink></li>
            <li><NavLink to="/game">Game</NavLink></li>
        </ul>
    )
}

export default TopMenu;