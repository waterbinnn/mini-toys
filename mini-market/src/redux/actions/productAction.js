import { ActionTypes } from '../constants/action-types';
import fakeStoreApi from '../../apis/fakeStoreApi';

export const fetchProducts = () => async (dispatch) => {
  const res = await fakeStoreApi.get('/products');
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: res.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const res = await fakeStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: res.data });
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
