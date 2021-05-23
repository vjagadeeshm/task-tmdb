import React, {useState, useEffect} from 'react';
import {Cards} from "./Cards";

export const Trending = () => {
    const API_KEY ="";
    const [trendingMovies, setTrendingmovies] = useState([]);

    const getTrendingMovies = async () =>{
        const trendingMoviesResponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);

        const trendingMoviesData = await trendingMoviesResponse.json();
        setTrendingmovies(trendingMoviesData);
    }

    useEffect(() => {
        getTrendingMovies();
    }, [])

    return (
        <div>
            <ul className="results">
            {trendingMovies.results && trendingMovies.results.map((movie)=>(
                <li key={movie.id}>
                  <Cards movie={movie} />
                </li>
            ))}
            </ul>
        </div>
    )
}
