import React from 'react';
import './index.css';
import Home from '../Pages/Home'
import Galery from '../Pages/Galery';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index768.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="muzeum" element={<Home/>}/>
          <Route path="muzeum/Galeria" element={<Galery/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
