import { drinkItems } from "@/constants";
import OrderList from "../components/order/components/OrderList";

const page = () => {
  return <OrderList items={drinkItems} title="Drinks" />;
};

export default page;
