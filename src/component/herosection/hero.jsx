import { PlayCircleIcon, ClockIcon } from '@heroicons/react/24/solid'
import MovieCard from "../movieCard/movieCard.jsx";


function Hero() {
        return (
            <>
                <div className={'relative before:w-full before:absolute before:h-full before:bg-gradient-to-t before:mix-blend-multiply-overlay before:from-neutral-950/90 before:to-neutral-900/30'}>
                    <img
                        className='object-cover h-[700px] w-full '
                        src="https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
                        alt=""
                    />

                    <div className={'absolute flex flex-col ml-4 justify-center bottom-20 items-center'}>
                        <div className={'flex gap-5'}>
                            <img
                                className='hidden md:flex rounded-lg object-fit h-96 z-10'
                                src="https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
                                alt=""/>
                            <div className={'text-white flex-wrap'}>
                                <h2 className={'uppercase font-bold text-xl'}>Spider-Man: Across the Spider-Verse</h2>
                                <p className={'flex items-center'}>
                                    <ClockIcon className='mr-2 h-4' />
                                    <span className={'font-bold'}>Type : </span>
                                    TV
                                </p>
                                <p className={'flex items-center'}>
                                    <PlayCircleIcon className='mr-2 h-4' />
                                    <span className={'font-bold'}>Duration : </span>
                                    23 min
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </>
        )
}


export default Hero