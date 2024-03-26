// DeleteProduct.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from './redux/actions';

const DeleteProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete {product.name}?</p>
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
};

export default DeleteProduct;
