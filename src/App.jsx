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
import ScrollToTop from './Component/ScrollToTop';
import UsesOfProduct from './Component/Pages/UsesOfProduct';

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* ❌ No Layout here — So Navbar will not show */}
        <Route path="/" element={<WelcomeIntro />} />

        {/* ✔ Wrap all other screens inside Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="home" element={<HomeScreen />} />
                <Route path="uses" element={<UsesOfProduct />} />
                <Route path="products" element={<Product />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="carrers" element={<Carrers />} />
                <Route path="events" element={<Events />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
