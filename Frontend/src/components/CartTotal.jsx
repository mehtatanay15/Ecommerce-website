import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fees, getCartAmout } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"cart"} text2={"total"} />
      </div>
      <div className="felx flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>subtotal</p>
          <p>
            {currency}
            {getCartAmout()}.00{" "}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>shipping fee</p>
          <p>
            {" "}
            {currency}
            {delivery_fees}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>total</b>
          <b>
            {currency}
            {getCartAmout() === 0 ? 0 : getCartAmout() + delivery_fees}{" "}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
