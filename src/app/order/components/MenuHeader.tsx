import React from "react";
import Link from "next/link";

const MenuHeader = () => {
  return (
    <div className="flex space-x-6 font-semibold uppercase text-dark">
      <Link href="/order/starters">Starters</Link>
      <Link href="/order/breakfast">Breakfast</Link>
      <Link href="/order/lunch">Lunch</Link>
      <Link href="/order/dinner">Dinner</Link>
      <Link href="/order/drinks">Drinks</Link>
    </div>
  );
};

export default MenuHeader;
