import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav2 from './cOMPONENT/navigation/Nav2';
import Home from './cOMPONENT/Pages/Home';
import Product from './cOMPONENT/Pages/Product';
import Header from "./cOMPONENT/navigation/Header";
import Newarrival from "./cOMPONENT/Pages/Newarrival";
import { Slider } from "./cOMPONENT/Mainbody/Slider";
import Categories from "./cOMPONENT/Mainbody/Categories";
import Footer from "./cOMPONENT/fOOTER/Footer";
import { Container } from "react-bootstrap";




function Main() {




  return (
    <BrowserRouter>

    <Header />
  
    <Nav2 />
   <Slider />
   <Categories />
   <Footer />
  
    
  
    <Routes>
    
      <Route path='/home' exact  element={<Home />}  />
      <Route path='/product' exact element={<Product />}  />
      <Route path='/newarrival' exact element={<Newarrival />}  />
    </Routes>
    </BrowserRouter>
    );

  
}

export default Main