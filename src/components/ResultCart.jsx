import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ResultCart = ({movie}) => {
    const {watchlist,addMovieToWatchList} = useContext(GlobalContext);
    const storedMovie = watchlist.find((o) => o.id === movie.id)
return (
    <div className="result-card relative border border-gray-500 rounded-xl w-60 h-128 flex flex-col gap-y-4">
        <div className="poster-wrappe">
            {movie.poster_path ? (
                <img className='w-60 h-96 rounded-t-xl' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.poster_path}`}/>
            ) : (
                <div className="filter-poster"></div>
            )} 
        </div>
        <div className="info">
            <div className="header flex flex-col gap-y-2 pl-4">
                <h3 className='title w-48 text-xl font-bold'>{movie.title}</h3>
                <h4 className='release-date text-xl'>
                    {movie.release_date ? movie.release_date.substring(0,4) : "-"}
                </h4>
                <h4 className='release-date text-xl'>
                   IMDB : <b>{movie.vote_average ? movie.vote_average : "-"}</b>
                </h4>
                <div className="controls absolute bottom-10 flex flex-col gap-y-2 pl-4 items-center justify-center">
                    <button onClick={() => addMovieToWatchList(movie)} className='btn border border-blue-600 bg-blue-600 hover:border-blue-400 hover:bg-blue-400 text-white px-4' disabled={storedMovie}>
                        İZLENECEKLERE EKLE
                    </button>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ResultCart
