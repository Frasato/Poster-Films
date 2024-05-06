import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.js';
import Films from './pages/Films/Films.js';
import Header from "./components/Header/Header.js";

export default function FilmsRoute(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/film/:id" element={ <Films/> }/>
            </Routes>
        </BrowserRouter>
    );
}