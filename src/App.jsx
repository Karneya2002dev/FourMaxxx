import React from 'react'

import HomeScreen from './Component/HomeScreen'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout'
import './App.css'
import Product from './Component/Pages/Products';
import AboutUs from './Component/Pages/AboutUs';
import Carrers from './Component/Pages/Carrers';
import Contact from './Component/Pages/Contact';

import Events from './Component/Pages/Events';
import WelcomeIntro from './Component/WelcomeIntro';
import ProductDetails from './Component/Pages/ProductDetails';
const App = () => {
  return (
  <>
  {/* <Navbar />

<HomeScreen />
<Footer /> */}

<Layout>
    <Routes>
       <Route path='/' element={<WelcomeIntro />} />
      <Route path='/home' element={<HomeScreen />} />
      <Route path='/products' element={<Product />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/carrers' element={<Carrers />} />
      <Route path='/events' element={<Events/>} />
      <Route path='/contact' element={<Contact />} />
   


    </Routes>
</Layout>




  
  </>
  )
}

export default App