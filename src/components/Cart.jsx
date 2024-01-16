import PropTypes from "prop-types";

function Cart({ cart }) {
 console.log(cart, 'this is')
 return (
  <>
    {cart.length === 0 ? (
      <h3>this cart is empty</h3>
    ) : (
      // Render cart items
      <>
        {cart.map(item => (
          // Render individual cart items
          // For example: <div key={item.id}>{item.name}</div>
        ))}
        {console.log(cart, 'this is cart')}
      </>
    )}
  </>
 );
}

Cart.propTypes = {
  cart: PropTypes.array,
}

export default Cart;
