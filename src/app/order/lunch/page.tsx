import { lunchItems } from "@/constants";
import OrderList from "../components/order/components/OrderList";

const page = () => {
  return <OrderList items={lunchItems} title="Lunch" />;
};

export default page;
