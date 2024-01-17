import useTitle from "../FetchAPI.jsx";
import PropTypes from "prop-types";

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
        {listItems &&
          listItems.map((item) => (
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
          ))}
      </div>
    </>
  );
};

const DisplayItemInfo = ({ name, image, price, id }) => (
  <li className="item" key={id}>
    <h3>{name}</h3>
    <img src={image} alt={name} height={100} width={100} />
    <h3>${price}</h3>
  </li>
);

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
