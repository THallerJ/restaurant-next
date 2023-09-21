import { menuItem } from "@/types";

type orderItem = {
  item: menuItem;
  count: number;
};

type cartItems = {
  count: number;
  total: number;
  items: orderItem[];
  backup: orderItem | cartItems | null;
};

export type { orderItem, cartItems };
