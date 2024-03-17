import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  fetchProducts,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../actions/actions";
import { ProductCard } from "../ProductCard/ProductCard";
import { TotalPriceSummary } from "../TotalPriceSummary/TotalPriceSummary";
import { Product } from "../../actions/actionTypes";
import "./App.css";

const App: React.FC = () => {
  const dispatch = useDispatch<any>();
  const products = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {}, [products]);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId: number) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId: number) => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <div className="page">
      <div className="products">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
          />
        ))}
      </div>

      <TotalPriceSummary products={products} />
    </div>
  );
};

export default App;
