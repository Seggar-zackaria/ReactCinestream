import { useRef,useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react"
import Btn from "../buttons/Btn.jsx";

import { PlayCircleIcon, ClockIcon } from '@heroicons/react/24/solid'

import "swiper/css";
import "swiper/css/bundle"
import CarouselNav from "./CarouselNav.jsx";



export default function Carousel() {

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <>
            <Swiper>
                <SwiperSlide className="w-full max-h-[600px] relative before:w-full before:z-10 before:absolute before:h-full before:bg-gradient-to-t before:mix-blend-multiply-overlay before:from-neutral-950/90 before:to-neutral-900/30  ">
                    <div className='absolute flex flex-col ml-4 justify-center h-full lg:w-[550px] text-white uppercase w-2/5 z-10'>
                        <span className='font-bold sm:text-5xl text-sm'>Spider-Man: Across the Spider-Verse</span>
                        <div className='text-white hidden my-2 gap-3 lg:flex '>
                            <span className='items-center gap-1 flex'>
                                <PlayCircleIcon className='h-4' />
                                <p>TV</p>
                            </span>
                            <span className='items-center gap-1 lowercase flex'>
                                <ClockIcon className='h-4' />
                                <p>24 min</p>
                            </span>
                        </div>
                        <div className='my-3'>
                            <p className=' text-sm capitalize lowercase'>
                                After reuniting with Gwen Stacy, Brooklyn’s full-time,
                                friendly neighborhood Spider-Man is catapulted across the Multiverse,

                            </p>
                        </div>
                        <Btn />
                    </div>
                   <div>
                       <img
                           className="w-full h-full object-fit lg:object-top z-0"
                           src="https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
                           alt=""/>
                   </div>
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
                <CarouselNav  />
            </Swiper>
        </>
    );
}
