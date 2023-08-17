import { menuItem } from "@/types";
import Image from "next/image";

const MenuItem = ({ item }: { item: menuItem }) => {
  return (
    <div className="flex w-full flex-col justify-between gap-3 rounded-xl bg-white p-3 shadow-md xs:w-48 md:w-72">
      {item.image ? (
        <Image src={item.image} alt={item.name} className="rounded-lg" />
      ) : null}
      <div className="flex h-full flex-col justify-between">
        <span className="font-semibold text-dark">{item.name}</span>
        <p className="text-xs text-dark">{item.details}</p>
        <button className="btn mt-3">Add to cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
