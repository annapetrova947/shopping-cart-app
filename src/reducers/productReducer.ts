import {
  SET_PRODUCTS,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  Product,
  ProductRespone,
} from "../actions/actionTypes";

const initialState: Product[] = [];

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload.map((element: ProductRespone) => {
        return { ...element, quantity: 1 };
      });

    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);
    case INCREMENT_QUANTITY:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );

    case DECREMENT_QUANTITY:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      );

    default:
      return state;
  }
};

export default productReducer;
