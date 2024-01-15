import useTitle from "./FetchAPI.jsx";
import PropTypes from 'prop-types';
import React from 'react';

function Item({ name, image, price }) {
    return <li className="item">
        {name}
        <img src={image}></img>
        {price}
        </li>
}

const Shopping = () => {
    const { items, error, loading } = useTitle();
    const listItems = items && items.map((item, index) => {
        console.log(item, 'this is item')
        return { 
            item,
            index,
            image: item.image,
            id: item.id,
            name: item.title,
            price: item.price
        }
    })   

  return (
    <>
      <h1>Items</h1>
      <ul>
       {listItems && listItems.map((item, index) => (
         <Item key={index} name={item.name} image={item.image} price={item.price}/>
       )  
        )}
      </ul>
    </>
  );
};

Item.propTypes = {
    name: PropTypes.string,
    image: PropTypes.array,
    price: PropTypes.number,
  };

export default Shopping;
