import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Cards from './components/Cards';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/cards' element={ <Cards /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/products' element={ <Products /> } />
          <Route path='/sign-up' element={ <SignUp /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
