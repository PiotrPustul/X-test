import coins from "../../../../public/assets/coins.png";
import controllerImg from "../../../../public/assets/controller.png";

const Product = ({
  id,
  image,
  title,
  description,
  price,
  onAdd,
  contextData,
}) => {
  const addGameToBasketHandler = () => {
    const product = {
      image,
      title,
      description,
      price,
      id,
    };
    onAdd(product);
  };

  const productInBasket = contextData.findIndex((item) => item.id === id);
  const productClass =
    productInBasket !== -1 ? "product productInBasket" : "product";

  return (
    <div className={productClass}>
      <div className="product--game">
        <img src={image} alt="game-1" />
      </div>
      <div className="product--description">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="product--description__price">
            <img src={coins} alt="coins" />
            <span>{price}</span>
          </div>
        </div>
        <button onClick={addGameToBasketHandler}>Add to basket</button>
      </div>
      <img
        src={controllerImg}
        alt="controller"
        className="product--controller-img"
      />
    </div>
  );
};

export default Product;
