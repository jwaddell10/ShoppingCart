import PropTypes from "prop-types";

function Cart({ cart }) {
  console.log(cart, "this is cartitems in cart");
  return (
    <>
      <h3>this cart is empty</h3>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
