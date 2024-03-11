import React, { useState } from "react"

import Home from '../components/Home/Home';
import Header from '../components/Header/Header';
import Products from '../components/Product/Product';
import Visit from '../components/Visit/Visit';
import Footer from '../components/Footer/Footer';
import Team from "../components/Team/Team";
function HomePage() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Products/>
      <Visit/>
      <Team/>
      <Footer/>

    </div>
  );
}

export default HomePage;
