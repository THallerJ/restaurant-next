import { useState } from "react";
import { orderItem } from "../../types";
import { useOrderContext } from "../../contexts/order_context/OrderContext";
import { ListDivider } from "@/components";
import { Close } from "@/assets";
import { useCartContext } from "../../contexts/CartContext";

type CartItemProps = {
  item: orderItem;
  index: number;
};

const CartItem = ({ item, index }: CartItemProps) => {
  const [removeFlag, setRemoveFlag] = useState(false);
  const { cartItems, cartDispatch } = useOrderContext();
  const { notifyUndo } = useCartContext();

  const onDelete = (item: orderItem) => {
    if (item.count === 1) setRemoveFlag(true);
    else cartDispatch({ type: "delete", payload: item.item });
  };

  const onRemove = (item: orderItem) => {
    notifyUndo();
    cartDispatch({ type: "remove", payload: item.item });
  };

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center justify-between p-3 text-sm
          transition-opacity duration-300 ${removeFlag ? "opacity-0" : null}`}
        onTransitionEnd={() => {
          onRemove(item);
        }}
      >
        <p className="w-5/12">{item.item.name}</p>
        <div className="flex items-center">
          <button onClick={() => onDelete(item)}>-</button>
          <span className="w-[3ch] text-center">{item.count}</span>
          <button
            onClick={() => cartDispatch({ type: "add", payload: item.item })}
          >
            +
          </button>
        </div>
        <span className="w-[5ch] text-end">{`$${item.item.price.toFixed(
          2,
        )}`}</span>
        <button onClick={() => setRemoveFlag(true)}>
          <Close className="h-3 w-3" />
        </button>
      </div>
      <ListDivider show={index !== cartItems.items.length - 1} />
    </div>
  );
};

export default CartItem;
