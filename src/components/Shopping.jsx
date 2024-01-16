import useTitle from "./FetchAPI.jsx";
import PropTypes from "prop-types";

const Shopping = () => {
  const { items  } = useTitle();
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
      <ul>
        {listItems &&
          listItems.map((item) => (
            <div key={item.id}>
              <DisplayItemInfo
                name={item.name}
                id={item.id}
                image={item.image}
                price={item.price}
              />
              <ManageCart name={item.name}/>
            </div>
          ))}
      </ul>
    </>
  );
};

function DisplayItemInfo({ name, image, price, id }) {
  return (
    <li className="item" key={id}>
      <h3>{name}</h3>
      <img 
        src={image}
        alt={name}
        height={100}
        width={100}
      />
      <h3>${price}</h3>
    </li>
  );
}

function ManageCart({ name }) {
  function addToCart() {
    //need to add item to cart
    //add items properties
    //just add name of item to cart
    //how to trigger function in another module?
    console.log(name, 'etarget')
  }
  return (
    <>
      <button onClick={addToCart}>Add To Cart</button>
    </>
  );
}

DisplayItemInfo.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};

ManageCart.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
}

export default Shopping
