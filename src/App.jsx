import { useState } from "react";

import Header from "./components/Layout/Header";
import Basket from "./components/Basket/Basket";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
import ProductProvider from "./store/Context/ProductProvider";

import "./sass/main.scss";

function App() {
  const [goToCheckout, setGoToCheckout] = useState(false);

  const showCheckoutHandler = () => setGoToCheckout(true);
  const closeCheckoutHandler = () => setGoToCheckout(false);

  return (
    <ProductProvider>
      <div className="App wrapper">
        <Header />
        {!goToCheckout && <Products />}
        {!goToCheckout && <Basket onHandler={showCheckoutHandler} />}
        {goToCheckout && <Checkout onHandler={closeCheckoutHandler} />}
      </div>
    </ProductProvider>
  );
}

export default App;
