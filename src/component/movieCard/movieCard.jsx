import  {useRef, useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

import Card from "./card.jsx";

import axios from "axios";
import tmdb from "../../api/apiConfig.js";




function MovieCard() {

    const [movies, setMovies] = useState([])

    useEffect(()=> {
        const getData = async () => {
            try {
                const genreResponse = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=d7ce541cbdf7e4b870ae86c885414de2&append_to_response=videos`);
                const popularResponse = await tmdb.get("tv/popular");
                
                console.log("Genre Data:", genreResponse.data);
                console.log("Popular Data:", popularResponse.data);
                
                setMovies(popularResponse.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    getData()        
    },[])


    const swiperRef = useRef(null);

    useEffect(() => {

        register();
    }, []);

    const swiperParams = {
        slidesPerView: 3,
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            425: {
              slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
        },
        spaceBetween: 10,
        navigation: true,
        keyboard: true,
    };

    return (

        <main className='container mx-auto'>
            <h2 className='mb-4 mt-16 text-2xl font-bold pl-3'>Popular Movies</h2>
            <Swiper

                ref={swiperRef} {...swiperParams}>

                   
                <SwiperSlide>

                    <Card />

                </SwiperSlide>
              


            </Swiper>
        </main>

    );
}

export default MovieCard;
