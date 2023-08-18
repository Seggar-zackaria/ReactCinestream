import axios from "axios";


export const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = "https://api.themoviedb.org/3"


 const config = {

    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }, 

}


export const getTrendingMovies = async () => {
    const res = await axios.get(`${baseUrl}/trending/movie/week`, config)
    const data = res.data
    return data
  }
  
  export const getLatestMovie = async () => {
    const res = await axios.get(`${baseUrl}/movie/latest`, config)
    const data = res.data
    return data
  }
  
  export const searchMovies = async (input) => {
    const res = await axios.get(`${baseUrl}/search/movie?query=${input}`, config)
    const data = res.data
    return data
  }
  
  export const getMovieDetails = async (id) => {
    const res = await axios.get(`${baseUrl}/movie/${id}`, config)
    const data = res.data
    return data
  }
  
  export const getMovieVideos = async (id) => {
    const res = await axios.get(`${baseUrl}/movie/${id}/videos`, config)
    const data = res.data
    return data
  }


  export default config