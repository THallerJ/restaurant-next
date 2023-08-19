"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cart } from "@/assets";
import { InputList } from "@/components";
import { useRouter } from "next/navigation";
import { navItems } from "./constants";
import usePathnameUpdated from "./hooks/usePathnameUpdated";
import { useOrder } from "../../contexts/OrderContext";

const OrderHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const headerInputText = usePathnameUpdated(navItems, pathname);
  const { cartItems } = useOrder();

  return (
    <div className="page-scale flex flex-row items-center justify-between">
      <div className="hidden w-8 sm:flex" />
      <InputList
        items={navItems}
        onSelect={(item) => router.push(item.to)}
        text={headerInputText}
        format={(item) => item.text}
        style="p-3 rounded-lg shadow-md w-32"
        wrapperStyle="sm:hidden"
      />
      <div className="hidden flex-row gap-4 font-semibold uppercase text-dark sm:flex">
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
      <button className="relative">
        <Cart className="h-8 w-8" />
        {cartItems.total > 0 ? (
          <div className="absolute left-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-dark">
            <span className="text-sm font-semibold text-offwhite">
              {cartItems.total}
            </span>
          </div>
        ) : null}
      </button>
    </div>
  );
};

export default OrderHeader;
