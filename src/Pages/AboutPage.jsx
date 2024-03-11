import React, { useState } from "react"

import Header from '../components/Header/Header';
import About from "../components/About/About";
import Footer from '../components/Footer/Footer';
function AboutPage() {
  return (
    <div className="App">
      <Header/>
        <About/>
      <Footer/>

    </div>
  );
}

export default AboutPage;
