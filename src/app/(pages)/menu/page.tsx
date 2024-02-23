"use client";
import {
  lunchItems,
  breakfastItems,
  dinnerItems,
  dessertItems,
  drinkItems,
  starterItems,
} from "@/constants";
import MenuItems from "./components/MenuItems";
import DailySpecial from "./components//DailySpecial";
import useMenuRefs from "./hooks/useMenuRefs";
import MenuPills from "./components/MenuPills";
import { TitleSection } from "@/hocs";
import FoodGallery from "./components/FoodGallery";

const page = () => {
  const menuRefMap = useMenuRefs();

  return (
    <div
      className="flex w-full flex-col items-center overflow-hidden 
      bg-offwhite"
    >
      <div
        className="scrollbar flex w-full overflow-auto 
          py-2 sm:hidden"
      >
        <MenuPills menuRefMap={menuRefMap} />
      </div>
      <div
        className="page-scale flex h-full flex-col justify-between 
          pb-8 sm:flex-row md:pb-14"
      >
        <div className={cols}>
          <div className="sm:hidden">
            <DailySpecial />
          </div>
          <MenuItems
            title="Starters"
            menuItems={starterItems}
            scrollRef={menuRefMap.get("starters")?.ref}
            id="starters"
          />
          <MenuItems
            title="Breakfast"
            menuItems={breakfastItems}
            scrollRef={menuRefMap.get("breakfast")?.ref}
            id="breakfast"
          />
          <MenuItems
            title="Lunch"
            menuItems={lunchItems}
            scrollRef={menuRefMap.get("lunch")?.ref}
            id="lunch"
          />
          <MenuItems
            title="Dinner"
            menuItems={dinnerItems}
            scrollRef={menuRefMap.get("dinner")?.ref}
            id="dinner"
          />
        </div>
        <div className={cols}>
          <div className="hidden sm:block">
            <DailySpecial />
          </div>
          <MenuItems
            title="Desserts"
            menuItems={dessertItems}
            scrollRef={menuRefMap.get("desserts")?.ref}
            id="desserts"
          />
          <MenuItems
            title="Drinks"
            menuItems={drinkItems}
            scrollRef={menuRefMap.get("drinks")?.ref}
            id="drinks"
          />
        </div>
      </div>
      <FoodGallery />
      <TitleSection
        title="Our Ingredients"
        containerClass="bg-second py-12"
        id="out-ingredients"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          sollicitudin iaculis eros at maximus. Suspendisse potenti. Nulla
          scelerisque nibh quis nibh sollicitudin faucibus. Mauris sagittis
          turpis mauris, vel vulputate lacus iaculis quis. Vivamus est mi,
          congue sed molestie eget, pharetra ut arcu. Nullam finibus nisl vel
          mauris fermentum, vel faucibus enim ultrices. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Maecenas egestas interdum
          felis, nec facilisis libero ullamcorper in. Integer convallis neque ut
          bibendum mattis. Nam fermentum congue nisl et iaculis. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam cursus mauris ut tellus fringilla posuere.
        </p>
      </TitleSection>
    </div>
  );
};

export default page;

const cols = "space-y-8 sm:w-5/12 lg:w-2/5";
