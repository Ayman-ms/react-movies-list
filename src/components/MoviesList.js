import React from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap';
import Paginations from './Paginations';
const MoviesList = ({movies,getpage,pageCount}) => {
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