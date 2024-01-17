import PropTypes from "prop-types";
import { DisplayItemInfo } from "../Shopping/Shopping.jsx";

function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <DisplayItemInfo
              name={item.name}
              id={item.id}
              image={item.image}
              price={item.price}
            />
            <button onClick={() => addToCart(item)}>Add To Cart</button>
            <button onClick={() => removeFromCart(item)}>
              Remove From Cart
            </button>
          </div>
        ))
      ) : (
        <h3>this cart is empty</h3>
      )}
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default Cart;
