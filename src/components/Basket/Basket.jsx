import { useContext } from "react";

import ProductContext from "../../store/Context/product-context";
import ProductsInBasket from "./ProductsInBasket";

const Basket = ({ onHandler, displayHeader = true, displayBtn = true }) => {
  const productCtx = useContext(ProductContext);

  console.log(productCtx.items.length);

  const isBtnCheckoutDisabled = productCtx.items.length
    ? "btn-basket"
    : "btn-basket btn-basket--disabled";

  const disabledBtn = productCtx.items.length ? false : true;

  return (
    <div className="basket">
      <div className="products">
        {displayHeader && <h1>Basket</h1>}

        <div className="products--product">
          {productCtx.items.length ? <ProductsInBasket /> : <h2>No items</h2>}
        </div>
      </div>

      {productCtx.items.length ? (
        <div className="products--total-amount">
          <p>Total</p>
          <span>{productCtx.totalAmount} Gil</span>
        </div>
      ) : null}

      {displayBtn && (
        <button
          className={isBtnCheckoutDisabled}
          onClick={onHandler}
          disabled={disabledBtn}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default Basket;
