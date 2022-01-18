import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages';
import DropPage from './pages/drop';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MintPage from './pages/mint';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drop" element={<DropPage />} />
        <Route path="/mint" element={<MintPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
