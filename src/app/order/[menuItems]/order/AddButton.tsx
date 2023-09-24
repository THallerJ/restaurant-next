"use client";
import { AnimatedButton } from "@/components";
import { useOrder } from "../../contexts/OrderContext";
import { menuItem } from "@/types";

const AddButton = ({ item }: { item: menuItem }) => {
  const { cartDispatch } = useOrder();

  return (
    <AnimatedButton
      onClick={() => cartDispatch({ type: "add", payload: item })}
      fullSize
    >
      add to cart
    </AnimatedButton>
  );
};

export default AddButton;
