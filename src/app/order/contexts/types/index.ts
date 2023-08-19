import { menuItem } from "@/types";

type cartActions = "addItem" | "deleteItem";
type reducerAction = { type: cartActions; payload: menuItem };

export type { cartActions, reducerAction };
