import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages';
import DropPage from './pages/drop';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
