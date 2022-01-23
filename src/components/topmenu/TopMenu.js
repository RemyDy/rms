import React from "react";
import "./TopMenu.css"
import {NavLink} from "react-router-dom";
import Logo from "../../assets/logorms.png"

function TopMenu() {
    return (
        <>
            <nav>
                <img src={Logo} alt="logo"/>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/random-movie-searcher">Search Movie</NavLink></li>
                    <li><NavLink to="/game">Game</NavLink></li>
                </ul>
            </nav>
            <h3>Random Movie Searcher</h3>
        </>
    )
}

export default TopMenu;

//className={({isActive}) => "nav-link" + isActive ? "activated" : ""}