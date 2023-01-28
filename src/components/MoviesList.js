import React, { useEffect, useState } from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap';
import Paginations from './Paginations';
import {useSelector, useDispatch} from 'react-redux'
import { getAllMovie } from "../redux/actions/movieAction";

const MoviesList = ({getpage,pageCount}) => {

  const [movies,setMovies]=useState([])

  const dispatch=useDispatch(); 

  useEffect(()=> {
    dispatch(getAllMovie())
  },[])

  const moviesData=useSelector((state)=> state.movies);
  
  useEffect(()=> {
    setMovies(moviesData)
  },[moviesData])


  return (
    <Row className='mt-3'>
      {movies.length >= 1 ?(movies.map((movie)=> {
        return (
          <CardMovie key={movie.id} movie={movie}/>
        )
      }))
      : <h2 className='text-center p-5'>No Movies..</h2>}

      {movies.length >= 1 ? (<Paginations getpage={getpage} pageCount={pageCount}/>): null}
      
    </Row>
  )
}

export default MoviesList