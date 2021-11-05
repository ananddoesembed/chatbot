import { ADD_TO_CART, CartDispatchType } from "./type";
import { findItem } from "./utils";

const INITIAL_STATE = {
  cartItem: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: CartDispatchType
) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(action);
      const newCart = findItem(action.payload, state.cartItem);
      console.log(newCart, "kjkjb");
      return {
        ...state,
        cartItem: [...state.cartItem, newCart],
      };
    }
    default: {
      return state;
    }
  }
};
