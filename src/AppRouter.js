import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Header from './components/Header';
import Footer from "./components/Footer";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>

                <Route path="/" element={<Cards/>} />
                {/* <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/:id" element={<DetalleProducto />} /> */}

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default AppRouter;
