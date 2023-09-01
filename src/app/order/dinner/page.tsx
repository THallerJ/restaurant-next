import { dinnerItems } from "@/constants";
import OrderList from "../components/allalala/components/OrderList";

const page = () => {
  return <OrderList items={dinnerItems} title="Dinner" />;
};

export default page;
