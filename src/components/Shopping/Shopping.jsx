import useTitle from "../FetchAPI.jsx";
import PropTypes from "prop-types";
import styled from "styled-components";
import InputField from "./InputField.jsx";

const Shopping = ({ addToCart, removeFromCart }) => {
  const { items } = useTitle();
  const listItems =
    items &&
    items.map((item) => {
      return {
        image: item.image,
        id: item.id,
        name: item.title,
        price: item.price,
      };
    });

  return (
    <>
      <h1>Items</h1>
      <div>
        <StyledList>
          {listItems &&
            listItems.map((item) => (
              <div key={item.id}>
                <StyledCard>
                  <DisplayItemInfo
                    name={item.name}
                    id={item.id}
                    image={item.image}
                    price={item.price}
                  />
                  <InputField />
                  <button onClick={() => addToCart(item)}>Add To Cart</button>
                  <button onClick={() => removeFromCart(item)}>
                    Remove From Cart
                  </button>
                </StyledCard>
              </div>
            ))}
        </StyledList>
      </div>
    </>
  );
};

const DisplayItemInfo = ({ name, image, price, id }) => {
  return (
    <li className="item" key={id}>
      <h3>{name}</h3>
      <img src={image} alt={name} height={100} width={100} />
      <h3>${price}</h3>
    </li>
  );
};

const StyledList = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  background-color: #fff;
  color: #444;
  list-style-type: none;
`;

const StyledCard = styled.section`
  display: flex;
  border: 1px solid black;
  flex-direction: row;
  flex-wrap: wrap;
`;

DisplayItemInfo.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};

Shopping.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export { Shopping, DisplayItemInfo };
