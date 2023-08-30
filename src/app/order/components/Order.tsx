import OrderList from "./OrderList";
import {
  starterItems,
  breakfastItems,
  lunchItems,
  dinnerItems,
  drinkItems,
  dailySpecial,
} from "@/constants";
import Image from "next/image";

const Order = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className=" hidden flex-col gap-1 lg:flex">
        <h2 className="heading-sm">Today Daily Special</h2>
        <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-dark p-4 sm:flex-row sm:items-start">
          {dailySpecial.image ? (
            <Image
              src={dailySpecial.image}
              className="w-44 rounded-lg"
              alt="daily-special"
            />
          ) : null}
          <div className="flex flex-col gap-1 ">
            <h4 className="text-xl font-semibold text-dark">
              {dailySpecial.name}
            </h4>
            <p className="text-base">{dailySpecial.details}</p>
          </div>
        </div>
      </div>
      <OrderList items={starterItems} title="Starters" />
      <OrderList items={breakfastItems} title="Breakfast" />
      <OrderList items={lunchItems} title="Lunch" />
      <OrderList items={dinnerItems} title="Dinner" />
      <OrderList items={drinkItems} title="Drinks" />
    </div>
  );
};

export default Order;
