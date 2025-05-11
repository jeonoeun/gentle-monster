import React from "react";
import useCart from "../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

const CartStatus = () => {
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div className="cart-status">
      <div className="cart">
        <FaShoppingCart size={15} />
        {products && <span>{products.length}</span>}
      </div>
    </div>
  );
};

export default CartStatus;
