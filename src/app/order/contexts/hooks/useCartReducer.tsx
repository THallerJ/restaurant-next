import { cartItems, orderItem } from "../../types";
import { menuItem } from "@/types";
import { reducerAction } from "../types";
import useLocalReducer from "@/hooks/useLocalReducer";

const useCartReducer = () => {
  const addItem = (state: cartItems, newItem: menuItem | orderItem) => {
    let count = state.count;
    let total = state.total;
    let item: orderItem;

    // newItem is a menuItem, needs to converted into orderItem
    if ("name" in newItem) item = { item: newItem, count: 1 };
    else item = newItem;

    const temp = state.items.map((orderItem) => {
      if (orderItem.item.name === item.item.name) {
        count = count + item.count;
        return { ...orderItem, count: orderItem.count + item.count };
      }

      return orderItem;
    });

    let items = temp;

    if (temp.length === 0 || count === state.count) {
      items = [...temp, item];
      count = count + item.count;
    }

    total += item.item.price * item.count;

    return { count, total, items };
  };

  const orderReducer = (state: cartItems, action: reducerAction): cartItems => {
    switch (action.type) {
      case "add": {
        const res = addItem(state, action.payload);
        return {
          count: res.count,
          total: res.total,
          items: res.items,
          backup: null,
        };
      }
      case "delete": {
        const delItem = action.payload;
        let count = state.count;
        let total = state.total;
        const backup = { item: delItem, count: 1 };

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
        let backup = state.backup;

        const items = state.items.reduce((acc, curr) => {
          if (curr.item.name === remItem.name) {
            backup = { item: remItem, count: curr.count };
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
        // data is type cartItems
        if (data && "total" in data) return data;

        // data is type orderItem
        if (data && !("total" in data)) {
          const res = addItem(state, data);
          return {
            count: res.count,
            total: res.total,
            items: res.items,
            backup: null,
          };
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
