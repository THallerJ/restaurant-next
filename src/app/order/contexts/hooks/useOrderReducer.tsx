import { menuItem } from "@/types";
import { orderItem } from "../../types";
import { useReducer } from "react";

const useOrderReducer = () => {
  type action = { type: "addItem" | "deleteItem"; payload: menuItem };

  type reducerState = {
    total: number;
    items: orderItem[];
  };

  const initialState: reducerState = {
    total: 0,
    items: [],
  };

  const orderReducer = (state: reducerState, action: action): reducerState => {
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

  const [reducer, dispatch] = useReducer(orderReducer, initialState);

  return [reducer, dispatch];
};

export default useOrderReducer;
