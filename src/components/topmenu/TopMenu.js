import React from "react";
import "./TopMenu.css"
import {NavLink} from "react-router-dom";
import {ReactComponent as Logo} from "src/assets/Logo_RmS.svg";

function TopMenu() {
    return (
        <nav>
            <Logo/>
            <div className="nav-container">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/random-movie-searcher">Search Movie</NavLink></li>
                    <li><NavLink to="/game">Game</NavLink></li>
                </ul>
                <h3>Random Movie Searcher</h3>
            </div>
        </nav>
    )
}

export default TopMenu;

//className={({isActive}) => "nav-link" + isActive ? "activated" : ""}