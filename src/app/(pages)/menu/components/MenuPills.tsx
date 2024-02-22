import { useHeaderLayoutContext } from "@/app/contexts/HeaderLayoutContext";
import { refMenuItem } from "../types";

type MenuPillsProps = {
  menuRefMap: Map<string, refMenuItem>;
};

const MenuPills = ({ menuRefMap }: MenuPillsProps) => {
  const { headerLayoutRef, getHeaderHeight } = useHeaderLayoutContext();

  const renderPills = () => {
    const array: JSX.Element[] = [];
    let i = 0;

    menuRefMap.forEach((val) => {
      const jsx = (
        <button
          key={`${val.text}menuRef`}
          className={`rounded-lg bg-dark px-4 py-2 text-sm text-fourth
            ${i === 0 ? "ml-1" : "ml-0"} 
            ${i === menuRefMap.size - 1 ? "mr-1" : "mr-2"}`}
          onClick={() => {
            if (val.ref) {
              const rect = val.ref.current?.getBoundingClientRect();
              const scrollTo = rect?.top || 0;
              headerLayoutRef?.current?.scrollTo({
                top: scrollTo - getHeaderHeight() - 10,
                left: 0,
                behavior: "smooth",
              });
            }
          }}
          type="button"
        >
          {val.text}
        </button>
      );

      array.push(jsx);
      i++;
    });

    return array;
  };

  return renderPills();
};

export default MenuPills;
