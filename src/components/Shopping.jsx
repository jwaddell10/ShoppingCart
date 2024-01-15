import useTitle from "./FetchAPI.jsx";
import PropTypes from 'prop-types';
import React from 'react';

function Item({ name }) {
    return <li className="item">{name}</li>
}

const Shopping = () => {
    const { items, error, loading } = useTitle();
    const listItems = items && items.map((item) => {
        return { 
            image: item.images,
            id: item.id,
            name: item.title
        }
    })
    console.log(listItems, 'this is list')
    
  return (
    <>
      <h1>Items</h1>
      <ul>
      <Item />
      </ul>
    </>
  );
};

Item.propTypes = {
    name: PropTypes.string,
  };

export default Shopping;
