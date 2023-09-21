import { cartItems, orderItem } from "@/app/order/types";
import { menuItem } from "@/types";

type cartActions = "add" | "delete" | "remove" | "clear";
type reducerAction =
  | { type: cartActions; payload: menuItem }
  | { type: "restore"; payload: cartItems | orderItem }
  | { type: "clear" };

export type { cartActions, reducerAction };
