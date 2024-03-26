// CreateProduct.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './redux/actions';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    dispatch(addProduct({ name, price }));
    setName('');
    setPrice('');
  };

  return (
    <div>
      <h2>Create Product</h2>
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default CreateProduct;
