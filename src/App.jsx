import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css"
import './css file/style.css'
import Hero from './components/Hero';
import Delivery from './components/Delivery';
import Healthy from './components/Healthy';
import ProductSlider from './components/ProductSlider';
import Products from './components/Products';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Delivery/>
    <Healthy/>
    <ProductSlider/>
    <Products/>
    <Footer/>
      </>
  ) 
}

export default App