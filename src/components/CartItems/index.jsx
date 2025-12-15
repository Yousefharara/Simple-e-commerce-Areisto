import React from "react";
import "./style.css";
import { useProductContext } from "../../context/ProductContext";

const CartItems = () => {
  const { getTotal } = useProductContext();

  return (
    <div className="cart__items">
      <p>Cart Items: {getTotal()}</p>
    </div>
  );
};

export default CartItems;
