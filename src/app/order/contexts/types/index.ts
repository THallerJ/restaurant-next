import { menuItem } from "@/types";

type cartActions = "add" | "delete" | "remove";
type reducerAction = { type: cartActions; payload: menuItem };

export type { cartActions, reducerAction };
