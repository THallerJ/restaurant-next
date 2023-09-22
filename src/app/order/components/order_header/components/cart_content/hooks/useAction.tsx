/*import { useOrder } from "@/app/order/contexts/OrderContext";
import { useNotify } from "@/hooks";
import { orderItem } from "@/app/order/types";

const useAction = () => {
  const { cartDispatch } = useOrder();
  const [notified, notify] = useNotify(100000);

  type action = { type: "delete" | "remove", item: orderItem} }

  const handleAction = (action: action, item: orderItem) => {
    switch (action) {
      case "delete": {
        cartDispatch({ type: "delete", payload: item.item });
      }
      case "remove": {
        notify();
        cartDispatch({ type: "remove", payload: item.item });
      }
      case "clear": {
        notify();
        cartDispatch({ type: "clear" });
      }
    }
  };

  return [notified, handleAction] as const;
};

export default useAction; */
