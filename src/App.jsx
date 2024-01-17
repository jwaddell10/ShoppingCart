import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/Home.jsx";
import { Shopping } from "./components/Shopping/Shopping.jsx";
import Cart from "./components/Cart/Cart.jsx";
import useTitle from "./components/FetchAPI.jsx";
import PropTypes from "prop-types";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (itemToAdd) => {
    setCart([...cart, itemToAdd]);
  };
  const removeFromCart = (itemToRemove) => {
    const currentItem = itemToRemove.id;
    const newItems = cart.filter((cartItem) => cartItem.id !== currentItem);
    setCart(newItems);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shopping"
          element={
            <Shopping addToCart={addToCart} removeFromCart={removeFromCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

App.propTypes = {
  items: PropTypes.object,
};

export default App;
