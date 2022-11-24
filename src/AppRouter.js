import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Header from './components/Header';
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>

                <Route path="/" element={<Cards/>} />
                <Route path="/cart" element={<Cart/>} />

                

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default AppRouter;
