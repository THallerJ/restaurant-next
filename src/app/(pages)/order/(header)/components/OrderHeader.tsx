"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InputList } from "@/components";
import { useRouter } from "next/navigation";
import { navItems } from "../[menuItems]/constants";
import usePathnameUpdated from "../[menuItems]/hooks/usePathnameUpdated";
import CartButton from "./CartButton";
import { CartContextProvider } from "../../contexts/CartContext";

const OrderHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const headerInputText = usePathnameUpdated(navItems, pathname);

  return (
    <div className="page-scale flex flex-row items-center justify-between">
      <div className="hidden sm:flex" />
      <InputList
        id="menu_header_input_list"
        items={navItems}
        onSelect={(item) => router.push(item.to)}
        text={headerInputText}
        format={(item) => item.text}
        className="w-32 rounded-lg bg-white p-3 shadow-md sm:hidden"
      />
      <div
        className="hidden flex-row gap-4 font-semibold uppercase
        text-dark sm:flex"
      >
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
      <div className="flex w-32 justify-end">
        <CartContextProvider>
          <CartButton />
        </CartContextProvider>
      </div>
    </div>
  );
};

export default OrderHeader;
