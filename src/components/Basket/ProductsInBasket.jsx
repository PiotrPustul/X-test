import { useContext } from "react";

import ProductContext from "../../store/Context/product-context";
import binIcon from "../../../public/assets/bin.png";
import coinsIcon from "../../../public/assets/coins.png";

const ProductsInBasket = () => {
  const productCtx = useContext(ProductContext);

  const removeProductFromBasket = (id) => {
    productCtx.removeGame(id);
  };

  const productsBasket = productCtx.items.map((product) => (
    <div key={product.id} className="product">
      <div className="img--wrapper">
        <img src={product.image} alt="game-image" />
      </div>
      <div className="title--wrapper">
        <span>{product.title}</span>
        <div>
          <img src={coinsIcon} alt="coins" />
          <span>{product.price}</span>
        </div>
      </div>
      <button
        className="bin--wrapper"
        onClick={() => removeProductFromBasket(product.id)}
      >
        <img src={binIcon} alt="bin-icon" />
      </button>
    </div>
  ));

  return productsBasket;
};

export default ProductsInBasket;
