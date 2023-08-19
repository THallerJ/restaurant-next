import { OrderContextProvider } from "../contexts/OrderContext";
import OrderList from "./OrderList";
import {
  starterItems,
  breakfastItems,
  lunchItems,
  dinnerItems,
  drinkItems,
} from "@/constants";

const Order = () => {
  return (
    <OrderContextProvider>
      <div className="flex flex-col gap-8">
        <OrderList items={starterItems} title="Starters" />
        <OrderList items={breakfastItems} title="Breakfast" />
        <OrderList items={lunchItems} title="Lunch" />
        <OrderList items={dinnerItems} title="Dinner" />
        <OrderList items={drinkItems} title="Drinks" />
      </div>
    </OrderContextProvider>
  );
};

export default Order;
