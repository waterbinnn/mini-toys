import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productAction';
import { useSelector } from 'react-redux';

export const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  console.log(product);

  const fetchProductDetail = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.error(err);
      });

    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (productId && productId !== '') {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

  return (
    <div className="ui grid container" style={styles.wrapper}>
      {Object.keys(product).length === 0 ? (
        <div style={styles.loading}>Loading...</div>
      ) : (
        <div className="ui segment" style={styles.contianer}>
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  src={image}
                  style={styles.image}
                />
              </div>
              <div className="column rp" style={styles.rp}>
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  contianer: {
    width: '100%',
    marginTop: 100,
    padding: 40,
    borderRadius: 8,
  },
  image: {
    width: 'auto',
    height: 600,
    objectFit: 'contain',
    padding: 50,
  },
  rp: {
    padding: 30,
  },
  loading: {
    marginTop: 100,
    fontSize: 30,
  },
};
