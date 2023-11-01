import { cartItems, orderItem } from "../../../types";
import { reducerAction } from "../types";
import useLocalReducer from "@/hooks/useLocalReducer";
import { addItem } from "../utils";
import { useState } from "react";
import { roundNum } from "@/app/order/utils";

const useCartReducer = () => {
  type backupType = orderItem | cartItems | null;
  const [backup, setBackup] = useState<backupType>(null);

  const orderReducer = (state: cartItems, action: reducerAction): cartItems => {
    switch (action.type) {
      case "add": {
        setBackup(null);
        const res = addItem(state, action.payload);
        return {
          count: res.count,
          total: res.total,
          items: res.items,
        };
      }
      case "delete": {
        const delItem = action.payload;
        let count = state.count;
        let total = state.total;
        setBackup({ item: delItem, count: 1 });

        const items = state.items.reduce((acc, curr) => {
          if (curr.item.name === delItem.name) {
            count--;
            total = roundNum(total - delItem.price);
            if (curr.count !== 1)
              return [...acc, { ...curr, count: curr.count - 1 }];
            if (curr.count === 1) return acc;
          }

          return [...acc, curr];
        }, [] as orderItem[]);

        return { count, total, items };
      }
      case "remove": {
        const remItem = action.payload;
        let count = state.count;
        let total = state.total;

        const items = state.items.reduce((acc, curr) => {
          if (curr.item.name === remItem.name) {
            setBackup({ item: remItem, count: curr.count });
            count -= curr.count;
            total = roundNum(total - curr.count * curr.item.price);
            return acc;
          }

          return [...acc, curr];
        }, [] as orderItem[]);

        return { count, total, items };
      }
      case "restore": {
        const data = backup;
        setBackup(null);

        // data is type cartItems
        if (data && "total" in data) return data;

        // data is type orderItem
        if (data && !("total" in data)) {
          const res = addItem(state, data);
          return {
            count: res.count,
            total: res.total,
            items: res.items,
          };
        }
      }
      case "clear": {
        setBackup(state);
        return { count: 0, total: 0, items: [] };
      }
      default:
        return state;
    }
  };

  const key = "restaurant-next-cart";
  const init: cartItems = { count: 0, total: 0, items: [] };

  const [state, dispatch] = useLocalReducer(key, init, orderReducer);

  return [state, dispatch] as const;
};

export default useCartReducer;
