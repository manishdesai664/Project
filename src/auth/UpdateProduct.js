// UpdateProduct.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './redux/actions';


const UpdateProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = () => {
    dispatch(updateProduct({ id: product.id, name, price }));
  };

  return (
    <div>
      <h2>Update Product</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleSubmit}>Update Product</button>
    </div>
  );
};


export default UpdateProduct;
