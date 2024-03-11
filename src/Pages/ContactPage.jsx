import React, { useState } from "react"

import Header from '../components/Header/Header';
import Contact from "../components/Contact/Contact";
import Footer from '../components/Footer/Footer';
function ContactPage() {
  return (
    <div className="App">
      <Header/>
        <Contact/>
      <Footer/>

    </div>
  );
}

export default ContactPage;
