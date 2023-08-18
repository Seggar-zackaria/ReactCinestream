import Header from "../component/header/Header.jsx";
import Carousel from "../component/carousel/carousel";
import MovieCard from "../component/movieCard/movieCard.jsx";



export default function Home() {
    return (

    <>
    
     <div >
            <Header />
            <Carousel />
           
        </div>
        <div>
            <MovieCard />
        </div>
    
    </>
       
    )
}