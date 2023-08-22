import { cartItems, orderItem } from "../../types";
import { useReducer } from "react";
import { reducerAction } from "../types";

const useCartReducer = () => {
  const initialState: cartItems = {
    count: 0,
    total: 0,
    items: [],
  };

  const orderReducer = (state: cartItems, action: reducerAction): cartItems => {
    switch (action.type) {
      case "add": {
        const newItem = action.payload;
        let count = state.count;
        let total = state.total;

        const temp = state.items.map((orderItem) => {
          if (orderItem.item.name === newItem.name) {
            count++;
            return { ...orderItem, count: orderItem.count + 1 };
          }

          return orderItem;
        });

        const array =
          count === state.count ? [...temp, { item: newItem, count: 1 }] : temp;

        if (count === state.count) count++;

        total += newItem.price;

        return { count: count, total: total, items: array };
      }
      case "delete": {
        const delItem = action.payload;
        let count = state.count;
        let total = state.total;

        const array = state.items.reduce((acc, curr) => {
          if (curr.item.name === delItem.name) {
            count--;
            total -= delItem.price;
            if (curr.count !== 1)
              return [...acc, { ...curr, count: curr.count - 1 }];
            if (curr.count === 1) return acc;
          }

          return [...acc, curr];
        }, [] as orderItem[]);

        return { count: count, total: total, items: array };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);

  return [state, dispatch] as const;
};

export default useCartReducer;
