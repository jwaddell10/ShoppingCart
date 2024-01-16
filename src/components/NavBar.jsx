import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h3>Website Name</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shopping">Shopping</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;