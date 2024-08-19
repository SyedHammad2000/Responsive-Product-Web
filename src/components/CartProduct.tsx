import React from "react";

const CartProduct = ({ id, name, price, img, quantity }: any) => {
  return (
    <div className="
        flex justify-between
        ">
      <img src={img} alt={name} className="h-[50px] w-auto" />
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <p>{price * quantity}</p>
      <button>Delete</button>
    </div>
  );
};

export default CartProduct;
