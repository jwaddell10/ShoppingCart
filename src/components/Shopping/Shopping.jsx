import useTitle from "../FetchAPI.jsx";
import PropTypes from "prop-types";
import styled from "styled-components";
import styles from "./Shopping.module.css";

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
      <StyledDiv>
        
        <div className={styles.pagediv}>
          <h1 className={styles.h1}>Products</h1>
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
                    <StyledButton>
                      <button onClick={() => addToCart(item)}>
                        Add To Cart
                      </button>
                      <button onClick={() => removeFromCart(item)}>
                        Remove From Cart
                      </button>
                    </StyledButton>
                  </StyledCard>
                </div>
              ))}
          </StyledList>
        </div>
      </StyledDiv>
    </>
  );
};

const DisplayItemInfo = ({ name, image, price, id }) => {
  return (
    <li className="item" key={id}>
      <StyledImage>
        <img
          className={styles.image}
          src={image}
          alt={name}
          style={{ width: "50%", height: "auto" }}
        />
      
      </StyledImage>
      <h3 className={styles.h3}>{name}</h3>
      <h3 className={styles.h3}>${price}</h3>
    </li>
  );
};

const StyledDiv = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

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

const StyledButton = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const StyledImage = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
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
