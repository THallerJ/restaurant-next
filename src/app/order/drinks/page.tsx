import { drinkItems } from "@/constants";
import OrderList from "../components/allalala/components/OrderList";

const page = () => {
  return <OrderList items={drinkItems} title="Drinks" />;
};

export default page;
