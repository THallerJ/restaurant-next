import {
  breakfastItems,
  lunchItems,
  starterItems,
  dinnerItems,
  drinkItems,
} from "@/constants";
import OrderList from "../components/order/components/OrderList";
import { notFound } from "next/navigation";
//make sure functions that return jsx are like the one here and not lowercase
type Params = { params: { menuItems: string } };

function page({ params: { menuItems } }: Params) {
  const MenuItems = () => {
    switch (menuItems) {
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
