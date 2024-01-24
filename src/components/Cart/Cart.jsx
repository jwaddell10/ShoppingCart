import PropTypes from "prop-types";
import { DisplayItemInfo } from "../Shopping/Shopping.jsx";
import styled from "styled-components";

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  return (
    <>
    
      <StyledList>
        {" "}
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id}>
              <StyledCard>
                <DisplayItemInfo
                  name={item.name}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                />
              </StyledCard>

              <button onClick={() => removeFromCart(item)}>
                Remove From Cart
              </button>
            </div>
          ))
        ) : (
          <h3>Oh no! Your cart is empty</h3>
        )}
      </StyledList>

      <div>Total: ${totalPrice}</div>
    </>
  );
}



const StyledList = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  background-color: #fff;
  color: #444;
  list-style-type: none;
  width: 100vw;
`;

const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  box-shadow: 5px 5px 5px gray;
`;

Cart.propTypes = {
  cart: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default Cart;
