"use client";
import { Logo } from "@/assets";
import { navItemType } from "@/types";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { MenuButton } from "@/components";
import { useHeaderLayoutContext } from "@/app/contexts/HeaderLayoutContext";
import Link from "next/link";

type NavProps = {
  toggled: boolean;
  doShrinkNav: boolean;
  navItems: navItemType[];
  pathname: string;
  onNavSelected: () => void;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({
  toggled,
  doShrinkNav,
  navItems,
  pathname,
  onNavSelected,
  setToggled,
}: NavProps) => {
  const { headerRef } = useHeaderLayoutContext();

  return (
    <>
      <div
        className={`pointer-events-auto 
          ${doShrinkNav ? "p-0" : "md:p-5 xl:p-10"}`}
      >
        <nav
          className="flex w-full items-center justify-between py-4"
          ref={headerRef}
        >
          <h1>
            <Link href="/" onClick={onNavSelected}>
              <Logo alt="logo" className="h-16 w-36 p-4 sm:w-48" />
            </Link>
          </h1>

          <ul className="hidden items-end gap-14 md:flex">
            {navItems.map((item) => (
              <li
                key={`largescreen-${item.to}`}
                className={`font-poppins text-lg font-medium uppercase ${
                  doShrinkNav ? "text-fourth" : "text-fourth"
                } hover:cursor-pointer hover:text-third ${
                  pathname.startsWith(item.to)
                    ? "underline underline-offset-4"
                    : ""
                }`}
              >
                <Link href={item.to} onClick={onNavSelected}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <SocialMediaIcons
            className="hidden w-48 gap-8 lg:flex"
            iconClassName="w-6 h-6 cursor-pointer hover:stroke-third"
          />
          <div className="flex p-4 md:hidden">
            <MenuButton
              toggle={toggled}
              onClick={() => setToggled((prev) => !prev)}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
