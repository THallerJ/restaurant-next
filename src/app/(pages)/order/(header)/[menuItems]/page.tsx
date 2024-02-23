import {
  breakfastItems,
  lunchItems,
  starterItems,
  dinnerItems,
  drinkItems,
} from "@/constants";
import OrderList from "./components/OrderList";
import Order from "./components/Order";
import { notFound } from "next/navigation";

type Params = { params: { menuItems: string } };

const OrderItemsPage = ({ params: { menuItems } }: Params) => {
  const MenuItems = () => {
    switch (menuItems) {
      case "all":
        return <Order />;
      case "starters":
        return (
          <OrderList title={menuItems} items={starterItems} id="starters" />
        );
      case "breakfast":
        return (
          <OrderList title={menuItems} items={breakfastItems} id="breakfast" />
        );
      case "lunch":
        return <OrderList title={menuItems} items={lunchItems} id="lunch" />;
      case "dinner":
        return <OrderList title={menuItems} items={dinnerItems} id="dinner" />;
      case "drinks":
        return <OrderList title={menuItems} items={drinkItems} id="drinks" />;
      default:
        return notFound();
    }
  };

  return <MenuItems />;
};

export default OrderItemsPage;
