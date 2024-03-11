import React, { useState } from "react"

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AllProducts from "../components/Product/AllProduct";
function ProductPage() {
  return (
    <div className="App">
      <Header/>
      <AllProducts/>
      <Footer/>
    </div>
  );
}

export default ProductPage;
