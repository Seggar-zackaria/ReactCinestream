import axios from "axios";


export const apiKey = import.meta.env.VITE_API_KEY




const tmdbApi = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
  
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
}, 
})



export const getTrendingMovies = async () => {
    const res = await tmdbApi.get(`/trending/movie/week`)
    const data = res.data
    return data
  }
  
  export const getLatestMovie = async () => {
    const res = await tmdbApi.get(`/movie/latest`)
    const data = res.data
    return data
  }
  
  export const searchMovies = async (input) => {
    const res = await tmdbApi.get(`/search/movie?query=${input}`)
    const data = res.data
    return data
  }
  
  export const getMovieDetails = async (id) => {
    const res = await tmdbApi.get(`/movie/${id}`)
    const data = res.data
    return data
  }
  
  export const getMovieVideos = async (id) => {
    const res = await tmdbApi.get(`/movie/${id}/videos`)
    const data = res.data
    return data
  }


  export default tmdbApi