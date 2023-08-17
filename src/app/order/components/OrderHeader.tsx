"use client";
import Link from "next/link";
import { navItemType } from "@/types";
import { usePathname } from "next/navigation";
import { Cart } from "@/assets";

const OrderHeader = () => {
  const pathname = usePathname();

  const navItems: navItemType[] = [
    {
      to: "/order",
      text: "All",
    },
    {
      to: "/order/starters",
      text: "Starters",
    },
    {
      to: "/order/breakfast",
      text: "Breakfast",
    },
    {
      to: "/order/lunch",
      text: "Lunch",
    },
    {
      to: "/order/dinner",
      text: "Dinner",
    },
    {
      to: "/order/drinks",
      text: "Drinks",
    },
  ];

  return (
    <div className="flex w-full flex-row items-center justify-center">
      <div className="flex flex-row gap-4 font-semibold uppercase text-dark">
        {navItems.map((item) => (
          <Link
            href={item.to}
            key={item.to}
            className={`${
              pathname === item.to ? "underline underline-offset-2" : null
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <button>
        <Cart className="h-9 w-9" />
      </button>
    </div>
  );
};

export default OrderHeader;
