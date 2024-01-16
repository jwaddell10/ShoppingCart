import useTitle from "./FetchAPI.jsx";
import PropTypes from "prop-types";
import NavBar from "./NavBar.jsx";

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

function ManageCart({ name, item }) {
  function addToCart() {
    //need to add item to cart
    //add items properties
    //just add name of item to cart
    console.log(name, 'etarget')
    console.log(item, 'this is item')
  }
  return (
    <>
      <button onClick={addToCart}>Add To Cart</button>
    </>
  );
}

const Shopping = () => {
  const { items  } = useTitle();
  const listItems =
    items &&
    items.map((item, index) => {
      return {
        item,
        index,
        image: item.image,
        id: item.id,
        name: item.title,
        price: item.price,
      };
    });

  return (
    <>
      <NavBar />
      <h1>Items</h1>
        <ul>
      {listItems &&
        listItems.map((item, index) => {
          // Log the id of each item
          console.log(`Logging id for item ${index + 1}:`, item.id);

          return (
            <div key={item.id}>
              <DisplayItemInfo
                key={index}
                name={item.name}
                id={item.id}
                image={item.image}
                price={item.price}
              />
              <ManageCart name={item.name}/>
            </div>
          );
        })}
    </ul>
    </>
  );
};

DisplayItemInfo.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};

ManageCart.propTypes = {
    name: PropTypes.string,
    item: PropTypes.object,
}

export default Shopping;
