import './App.css'

import { BrowserRouter as Router , Routes, Route } from "react-router-dom";



import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";

function App() {

  return (
    <>

        <Router>
      
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            
        </Router>

    </>
  )
}

export default App
