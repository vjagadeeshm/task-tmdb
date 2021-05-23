import React, {useState,useEffect} from 'react';
import {Cards} from "./Cards"

export const Upcoming = () => {
    const API_KEY ="";
    const [upcomingMovies,setUpcomingmovies] = useState([]);
    
    const getUpcomingMovies = async () =>{
        const upcomingMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

        const upcomingMoviesData = await upcomingMoviesResponse.json();
        setUpcomingmovies(upcomingMoviesData);
    }

    useEffect(() => {
        getUpcomingMovies();
    }, [])

    return (
        <div><ul className="results">
            {upcomingMovies.results && upcomingMovies.results.map((movie)=>(
                <li key={movie.id}>
                  <Cards movie={movie} />
                </li>
            ))}
            </ul>
        </div>
    )
}
