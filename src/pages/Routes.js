// router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import PageNotFound from "./PageNotFound/PageNotFound";
// import Card from "../components/Card/Card";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* <Route path="/card" element={<Card />} /> */}
                    <Route path="/cart" element={<Cart /> } />
                    <Route path="/product" element={<Product /> } />
                    <Route path="*" element={<PageNotFound /> } />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};
