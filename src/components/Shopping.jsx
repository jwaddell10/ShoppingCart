import useTitle from "./FetchAPI.jsx";
import PropTypes from "prop-types";
import NavBar from "./NavBar.jsx";


function DisplayItemInfo({ name, image, price }) {
  return (
    <li className="item">
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
    console.log(name, 'etarget')
  }
  return (
    <>
      <button onClick={addToCart}>Add To Cart</button>
    </>
  );
}

const Shopping = () => {
  const { items, error, loading } = useTitle();
  const listItems =
    items &&
    items.map((item, index) => {
      console.log(item, "this is item");
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
          listItems.map((item, index) => (
            <>
              <DisplayItemInfo
                key={index}
                name={item.name}
                image={item.image}
                price={item.price}
              />
              <ManageCart name={item.name}/>
            </>
          ))}
      </ul>
    </>
  );
};

DisplayItemInfo.propTypes = {
  name: PropTypes.string,
  image: PropTypes.array,
  price: PropTypes.number,
};

ManageCart.propTypes = {
    name: PropTypes.string,
}

export { Shopping, ManageCart };
