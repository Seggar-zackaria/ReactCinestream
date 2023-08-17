import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import apiConfig from './api/apiConfig.js'

function App() {

  return (
    <>

        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="details" element={<Details />} />
                </Routes>
            </main>
        </BrowserRouter>
        <apiConfig />
    </>
  )
}

export default App
