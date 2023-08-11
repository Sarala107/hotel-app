import React from "react";
import { Link } from "react-router-dom";

const CartPageComponent = () => {
  return (
    <div className="cart-page">
      <h3>☹️No item in cart🙁</h3>

      <button>
        <Link to="/">Go To Home</Link>
      </button>
    </div>
  );
};

export default CartPageComponent;
