import { menuItem } from "@/types";
import { cartItems } from "../../types";
import { cartActions } from "../types";
import { useReducer } from "react";

const useCartReducer = () => {
  type reducerAction = { type: cartActions; payload: menuItem };

  const initialState: cartItems = {
    total: 0,
    items: [],
  };

  const orderReducer = (state: cartItems, action: reducerAction): cartItems => {
    switch (action.type) {
      case "addItem": {
        const newItem = action.payload;
        let total = state.total;

        const temp = state.items.map((orderItem) => {
          if ((orderItem.item.name = newItem.name)) {
            orderItem.count++;
            total++;
          }

          return orderItem;
        });

        const array =
          total === state.total ? [...temp, { item: newItem, count: 1 }] : temp;

        return { total: total, items: array };
      }
      case "deleteItem": {
        // TODO: Deiterate count of item if exists, remove entirely if count 0, if item not in cart do nothing
        // return state;
      }
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);
  return [state, dispatch] as const;
};

export default useCartReducer;
