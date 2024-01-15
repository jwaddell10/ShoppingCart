import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Link to="/">Home /</Link>
            <Link to="shopping">Shopping</Link>
            <Link to="cart">Cart</Link>
        </div>
    )
}

export default NavBar