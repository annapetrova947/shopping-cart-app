import "./style.css";
import { Product } from "../../actions/actionTypes";
import { Card, IconButton } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { Icon16Delete, Icon16Add, Icon16Minus } from "@vkontakte/icons";

interface ProductCardProps {
  product: Product;
  handleRemoveFromCart: (productId: number) => void;
  handleIncrementQuantity: (productId: number) => void;
  handleDecrementQuantity: (productId: number) => void;
}

export function ProductCard({
  product,
  handleRemoveFromCart,
  handleIncrementQuantity,
  handleDecrementQuantity,
}: ProductCardProps) {
  return (
    <Card mode="shadow" className="card">
      <img className="card__image" src={product.image} alt={product.title} />
      <div className="card__details">
        <div className="card__title">{product.title}</div>
        <div className="card__price">{product.price}</div>
      </div>
      <div className="card__actions">
        <IconButton
          label="Уменьшить"
          onClick={() => handleDecrementQuantity(product.id)}
          disabled={product.quantity === 1}
        >
          <Icon16Minus />
        </IconButton>
        <div>{product.quantity}</div>
        <IconButton
          label="Добавить"
          onClick={() => handleIncrementQuantity(product.id)}
          disabled={product.quantity === 10}
        >
          <Icon16Add />
        </IconButton>
        <IconButton
          label="Удалить"
          onClick={() => handleRemoveFromCart(product.id)}
        >
          <Icon16Delete />
        </IconButton>
      </div>
    </Card>
  );
}
