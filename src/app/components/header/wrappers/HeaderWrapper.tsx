"use client";
import { useState } from "react";
import { useDetectScroll, useStateToRef } from "@/hooks";
import useNavItemSelected from "../hooks/useNavItemSelected";
import { navItems } from "../constants";
import { useHeaderLayoutContext } from "@/app/contexts";
import useSmoothScroll from "../hooks/useSmoothScroll";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import { usePathname } from "next/navigation";
import HeaderInfoWrapper from "./HeaderInfoWrapper";

const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [toggled, setToggled] = useState<boolean>(false);
  const { headerLayoutRef, autoScroll } = useHeaderLayoutContext();
  const pathname = usePathname();

  const onNavSelected = useNavItemSelected(setToggled);
  const isHome = pathname === "/";

  const scrollThreshold = 10;
  const scrolled = useDetectScroll(headerLayoutRef, scrollThreshold, isHome);
  const autoScrollRef = useStateToRef(autoScroll);
  const enableSmoothScroll = scrolled && !autoScrollRef.current;
  useSmoothScroll(enableSmoothScroll, scrollThreshold);

  const doPersistNav = !isHome || scrolled;

  const getBgClass = (): string => {
    const transition = "transition-colors duration-500";

    if (toggled && doPersistNav) return "bg-dark";
    if (toggled && !doPersistNav) return `bg-dark md:bg-dark/0 ${transition}`;
    if (isHome && doPersistNav) return `bg-dark ${transition}`;
    if (isHome && !doPersistNav) return `bg-dark/0 ${transition}`;
    if (doPersistNav) return "bg-dark";

    return "bg-dark/0";
  };

  return (
    <header
      className={`${doPersistNav ? "sticky" : "fixed"} 
        pointer-events-none top-0 z-[1000] w-full`}
    >
      <div className={`px-4 sm:px-7 xxl:px-12 ${getBgClass()}`}>
        <HeaderInfoWrapper doPersistNav={doPersistNav}>
          {children}
        </HeaderInfoWrapper>
        <Nav
          toggled={toggled}
          setToggled={setToggled}
          doShrinkNav={doPersistNav}
          navItems={navItems}
          onNavSelected={onNavSelected}
          pathname={pathname}
        />
      </div>
      <MobileNav
        toggled={toggled}
        navItems={navItems}
        onNavSelected={onNavSelected}
        pathname={pathname}
      />
    </header>
  );
};

export default HeaderWrapper;
