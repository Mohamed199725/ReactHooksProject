// src/MovieList.js/A functional component that represents the list of movies and It maps through the movies array and renders a MovieCard component for each movie.

// MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {movies.map((movie, index) => (
                <Link to={`/movie/${index}`} key={index} style={{ textDecoration: 'none', color: '#333' }}>
                    <MovieCard movie={movie} onClick={() => onMovieClick(index)} />
                </Link>
            ))}
        </div>
    );
};

export default MovieList;