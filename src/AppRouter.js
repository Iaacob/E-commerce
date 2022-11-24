import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Header from './components/Header';
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Detalle from "./components/Detalle";
import Checkout from "./components/Checkout";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>

                <Route path="/" element={<Cards/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/detalle/:id" element={<Detalle/>} />
                {/* <Route path="/checkout" element={<Checkout/>} /> */}



                

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default AppRouter;
