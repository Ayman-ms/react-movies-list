import React,{ useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'
import {Container} from 'react-bootstrap'
import axios from "axios";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
function App() {

  const [movies,setMovies]=useState([])
  const [pageCount,setPageCount]=useState(0)
  const [movieId,setMovie]=useState(0)


  // my api key
  const apiKey='02701e0e1e70c714ad27f179e023f0fe'

  // get all movies by axios
  const getAllMovies=async()=>{
    const res =await axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+apiKey+'&language=en-US')
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

    // get CURRENT PAGE
    const getpage=async(pageNum)=>{
      const res =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=`+apiKey+`&language=en-US&page=${pageNum}`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    }

    
     // get CURRENT PAGE
     const getMovieDetails=async(movie_id)=>{
      const res =await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=`+apiKey+`&language=en-US`)
      setMovie(res.data.results)
    }

  useEffect(()=> {
    getAllMovies();
  },[])
  
  // search
const search=async (filmToSearch)=>{
  if (filmToSearch==='') {
    getAllMovies();
  }else
  {
  const res =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=`+apiKey+`&query=${filmToSearch}&language=en-US`)
  setMovies(res.data.results)
  setPageCount(res.data.total_pages)
  }
}

  return (
    <div className="App">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MoviesList movies={movies} getpage={getpage}
                    pageCount={pageCount} getMovieDetails={getMovieDetails}/>} />
            <Route path='/movie/:id' element={<MovieDetails apiKey={apiKey}/>}/>            
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
