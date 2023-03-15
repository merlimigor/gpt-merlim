import React from 'react';

import About from './component/about';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (

    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;