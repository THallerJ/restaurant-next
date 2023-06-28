"use client";
import { useHeaderLayoutContext } from "../../../contexts";
import SocialMediaIcons from "../../../components/SocialMediaIcons";
import { navItemType } from "../types";
import Link from "next/link";

type MobileNavProps = {
  toggled: boolean;
  navItems: navItemType[];
  pathname: string;
  onNavSelected: () => void;
};

const MobileNav = ({
  toggled,
  navItems,
  pathname,
  onNavSelected,
}: MobileNavProps) => {
  const { getHeaderHeight } = useHeaderLayoutContext();
  return (
    <div
      className={`pointer-events-auto fixed left-0 flex
          w-full justify-center bg-dark transition-all 
          duration-500 md:hidden 
          ${toggled ? "translate-y-0" : "translate-y-[100vh]"}`}
      style={{
        top: getHeaderHeight() - 1,
        height: `calc(100vh - ${getHeaderHeight() - 1}px)`,
      }}
    >
      <nav className="flex flex-col justify-evenly">
        <ul className="flex flex-col gap-10">
          {navItems.map((item) => (
            <li
              key={`mobile-${item.to}`}
              className={`text-center text-4xl text-fourth 
            	  ${item.to === pathname ? "underline underline-offset-4" : ""}`}
            >
              <Link href={item.to} onClick={onNavSelected}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <SocialMediaIcons
          styles="flex gap-10 self-center"
          iconStyles="w-[2rem] h-[2rem]"
        />
      </nav>
    </div>
  );
};

export default MobileNav;
