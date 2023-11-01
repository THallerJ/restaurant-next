"use client";
import { AnimatedButton } from "@/components";
import { useOrder } from "../../../contexts/order_context/OrderContext";
import { menuItem } from "@/types";

type AddButtonProps = {
  item: menuItem;
  fullSize?: boolean;
};

const AddButton = ({ item, fullSize }: AddButtonProps) => {
  const { cartDispatch } = useOrder();

  return (
    <AnimatedButton
      onClick={() => cartDispatch({ type: "add", payload: item })}
      fullSize={fullSize}
    >
      add to cart
    </AnimatedButton>
  );
};

export default AddButton;
