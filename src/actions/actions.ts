import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { Action } from 'redux';
import { SET_PRODUCTS, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, Product, ProductRespone } from './actionTypes';

export const fetchProducts = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data: Product[] = await response.json();
    dispatch({ type: SET_PRODUCTS, payload: data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const removeFromCart = (productId: number) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const incrementQuantity = (productId: number) => ({
  type: INCREMENT_QUANTITY,
  payload: productId,
});

export const decrementQuantity = (productId: number) => ({
  type: DECREMENT_QUANTITY,
  payload: productId,
});

