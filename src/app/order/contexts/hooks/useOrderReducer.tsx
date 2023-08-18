import { menuItem } from "@/types";
import { orderItem } from "../../types";

const useOrderReducer = () => {
  type reducerState = {
    items: orderItem[];
  };

  const initialState: reducerState = {
    items: [],
  };

  type reducerActions = "addItem" | "deleteItem";

  const reducer = (
    state: orderItem[],
    action: { type: reducerActions; payload: menuItem },
  ): orderItem[] => {
    switch (action.type) {
      case "addItem":
        // TODO: search if item already in cart, iterate count if exists, otherwise set to 1
        return [];
      case "deleteItem":
        // TODO: Deiterate count of item if exists, remove entirely if count 0, if item not in cart do nothing
        return [];
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
  return reducer;
};

export default useOrderReducer;
