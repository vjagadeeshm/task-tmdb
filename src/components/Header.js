import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="inner-content">
                        <div className="brand">
                            <Link to="/">Movies</Link>
                        </div>
                        <ul className="nav-links">
                            <li>
                                <Link to="/trendingmovies">Trending Movies</Link>
                            </li>

                            <li>
                                <Link to="/popularmovies">Popular Movies</Link>
                            </li>

                            <li>
                                <Link to="/upcomingmovies">Upcoming Movies</Link>
                            </li>
                        </ul>
                    </div>
                </div> 
            </header>
        </div>
    )
}
