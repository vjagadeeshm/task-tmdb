import React, {useState, useEffect} from 'react'
import {Cards} from "./Cards";

export const Popular = () => {
    const API_KEY ="";
    const [popularMovies,setPopularmovies] = useState([]);

    const getPopularMovies = async () =>{
        const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

        const popularMoviesData = await popularMoviesResponse.json();
        setPopularmovies(popularMoviesData);
    }

    useEffect(() => {
        getPopularMovies();
    }, [])

    return (
        <div>
            <ul className="results">
            {popularMovies.results && popularMovies.results.map((movie)=>(
                <li key={movie.id}>
                  <Cards movie={movie} />
                </li>
            ))}
            </ul>
        </div>
    )
}
