import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productAction';
import { ProductComponent } from './ProductComponent';

export const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('products:', products);

  console.log(products);
  return (
    <div className="ui container four column equal height grid">
      <ProductComponent />
    </div>
  );
};
