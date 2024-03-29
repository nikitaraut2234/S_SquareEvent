import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Gallery from './components/common_components/Gallery'
// Import your components
//import Header from './components/common_components/Header';
import Footer from './components/common_components/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Careers from './components/pages/Careers';
import AboutUs from './components/pages/AboutUs';
//import VideoApp from './components/common_components/VideoApp';
 
 
function App() {
  return (
    <div className="App scroll-container">
      {/* <Gallery />  */}
      {/* <Header /> */}
      {/* <Services /> */}
       {/* <VideoApp /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            
          </Routes>
         

      <Footer />
      
    </div>
  );
}

export default App;
