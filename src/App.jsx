import React from 'react';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home.jsx';
import Shopping from './components/Shopping.jsx';
import Cart from './components/Cart.jsx';
import useTitle from './components/FetchAPI.jsx';
import PropTypes from "prop-types";

function App() {
    const { items } = useTitle();
    console.log(items, 'this is items')
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

App.propTypes = {
    items: PropTypes.object,
}

export default App;