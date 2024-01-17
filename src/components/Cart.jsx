import PropTypes from "prop-types";
import { DisplayItemInfo } from "./Shopping.jsx";

function Cart({ cart }) {
  console.log(cart, 'this is cart')
  return (
    <>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <li key={item.id}>
            <DisplayItemInfo 
              name={item.name}
              id={item.id}
              image={item.image}
              price={item.price}
            />
          </li>
        ))
      ) : (
        <h3>this cart is empty</h3>
      )}
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
}

export default Cart;
