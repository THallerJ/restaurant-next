import { starterItems } from "@/constants";
import OrderList from "../components/Order/components/OrderList";

const page = () => {
  return <OrderList items={starterItems} title="Starters" />;
};

export default page;
