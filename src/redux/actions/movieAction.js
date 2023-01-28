import { AllMovies } from "../types/moviesType";
import axios from "axios";
import { api } from "../types/api";
import { apiKey } from "../types/apiKey"
export const getAllMovie= ()=>{
    return async(dispatch)=>{
        const res = await axios.get(api)
        dispatch({type:AllMovies, data:res.data.results, pages:res.data.total_pages})
    }
}

export const getSearch= (filmToSearch)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=`+apiKey+`&query=${filmToSearch}&language=en-US`)
        dispatch({type:AllMovies, data:res.data.results, pages:res.data.total_pages})
    }
}

export const getPages= (pageNum)=>{
    return async(dispatch)=>{
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=`+apiKey+`&language=en-US&page=${pageNum}`)
        dispatch({type:AllMovies, data:res.data.results, pages:res.data.total_pages})
    }
}
