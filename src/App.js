import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Header from './components/common_components/Header';
import Footer from './components/common_components/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Careers from './components/pages/Careers';

function App() {
  return (
    <div className="App scroll-container">
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wedding-services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
