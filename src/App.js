import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import Slider from './components/inc/Slider';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>

    <BrowserRouter>
        <Navbar />
        <Slider />
          <Routes>
        
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact/>} />

        </Routes>
          
    </BrowserRouter>

    </div>

  );
}

export default App;
