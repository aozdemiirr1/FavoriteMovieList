import React from 'react';
import MovieControls from './MovieControls';

const MovieCard = ({ movie,type }) => {
  return (
    <div className='movie-card'>
        <div className="overlay"></div>
        {movie.poster_path ? (
            <img className='w-60 h-96 rounded-t-xl' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.poster_path}`}/>
        ) : (
            <div className="filter-poster"></div>
        )} 

        <MovieControls movie={movie} type={type} />
    </div>
  );
}

export default MovieCard;
