import { Undo } from "@/assets";
import { useOrder } from "@/app/order/contexts/OrderContext/OrderContext";
import { useCart } from "@/app/order/contexts/CartContext/CartContext";

const UndoPrompt = () => {
  const { cartDispatch } = useOrder();
  const { showUndo, cancelUndo } = useCart();

  const onUndo = () => {
    cancelUndo();
    cartDispatch({ type: "restore" });
  };

  return (
    <div
      className={`absolute  bottom-1/3 left-0 rounded-r-lg border-y-2 
        border-r-2 border-dark/50 bg-third p-1 shadow-xl 
        transition-transform duration-500 ${
          showUndo ? null : "-translate-x-96"
        }`}
    >
      <button className="px-4 text-sm text-dark" onClick={() => onUndo()}>
        <Undo className="h-8 w-8" />
        <span className="text-dark">undo</span>
      </button>
    </div>
  );
};

export default UndoPrompt;
