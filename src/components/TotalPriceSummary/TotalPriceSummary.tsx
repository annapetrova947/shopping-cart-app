import { Product } from "../../actions/actionTypes";
import "./style.css";

interface ProductCardProps {
  products: Array<Product>;
}

export function TotalPriceSummary(props: ProductCardProps) {
  let totalPrice = props.products.reduce((price, product) => {
    return price + product.price * product.quantity;
  }, 0);

  return (
    <div className="cart-total">
      <p className="cart-total__price">Итог: {totalPrice.toFixed(2)}$</p>
    </div>
  );
}
