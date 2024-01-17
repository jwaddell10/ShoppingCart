import PropTypes from "prop-types";

function Cart({ cart }) {
  console.log(cart, 'this is cart')
  return (
    <>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <li key={item.id}>
            {item.name}
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
