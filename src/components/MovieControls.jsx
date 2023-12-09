import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Değişiklik burada
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({ movie }) => {
  const { removeMovieFromWatchlist, addMovieToWatched } = useContext(GlobalContext);

  return (
    <>
      <div className={`innercontrols gap-x-6 items-center justify-center text-2xl text-white ${movie.type === "watchlist" ? 'visible' : ''}`}>
        <button
          onClick={() => removeMovieFromWatchlist(movie.id)}
          className='border border-blue-600 bg-blue-600 p-2 rounded-lg'
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </>
  );
};

export default MovieControls;
