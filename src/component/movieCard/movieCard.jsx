import  {useRef, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

import Card from "./card.jsx";

import { useQuery } from "react-query";

import { getTrendingMovies } from "../../api/apiConfig.js";
import { Link } from "react-router-dom";









function MovieCard() {


   


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

    function Getdata(){

        const { data: latestMovie, isLoading } = useQuery(['latest'], async () => {
            const data = await getTrendingMovies()
            return data
        })
     }
    

    return (

        <main className='container mx-auto dark:bg-[#1f2024]'>
            <h2 className='pl-3 mt-16 mb-4 text-2xl font-bold'>Popular Movies</h2>
            <Swiper

                ref={swiperRef} {...swiperParams}>

                   
       
                <SwiperSlide >
                <div className="w-full max-h-[100vh]">
      <Link
        to={`/movie/${latestMovie?.results[0]?.id}`}
        className="group relative md:flex md:justify-center before:content-[''] before:absolute before:w-full before:h-full md:before:w-[50%] before:bg-gradient-to-t before:from-primary before:to-neutral-0-200 before:opacity-50 before:z-[1]"
      >
        <img
          className="object-cover w-full h-[100vh] md:w-[50%] md:h-[100vh] md:object-bottom grayscale-[1] group-hover:grayscale-0 md:hover:grayscale-0 transition-all duration-300"
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${latestMovie?.results[0].backdrop_path}`}
          alt=""
        />
        <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-neutral-0-400 text-center text-4xl z-[2]">
          {latestMovie?.results[0]?.title}
        </h2>
      </Link>
    </div>
                </SwiperSlide>

             <SwiperSlide>

                    <Card />

                </SwiperSlide>
              


            </Swiper>
        </main>

    );
}

export default MovieCard;
