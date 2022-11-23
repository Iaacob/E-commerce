import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";

//import App from './App'
import Header from './components/Header';
// import Header from "./Components/Layout/Header";
// import Cart from './Components/Cart/Cart.js'
// import NotFound from './Components/Layout/NotFound'
// import Footer from "./Components/Layout/Footer";
// import { DetalleProducto } from "./Components/Products/DetalleProducto";


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
        </BrowserRouter>
    )
}


export default AppRouter;
