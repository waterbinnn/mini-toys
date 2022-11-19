import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productAction';
import { ProductComponent } from './ProductComponent';

export const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div
      className="ui container four column equal height grid"
      style={styles.container}
    >
      <ProductComponent />
    </div>
  );
};

const styles = {
  container: {
    marginTop: 50,
  },
};
