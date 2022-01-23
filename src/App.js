// noinspection ES6CheckImport

import './App.css';
import React from "react";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import SearchMoviePage from "./pages/searchmoviepage/SearchMoviePage";
import GamePage from "./pages/gamepage/GamePage";
import TopMenu from "./components/topmenu/TopMenu";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <TopMenu
                image="/src/assets/logorms.png"
                alt="logo"/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/random-movie-searcher" element={<SearchMoviePage/>}/>
                <Route path="/game" element={<GamePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
