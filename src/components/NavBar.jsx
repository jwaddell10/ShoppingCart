import { Link } from "react-router-dom";

const NavBar = () => {
        return (
          <div className="navbar">
            <h5>Website Name</h5>
            <Link to="/">Home</Link>
            <Link to="shopping">Shopping</Link>
            <Link to="cart">Cart</Link>
          </div>
        );
}


export default NavBar;