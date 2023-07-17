import { ADD, REMOVE } from "../Actions/product-actions";

export const defaultBasketState = {
  items: [],
  totalAmount: 0,
};

const productReducer = (state, action) => {
  if (action.type === ADD) {
    const producktInBasketIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (producktInBasketIndex !== -1) {
      return state;
    }

    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === REMOVE) {
    const filteredItems = state.items.filter((item) => item.id !== action.id);
    const existingProductIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingProduct = state.items[existingProductIndex];
    const updatedTotalAmount = state.totalAmount - existingProduct.price;

    return {
      items: filteredItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultBasketState;
};

export default productReducer;
