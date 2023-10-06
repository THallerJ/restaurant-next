import { menuItem } from "@/types";
import { orderItem, cartItems } from "../../../types";
import { roundNum } from "@/app/order/utils";

const addItem = (state: cartItems, newItem: menuItem | orderItem) => {
  let count = state.count;
  let total = state.total;
  let item: orderItem;

  // newItem is a menuItem, needs to be converted into orderItem
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

  total = roundNum(total + item.item.price * item.count);

  return { count, total, items };
};

export { addItem };
