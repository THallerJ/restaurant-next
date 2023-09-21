import { menuItem } from "@/types";

type cartActions = "add" | "delete" | "remove" | "clear";
type reducerAction =
  | { type: cartActions; payload: menuItem }
  | { type: "clear" | "restore" };

export type { cartActions, reducerAction };
