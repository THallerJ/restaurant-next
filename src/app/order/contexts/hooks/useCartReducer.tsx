import { cartItems, orderItem } from "../../types";
import { reducerAction } from "../types";
import useLocalReducer from "@/hooks/useLocalReducer";

const useCartReducer = () => {
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

        const items =
          count === state.count ? [...temp, { item: newItem, count: 1 }] : temp;

        if (count === state.count) count++;

        total += newItem.price;

        return { count, total, items, backup: null };
      }
      case "delete": {
        const delItem = action.payload;
        let count = state.count;
        let total = state.total;
        const backup = state.backup;

        const items = state.items.reduce((acc, curr) => {
          if (curr.item.name === delItem.name) {
            count--;
            total -= delItem.price;
            if (curr.count !== 1)
              return [...acc, { ...curr, count: curr.count - 1 }];
            if (curr.count === 1) return acc;
          }

          return [...acc, curr];
        }, [] as orderItem[]);

        return { count, total, items, backup };
      }
      case "remove": {
        const remItem = action.payload;
        let count = state.count;
        let total = state.total;
        const backup = state.backup;

        const items = state.items.reduce((acc, curr) => {
          if (curr.item.name === remItem.name) {
            count -= curr.count;
            total -= curr.count * curr.item.price;
            return acc;
          }

          return [...acc, curr];
        }, [] as orderItem[]);

        return { count, total, items, backup };
      }
      case "restore": {
        const data = state.backup;
        if (data && "total" in data) return data;

        if (data && !("total" in data)) {
          const count = data.count + state.count;
          const total = data.item.price * data.count + state.total;
          const items = [...state.items, data];
          const backup = state.backup;

          return { count, total, items, backup };
        }
      }
      case "clear": {
        return { count: 0, total: 0, items: [], backup: state };
      }
      default:
        return state;
    }
  };

  const key = "restaurant-next-cart";
  const init: cartItems = { count: 0, total: 0, items: [], backup: null };

  const [state, dispatch] = useLocalReducer(key, init, orderReducer);

  return [state, dispatch] as const;
};

export default useCartReducer;
