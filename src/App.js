// noinspection ES6CheckImport

import './App.css';
import React from "react";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import SearchMoviePage from "./pages/searchmoviepage/SearchMoviePage";
import GamePage from "./pages/gamepage/GamePage";
import TopMenu from "./components/topmenu/TopMenu";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <TopMenu/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/random-movie-searcher" element={<SearchMoviePage/>} />
                <Route path="/game" element={<GamePage/>} />
            </Routes>
        </Router>
    );
}

export default App;
