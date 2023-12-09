import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';

export const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);
  return (
    <div className='movie-page mb-20'>
      <div className="container mx-auto">
        <div className="header">
          <div className="heading">
            <h1 className='text-5xl font-bold text-blue-900 mt-20'>İzlenecek Filmler</h1>
          </div>

          {watchlist.length > 0 && (
            <div className="movie-grid flex flex-row gap-4 mt-10 flex-wrap">
              {watchlist.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type="wathclist" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Watchlist
