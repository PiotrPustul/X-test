import React from "react";
import Basket from "../Basket/Basket";

const Checkout = ({ onHandler }) => {
  return (
    <div className="checkout">
      <div className="wrapper">
        <div className="checkout--container">
          <button onClick={onHandler} className="btn-checkout">
            Go back
          </button>
          <Basket displayBtn={false} displayHeader={false} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
