import React, { useState } from "react"

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Services from "../components/Services/Service";
function ServicePage() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default ServicePage;
