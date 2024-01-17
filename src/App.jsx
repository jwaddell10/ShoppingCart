import React from 'react';
import { useEffect, useState } from "react";
import NavBar from './components/NavBar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home.jsx';
import { Shopping } from './components/Shopping.jsx';
import Cart from './components/Cart.jsx';
import useTitle from './components/FetchAPI.jsx';
import PropTypes from "prop-types";

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
      };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping" element={<Shopping addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
      </Routes>
    </Router>
  );
}

App.propTypes = {
    items: PropTypes.object,
}

export default App;