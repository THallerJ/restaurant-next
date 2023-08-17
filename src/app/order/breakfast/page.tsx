import { breakfastItems } from "@/constants";
import OrderList from "../components/OrderList";

const page = () => {
  return <OrderList items={breakfastItems} title="Breakfast" />;
};

export default page;
