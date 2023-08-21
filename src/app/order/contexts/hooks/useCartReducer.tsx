import { cartItems, orderItem } from "../../types";
import { useReducer } from "react";
import { reducerAction } from "../types";

const useCartReducer = () => {
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
          if (orderItem.item.name === newItem.name) {
            total++;
            return { ...orderItem, count: orderItem.count + 1 };
          }

          return orderItem;
        });

        const array =
          total === state.total ? [...temp, { item: newItem, count: 1 }] : temp;

        if (total === state.total) total++;

        return { total: total, items: array };
      }
      case "deleteItem": {
        const del = action.payload.name;
        state.items.reduce((acc, curr) => {
          if (curr.item.name === del && curr.count !== 1) {
            return [...acc, { ...curr, count: curr.count - 1 }];
          }

          return acc;
        }, [] as orderItem[]);
      }
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);

  return [state, dispatch] as const;
};

export default useCartReducer;
