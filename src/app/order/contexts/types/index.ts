import { menuItem } from "@/types";

type cartActions = "add" | "delete";
type reducerAction = { type: cartActions; payload: menuItem };

export type { cartActions, reducerAction };
