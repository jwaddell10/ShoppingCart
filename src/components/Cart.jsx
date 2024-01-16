import PropTypes from "prop-types";

function Cart({ cart }) {
 const newCart = cart.find((item) => console.log(item, 'this is item'))
  return (
    <>
      <h3>this cart is empty</h3>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
}

export default Cart;
