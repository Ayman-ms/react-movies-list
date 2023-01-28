import React,{ useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'
import {Container} from 'react-bootstrap'
import axios from "axios";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { apiKey } from "./redux/types/apiKey";

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MoviesList/>} />
            <Route path='/movie/:id' element={<MovieDetails/>}/>            
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
