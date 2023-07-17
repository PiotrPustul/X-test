import { useReducer } from "react";

import ProductContext from "./product-context";
import productReducer, {
  defaultBasketState,
} from "../Reducers/product-reducer";
import { ADD, REMOVE } from "../Actions/product-actions";

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    defaultBasketState
  );

  const addGameToBasketHandler = (item) => {
    productDispatch({ type: ADD, item: item });
  };

  const removeGameFromBasketHandler = (id) => {
    productDispatch({ type: REMOVE, id: id });
  };

  const productContext = {
    items: productState.items,
    totalAmount: productState.totalAmount,
    addGame: addGameToBasketHandler,
    removeGame: removeGameFromBasketHandler,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
