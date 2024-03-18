import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from 'react-router';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route index element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
