import React from 'react';
import './NewCollection.css';
import new_collection from '../assets/new_collections';  // Correct the file extension if needed
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
