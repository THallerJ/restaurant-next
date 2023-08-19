import { menuItem } from "@/types";

type orderItem = {
  item: menuItem;
  count: number;
};

type cartItems = {
  total: number;
  items: orderItem[];
};

export type { orderItem, cartItems };
