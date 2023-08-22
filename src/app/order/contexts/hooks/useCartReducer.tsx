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
      case "add": {
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
      case "delete": {
        const del = action.payload.name;
        let total = state.total;

        const array = state.items.reduce((acc, curr) => {
          if (curr.item.name === del) {
            total--;
            if (curr.count !== 1)
              return [...acc, { ...curr, count: curr.count - 1 }];
            if (curr.count === 1) return acc;
          }

          return [...acc, curr];
        }, [] as orderItem[]);

        return { total: total, items: array };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);

  return [state, dispatch] as const;
};

export default useCartReducer;
