import { useState, useContext } from "react";

import { productData } from "../../productData";
import Product from "./Product/Product";
import ProductContext from "../../store/Context/product-context";

const Products = () => {
  const [data, setData] = useState(productData);
  const productCtx = useContext(ProductContext);

  const games = data.map((game) => (
    <Product
      key={game.id}
      id={game.id}
      image={game.image}
      title={game.title}
      description={game.description}
      price={game.price}
      onAdd={productCtx.addGame}
      contextData={productCtx.items}
    />
  ));

  return (
    <div className="shop">
      <div className="products">{games}</div>
    </div>
  );
};

export default Products;
