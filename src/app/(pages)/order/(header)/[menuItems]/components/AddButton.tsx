"use client";
import { AnimatedButton } from "@/components";
import { useOrderContext } from "../../../contexts/order_context/OrderContext";
import { menuItem } from "@/types";

type AddButtonProps = {
  item: menuItem;
  fullSize?: boolean;
};

const AddButton = ({ item, fullSize }: AddButtonProps) => {
  const { cartDispatch } = useOrderContext();

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
