import Header from "../component/header/Header.jsx";
import Carousel from "../component/carousel/carousel";
import MovieCard from "../component/movieCard/movieCard.jsx";
import DarkMode from "../component/darkMode/DarkMode.jsx";



export default function Home() {
    return (


        <div className='dark:bg-[#1F2024} bg-white' >
            <Header />
            <Carousel />
            <DarkMode />
            <MovieCard />
        </div>
    )
}