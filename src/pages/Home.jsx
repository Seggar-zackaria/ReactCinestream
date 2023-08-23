import Header from "../component/header/Header.jsx";
import Carousel from "../component/carousel/carousel";
import Latest from "../component/test.jsx";



export default function Home() {
    return (

    <>
    
     <div >
            <Header />
            <Carousel />
           
        </div>
        <div>
            <Latest />
        </div>
    
    </>
       
    )
}