import OrderList from "./OrderList";
import {
  starterItems,
  breakfastItems,
  lunchItems,
  dinnerItems,
  drinkItems,
} from "@/constants";
import DailySpecial from "./DailySpecial";

const Order = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <DailySpecial />
      <OrderList items={starterItems} title="Starters" id="starters" />
      <OrderList items={breakfastItems} title="Breakfast" id="breakfast" />
      <OrderList items={lunchItems} title="Lunch" id="lunch" />
      <OrderList items={dinnerItems} title="Dinner" id="dinner" />
      <OrderList items={drinkItems} title="Drinks" id="drinks" />
    </div>
  );
};

export default Order;
