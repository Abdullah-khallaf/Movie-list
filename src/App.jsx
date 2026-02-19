import { use, useEffect, useState } from 'react' 
import Search from './components/Search'
import MovieCard from './components/MovieCard'
import Spinner from './components/Spinner'

import './App.css'
import { useDebounce } from 'react-use'

 const API_BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;

  const API_Options = {
    method: 'Get',
    heaters:{
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  }

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      Response = await fetch(`${API_BASE_URL}/search/movie?query=${searchTerm}`, API_Options);
      const data = await Response.json();
      setMovieList(data.results);
    }
    catch(error){
      setErrorMessage('An error occurred while fetching movies. Please try again later.');
    }
  }

  return (
    <>
      <main>
        <header>
            <h1>Movie List</h1>
            <img src='/public/hero.png' alt='hero.png'/>
            <Search />
        </header>

      </main>   
    </>
  )
}

export default App
