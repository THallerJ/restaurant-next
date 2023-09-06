import {
  breakfastItems,
  lunchItems,
  starterItems,
  dinnerItems,
  drinkItems,
} from "@/constants";
import OrderList from "./order/OrderList";
import Order from "./order/Order";
import { notFound } from "next/navigation";

type Params = { params: { menuItems: string } };

function page({ params: { menuItems } }: Params) {
  const MenuItems = () => {
    switch (menuItems) {
      case "all":
        return <Order />;
      case "starters":
        return <OrderList title={menuItems} items={starterItems} />;
      case "breakfast":
        return <OrderList title={menuItems} items={breakfastItems} />;
      case "lunch":
        return <OrderList title={menuItems} items={lunchItems} />;
      case "dinner":
        return <OrderList title={menuItems} items={dinnerItems} />;
      case "drinks":
        return <OrderList title={menuItems} items={drinkItems} />;
      default:
        return notFound();
    }
  };

  return <MenuItems />;
}

export default page;
