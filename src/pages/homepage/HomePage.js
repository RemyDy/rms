import React, {useState} from "react";
import axios from "axios";
import "./HomePage.css"
import Tile from "../../components/tiles/Tile";


// Api Key: 509cee8e


function HomePage() {
    const [movieQuote, setMovieQuote] = useState("You had me at Hello")
    const [movie, setMovie] = useState({});
    console.log(movie);

    async function fetchMovieData() {
        try {
            const result = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=509cee8e", {});
            console.log(result);
            setMovie(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <Tile />

            <section className="tile">
                <button
                    type="button"
                    onClick={() => fetchMovieData() + setMovieQuote("To infinity and beyond")}
                >
                    Find
                </button>
            </section>
            <section>
                <div>
                    <p>
                        {movieQuote}
                    </p>
                </div>
                <div>
                    <h4>Title</h4>
                    <p>{movie.Title}</p>
                    <h4>Director</h4>
                    <p>{movie.Director}</p>
                    <h4>Genre</h4>
                    <p>{movie.Genre}</p>
                    <h4>Released</h4>
                    <p>{movie.Released}</p>
                    <h4>IMDB Rating</h4>
                    <p>{movie.imdbRating}</p>
                </div>
                <div>
                    <h4>Plot</h4>
                    <p>{movie.Plot}</p>
                </div>
            </section>
        </>
    )
}

export default HomePage;