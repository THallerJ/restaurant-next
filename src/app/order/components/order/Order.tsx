import OrderList from "./components/OrderList";
import {
  starterItems,
  breakfastItems,
  lunchItems,
  dinnerItems,
  drinkItems,
} from "@/constants";
import DailySpecial from "./components/DailySpecial";

const Order = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <DailySpecial />
      <OrderList items={starterItems} title="Starters" />
      <OrderList items={breakfastItems} title="Breakfast" />
      <OrderList items={lunchItems} title="Lunch" />
      <OrderList items={dinnerItems} title="Dinner" />
      <OrderList items={drinkItems} title="Drinks" />
    </div>
  );
};

export default Order;
