"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InputList } from "@/components";
import { useRouter } from "next/navigation";
import { navItems } from "./constants";
import usePathnameUpdated from "./hooks/usePathnameUpdated";
import CartButton from "./components/CartButton";

const OrderHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const headerInputText = usePathnameUpdated(navItems, pathname);

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
      <CartButton />
    </div>
  );
};

export default OrderHeader;
