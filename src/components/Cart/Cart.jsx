import PropTypes from "prop-types";
import { DisplayItemInfo } from "../Shopping/Shopping.jsx";

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
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
            <button onClick={() => removeFromCart(item)}>
              Remove From Cart
            </button>
          </div>
        ))
      ) : (
        <h3>this cart is empty</h3>
      )}
      <div>Total: ${totalPrice}</div>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default Cart;
