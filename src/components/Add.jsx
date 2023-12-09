import React, { useContext, useState } from 'react'
import ResultCart from './ResultCart';
import { GlobalContext } from '../context/GlobalState';

export const Add = () => {

    const {send} = useContext(GlobalContext);

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);


    const apiKey = 'ecd7cbcc9dcd3b59ecafdd5d49686ffa';

    function onChange(e) {
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&include_adult=false&language=en-US&page=1&query=${e.target.value}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                if(!data.errors) {
                    setResults(data.results)
                }else{
                    setResults([]);
                }
            })
            .catch((error) => console.error('Error:', error));
    }



  return (
    <div className='add-page'>
        <div className="continer mx-auto">
            <div className="add-content">
                <img className=' h-96 mx-auto ' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg" />
               <div className='flex flex-col gap-y-4 absolute top-60 left-96 text-white'>
                    <div className="titles">
                        <h1 className='text-5xl font-bold'>Hoş Geldiniz.</h1>
                        <h2 className='text-2xl'>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h2>
                    </div>
                    <div className="input-wrapper">
                        <input className='outline-none rounded-xl w-full p-5 text-black'  onChange={onChange} value={query} type="text"placeholder='Film, dizi, kişi ara...'/>
                    </div>
                </div>
                {results.length > 0 && (
                    <ul className="results container mx-auto mt-5 flex gap-4 flex-wrap">
                        {results.map((movie) =>(
                            <li key={movie.id}>
                                <ResultCart movie={movie} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </div>
  )
}

export default Add
