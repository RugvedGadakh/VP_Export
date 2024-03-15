import React, { useState } from "react"

import Header from '../components/Header/Header';
import AboutSec from "../components/About/AboutSec";
import Footer from '../components/Footer/Footer';
function AboutPage() {
  return (
    <div className="App">
      <Header/>
        <AboutSec/>
      <Footer/>

    </div>
  );
}

export default AboutPage;
